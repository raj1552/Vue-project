import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Embed from 'v-video-embed'

const app = createApp(App)
app.use(Embed);
app.use(router)

app.mount('#app')