import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/assets/style/icofont/icofont.css'
import '@/assets/style/iconfont.css'
import '@/assets/style/font_2599126_5z9h7d52u1t/iconfont.css'
import '@/assets/style/font_2599126_5z9h7d52u1t/iconfont.js'
import '@/assets/style/font_2599126_m0b1cvabf7b/iconfont.css'
import '@/assets/style/font_2599126_m0b1cvabf7b/iconfont.js'
import '@/lib/css/mui.css'
import './lib/css/icons-extra.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import VideoPlayer from 'vue-video-player'
import axios from "axios";
import store from './store'

Vue.use(VideoPlayer)
Vue.use(MintUI)

axios.defaults.baseURL = 'http://127.0.0.1:8089'

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
