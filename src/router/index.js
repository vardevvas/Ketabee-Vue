import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import signup from '../views/Signup.vue'
import WelcomeView from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.WelcomeView),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/registration',
      name: 'signup',
      component: signup
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
