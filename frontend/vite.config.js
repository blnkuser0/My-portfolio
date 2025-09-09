import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      "my-portfolio-6391.onrender.com", // <-- Render domain
      "localhost", // <-- Allow local development
    ],
  },
});
