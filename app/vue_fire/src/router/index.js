import Vue from "vue";
import Router from "vue-router";
import store from "@/store/index.js";

import Home from "@/pages/Home/Home.vue";
import About from "@/pages/About/About.vue";
import Login from "@/pages/Login/Login.vue";
import Register from "@/pages/Register/Register.vue";
import OgaSysBot from "@/pages/OgaSysBot/OgaSysBot.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About,
            beforeEnter(to, from, next) {
                (store.getters.idToken) ? next() : next("/login");
            }
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
            beforeEnter(to, from, next) {
                (store.getters.idToken) ? next("/") : next();
            }
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
            beforeEnter(to, from, next) {
                (store.getters.idToken) ? next("/") : next();
            }
        },
        {
            path: "/ogaSysBot",
            name: "OgaSysBot",
            component: OgaSysBot,
            beforeEnter(to, from, next) {
                (store.getters.idToken) ? next() : next("/Login");
            }
        }
    ]
});
