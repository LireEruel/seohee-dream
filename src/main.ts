import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import { useKakao } from 'vue3-kakao-maps'
import { VCodeBlock } from '@wdns/vue-code-block'
const app = createApp(App)

app.component('VCodeBlock', VCodeBlock)

app.use(router)
app.use(Antd)
app.mount('#app')
useKakao(import.meta.env.VITE_KAKAO_APP_KEY ?? '')
