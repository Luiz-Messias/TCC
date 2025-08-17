<template>
  <div id="app" class="min-h-screen flex bg-gray-50">
    <MenuLateral v-if="estaAutenticado" />
    <div class="flex-1 min-h-screen ml-0 md:ml-0">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
      // Não exibe o menu lateral nas rotas de login e splash
      return authStore.estaAutenticado && route.path !== '/login' && route.path !== '/'
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
