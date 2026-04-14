import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional, default Vite port
    proxy: {
      "/api": {
        target: "http://localhost:5000", // backend
        changeOrigin: true,              // important for headers
        secure: false,                   // in case https not used
      },
    },
  },
});