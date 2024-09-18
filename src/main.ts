import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, NavBar, Tabbar, TabbarItem, Search } from 'vant';
import * as VueRouter from 'vue-router';
import routes from './config/route.ts'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(router);
app .mount('#app')
