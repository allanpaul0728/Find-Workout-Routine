import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// import Home from '@/components/Home'
// import Login from '@/components/Login'
// import BMI from '@/components/BMI'

// Vue.use(Router);

// const router = new Router({
//     mode: "history",

//     routers: [
//         {
//             path: "/",
//             name: "Home",
//             component: Home
//         },
//         {
//             path: "/",
//             name: "Login",
//             component: Login
//         },
//         {
//             path: "/",
//             name: "BMI",
//             component: BMI
//         }
//     ]
// });

createApp(App).mount('#app')
