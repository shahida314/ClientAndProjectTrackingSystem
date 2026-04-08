import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();

  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await axios.get("http://localhost:5000/api/clients");
    setClients(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/clients/${editId}`, {
          name,
          email,
        });
        setEditId(null);
      } else {
        await axios.post("http://localhost:5000/api/clients", {
          name,
          email,
        });
      }

      setName("");
      setEmail("");
      fetchClients();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/clients/${id}`);
    fetchClients();
  };

  const handleEdit = (client) => {
    setName(client.name);
    setEmail(client.email);
    setEditId(client._id);
  };

  return (
    <div className="flex min-h-screen bg-slate-600">

      
      <div className="w-64 bg-gray-400 text-white p-5 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

        <ul className="space-y-4">
          <li
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer hover:text-gray-300"
          >
            Dashboard
          </li>

          <li
            onClick={() => navigate("/projects")}
            className="cursor-pointer hover:text-gray-300"
          >
            Projects
          </li>
        </ul>
      </div>

      
      <div className="flex-1">

      
        <div className="bg-white shadow p-4 text-center text-xl font-bold">
          Clients
        </div>

        <div className="p-6">

          
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-bold mb-4">
              {editId ? "Edit Client" : "Add Client"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <input
                type="email"
                placeholder="Client Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded w-full"
                required
              />

              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {editId ? "Update" : "Add"}
              </button>
            </form>
          </div>

          
          <div className="bg-white mt-8 p-5 rounded-xl shadow overflow-x-auto">
            <h2 className="text-lg font-bold mb-4">All Clients</h2>

            <table className="w-full border min-w-[500px]">
              <thead>
                <tr className="bg-gray-300">
                  <th className="p-2">Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {clients.map((c) => (
                  <tr key={c._id} className="border-t">
                    <td className="p-2">{c.name}</td>
                    <td className="p-2">{c.email}</td>

                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(c)}
                        className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(c._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Clients;