import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import homeView from '@/components/homeView'
import loginView from '@/components/loginView'
import bmiCalc from '@/components/bmiCalc'
import bmiMetric from '@/components/bmiMetric'
import bmiUS from '@/components/bmiUS'
import workoutsProg from '@/components/workoutsProg'


const routes = [
    {
        path: "/",
        name: "home",
        component: homeView
    },
    {
        path: "/",
        name: "login",
        component: loginView
    },
    {
        path: "/",
        name: "bmi",
        component: bmiCalc
    },
    {
        path: "/metric",
        name: "bmiMetric",
        component: bmiMetric
    },
    {
        path: "/USunit",
        name: "bmiUS",
        component: bmiUS
    },
    {
        path: "/muscle",
        name: "muscle",
        components: workoutsProg
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  })

    
const app = createApp(App);
app.use(router)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app');

