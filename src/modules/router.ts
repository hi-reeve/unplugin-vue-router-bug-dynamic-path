import type { ViteSetupModule } from "@/types/ViteSetupModule";
import { createRouter, createWebHistory } from "@vue-router";
import { setupLayouts } from "virtual:generated-layouts";

export const router = createRouter({
    extendRoutes(routes) {
        setupLayouts(routes);
        return routes;
    },
    history: createWebHistory(),
});
export const install: ViteSetupModule = app => {
    app.use(router);
};
