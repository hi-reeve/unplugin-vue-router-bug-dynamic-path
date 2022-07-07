import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
Object.values(import.meta.globEager('./modules/*.ts')).map((i) =>
  i.install?.(app)
)
app.mount('#app')

// to inspect in dev
// export { setupLayouts } from 'virtual:generated-layouts'
