import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portal-site",
  publicDir: "/portal-site",
  plugins: [react()],
});
