import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueRouter({
            dts: true,
            routesFolder: "src/pages",
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
