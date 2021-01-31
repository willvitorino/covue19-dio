import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import i18n from "./commons/i18n"

const app = createApp(App)
app.use(ElementPlus)
app.use(i18n)
app.use(VueAxios, axios)
app.mount('#app')
