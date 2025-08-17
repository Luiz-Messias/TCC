import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'vue3-toastify/dist/index.css'
import Vue3Toastify from 'vue3-toastify'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(Vue3Toastify)
app.mount('#app')
