import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset URLs support both a domain root and GitHub Pages subpaths.
  base: "./",
  plugins: [react()],
});
