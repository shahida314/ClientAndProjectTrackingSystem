import axios from "axios";

const API = "https://clientandprojecttrackingsystem.onrender.com/api/auth";

const authService = {
    login: async (data) => (await axios.post(`${API}/login`, data)).data,
    register: async (data) => (await axios.post(`${API}/register`, data)).data,
};

export default authService;