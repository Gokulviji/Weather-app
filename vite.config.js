import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Weather-app/",
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  preview: {
    host: "0.0.0.0",
    port: 8080, // You can choose any port you prefer
  },
});
