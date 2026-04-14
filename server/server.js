import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";

const app = express();

// Middleware
// server.js ফাইলে এটি খুঁজুন এবং এভাবে আপডেট করুন
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // উভয় পোর্টই লিস্টে যোগ করুন
    credentials: true
}));
app.use(express.json());

// Database Connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/clients", clientRoutes);

// Test
app.get("/", (req, res) => res.send(" Server is running"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));