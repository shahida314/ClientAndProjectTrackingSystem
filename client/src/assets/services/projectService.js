

const API_URL = "https://clientandprojecttrackingsystem.onrender.com/api/projects";

const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const projectService = {
  getProjects: async () => {
    const res = await fetch(API_URL, {
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
  },

  createProject: async (projectData) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(projectData),
    });
    if (!res.ok) throw new Error("Failed to create project");
    return res.json();
  },
};

export default projectService;