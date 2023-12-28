import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [react(), tsconfigPaths()],
  ssgOptions: {
    script: "sync",
    includeAllRoutes: true,
  },
});
