import { createRouter, createWebHistory } from 'vue-router'
import mainPage from './pages/mainPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: mainPage }
    ]
})