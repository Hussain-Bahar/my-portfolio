import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: if your repo name changes, update this base
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  build: { outDir: "docs" } // GitHub Pages will serve /docs
});
