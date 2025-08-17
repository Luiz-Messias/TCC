import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore.js'
import SplashScreen from '@/components/SplashScreen.vue'
import Login from '@/views/Login/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import PedidoView from '@/views/Pedido/PedidoView.vue'

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
    meta: { requiresAuth: true },
  },
  {
    path: '/pedido/novo',
    name: 'NovoPedido',
    component: PedidoView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.estaAutenticado) {
    next('/login')
  } else if (to.meta.role && authStore.role !== to.meta.role) {
    next('/home')
  } else {
    next()
  }
})

export default router
