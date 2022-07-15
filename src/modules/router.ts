import type { ViteSetupModule } from '@/types/ViteSetupModule'
import { createRouter, createWebHistory } from '@vue-router'
import { setupLayouts } from 'virtual:generated-layouts'

export const router = createRouter({
  extendRoutes(routes) {
    const extendedRoutes = routes.map((route) => {
      if (route.name === 'home')
        return {
          ...route,
          meta: {
            ...route.meta,
            layout: 'auth-layout',
          },
        }

      return {
        ...route,
        meta: {
          ...route.meta,
          auth: true,
        },
      }
    })
    return setupLayouts(extendedRoutes)
  },
  history: createWebHistory(),
})
export const install: ViteSetupModule = (app) => {
  app.use(router)
}
