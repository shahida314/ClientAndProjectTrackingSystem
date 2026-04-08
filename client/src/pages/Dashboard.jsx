import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  
  const [searchClient, setSearchClient] = useState("");
  const [searchProject, setSearchProject] = useState("");

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setStats(res.data.stats);
    setClients(res.data.clients);
    setProjects(res.data.projects);
  };

  
  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(searchClient.toLowerCase())
  );

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchProject.toLowerCase())
  );

  return (
    <div className="flex bg-gray-300 min-h-screen">
      
      <Sidebar />

      <div className="flex-1 p-6">
        
        <Navbar />

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <StatsCard title="Total Clients" value={stats.clients} />
          <StatsCard title="Active Projects" value={stats.active} />
          <StatsCard title="Completed Projects" value={stats.completed} />
        </div>

        
        <div className="bg-gray-50 mt-8 p-5 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
            <h2 className="text-lg font-bold">Recent Clients</h2>

            <input
              type="text"
              placeholder="Search client..."
              value={searchClient}
              onChange={(e) => setSearchClient(e.target.value)}
              className="border p-2 rounded w-full md:w-56"
            />
          </div>

          {filteredClients.length > 0 ? (
            filteredClients.map((c) => (
              <p key={c._id} className="border-b py-2">
                {c.name}
              </p>
            ))
          ) : (
            <p className="text-sm text-gray-500">No client found</p>
          )}
        </div>

        
        <div className="bg-white mt-8 p-5 rounded shadow">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-3">
            <h2 className="text-lg font-bold">Recent Projects</h2>

            <input
              type="text"
              placeholder="Search project..."
              value={searchProject}
              onChange={(e) => setSearchProject(e.target.value)}
              className="border p-2 rounded w-full md:w-56"
            />
          </div>

          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => (
              <p key={p._id} className="border-b py-2">
                {p.title} - {p.status}
              </p>
            ))
          ) : (
            <p className="text-sm text-gray-500">No project found</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;