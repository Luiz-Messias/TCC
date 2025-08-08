import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'
import SplashScreen from '@/components/SplashScreen.vue'
import Login from '@/views/Login/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: DashboardView,
    //meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 🔥 Middleware de autenticação
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login') // Redireciona para login se não estiver autenticado
  } else if (to.meta.role && authStore.role !== to.meta.role) {
    next('/home') // Se não for admin, redireciona para home
  } else {
    next()
  }
})

export default router
