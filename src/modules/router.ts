import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router/auto'

import { setupLayouts } from 'virtual:generated-layouts'
import type { ViteSetupModule } from '@/types/ViteSetupModule'

function recursiveLayouts(route: RouteRecordRaw): RouteRecordRaw {
  if (route.children) {
    for (let i = 0; i < route.children.length; i++) {
      route.children[i] = recursiveLayouts(route.children[i])
    }

    return route
  }

  return setupLayouts([route])[0]
}

export const router = createRouter({
  extendRoutes(routes) {
    return routes.map((route) => {
      // My custom extendRoutes logic, that adds a meta field to force specific pages under
      // a given path to require auth.
      if (route.path.includes('auth')) {
        route = {
          ...route,
          meta: {
            auth: false,
            layout: 'auth-layout',
            ...route.meta,
          },
        }
      }

      // For each route, pass it to recursiveLayouts, which will apply layouts properly
      // (without duplicating or accidentally double-wrapping components).

      return recursiveLayouts(route)
    })
  },
  history: createWebHistory(),
})
export const install: ViteSetupModule = (app) => {
  app.use(router)
}
