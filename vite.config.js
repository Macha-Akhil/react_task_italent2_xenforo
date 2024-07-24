import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js
// import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/provider_data": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        // pathRewrite: { '^/provider_data': '' }, // Use this if you need to remove the '/provider_data' prefix
      },
      "/provider_sorted_data": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        secure: false,
        // pathRewrite: { '^/provider_sorted_data': '' }, // Use this if you need to remove the '/provider_sorted_data' prefix
      },
    },
  },
});
