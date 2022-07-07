import type { ViteSetupModule } from '@/types/ViteSetupModule'
import { createRouter, createWebHistory } from '@vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

export const router = createRouter({
  extendRoutes(routes) {
    return setupLayouts(routes).map((route) => {
      if (route.name === 'home') return route

      return {
        ...route,
        meta: {
          ...route.meta,
          auth: true,
        },
      }
    })
  },
  history: createWebHistory(),
})
export const install: ViteSetupModule = (app) => {
  app.use(router)
}
