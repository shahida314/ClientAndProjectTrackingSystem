import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js"; // অথেন্টিকেশন চেক করার জন্য

const router = express.Router();

router.get("/", protect, getDashboardStats); // লগইন করা ইউজার ছাড়া ডেটা দেখাবে না

export default router;