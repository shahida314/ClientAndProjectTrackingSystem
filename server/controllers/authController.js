import User from "../Models/User.js";
import generateToken from "../utils/generateToken.js";

// ── REGISTER ──────────────────────────────────────────────────
export const register = async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body;

        if (!fullName || !username || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email or username already exists" });
        }

        const newUser = new User({ fullName, username, email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "Registration successful ✅" });

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// ── LOGIN ─────────────────────────────────────────────────────
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // username দিয়ে user খোঁজো
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = generateToken(user._id);
        const userData = user.toObject();
        delete userData.password;

        res.status(200).json({
            success: true,
            message: "Login successful ✅",
            token,
            user: userData
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};