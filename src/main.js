import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import UI from "@/components/UI/index"

const app = createApp(App)

app.use(Maska)
UI.forEach(item => {
  app.component(item.name, item)
})

app.mount('#app')
