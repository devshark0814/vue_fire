import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home/Home.vue';
import About from '@/pages/About/About.vue';
import Login from '@/pages/Login/Login.vue';
import Register from '@/pages/Register/Register.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
