import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './styles/index.scss'

import router from './router'

// eslint-disable-next-line import/order
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
