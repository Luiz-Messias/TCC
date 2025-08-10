<template>
  <div id="app" class="min-h-screen flex bg-gray-50">
    <!-- Menu lateral fixo -->
    <MenuLateral v-if="estaAutenticado" />
    <!-- Conteúdo principal -->
    <div class="flex-1 min-h-screen ml-0 md:ml-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useRoute } from 'vue-router'
import MenuLateral from './components/MenuLateral/MenuLateral.vue'

export default {
  name: 'App',
  components: { MenuLateral },
  setup() {
    const authStore = useAuthStore()
    const route = useRoute()

    const estaAutenticado = computed(() => {
      return true || (authStore.isAuthenticated && route.path !== '/login')
    })

    return {
      estaAutenticado,
    }
  },
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  font-family: 'Inter', sans-serif;
}

#app {
  min-height: 100vh;
}

.content {
  width: 100%;
  height: 100vh;
}
</style>
