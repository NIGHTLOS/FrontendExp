import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import i18n from "./i18n";
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
import VueScrollTo from 'vue-scrollto';
import WOW from 'wowjs';
import 'animate.css';

const app = createApp(App)

app.use(router).use(i18n)
app.use(ElementPlus)
app.use(Swipe);
app.use(SwipeItem);
app.use(VueScrollTo);
app.mount('#app')
new WOW.WOW().init();