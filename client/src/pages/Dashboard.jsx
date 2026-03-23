import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setStats(res.data.stats);
    setClients(res.data.clients);
    setProjects(res.data.projects);
  };

  return (
    <div className="flex bg-gray-300 min-h-screen">
      
      <Sidebar />

      <div className="flex-1 p-6">
        
        <Navbar />

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <StatsCard title="Total Clients" value={stats.clients} />
          <StatsCard title="Active Projects" value={stats.active} />
          <StatsCard title="Completed Projects" value={stats.completed} />
        </div>

        {/* Recent Clients */}
        <div className="bg-gray-50 mt-8 p-5 rounded-xl shadow-md">
          <h2 className="text-lg font-bold mb-4">Recent Clients</h2>

          {clients.map((c) => (
            <p key={c._id} className="border-b py-2">{c.name}</p>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-white mt-8 p-5 rounded shadow">
          <h2 className="text-lg font-bold mb-4">Recent Projects</h2>

          {projects.map((p) => (
            <p key={p._id} className="border-b py-2">
              {p.title} - {p.status}
            </p>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;