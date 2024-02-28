import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
    root: "./",

    plugins: [
        react(),
        TanStackRouterVite(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/media",
                    dest: "src/assets",
                },
                {
                    src: "src/assets/site",
                    dest: "src/assets",
                },
            ],
        }),
    ],
    build: {
        outDir: "build",
        target: "es2020",
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split(".").at(1);
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = "img";
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
            },
        },
    },
    // publicDir: "./src/assets",
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
