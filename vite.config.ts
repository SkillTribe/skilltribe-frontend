import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

export default defineConfig({
    plugins: [react(), TanStackRouterVite()],
    build: {
        outDir: "build",
        target: "es2020",
    },
    server: {
        open: true,
        port: 3000,
    },
    define: {
        "process.env": process.env,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
