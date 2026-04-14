
import User from "../Models/User.js"; // যদি প্রয়োজন হয়
// আপনার প্রজেক্টের Client এবং Project মডেল ইম্পোর্ট করুন (যেমন: import Client from "../Models/Client.js";)
import Client from "../Models/Client.js"; 
import Project from "../Models/Project.js";

export const getDashboardStats = async (req, res) => {
    try {
        // ডেটাবেস থেকে ডেটা ফেচ করা
        const clients = await Client.find();
        const projects = await Project.find();

        // স্ট্যাটাস ক্যালকুলেশন
        const stats = {
            clients: clients.length,
            active: projects.filter(p => p.status === 'active').length,
            completed: projects.filter(p => p.status === 'completed').length,
        };

        res.status(200).json({
            success: true,
            stats,
            clients,
            projects
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching dashboard data" });
    }
};