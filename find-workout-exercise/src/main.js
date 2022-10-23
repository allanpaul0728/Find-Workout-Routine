import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from '@/components/Home'
import Login from '@/components/Login'
import BMI from '@/components/BMI'
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/",
        name: "BMI",
        component: BMI
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes, 
  })  

    
const app = createApp(App);
app.use(router)
app.mount('#app');

