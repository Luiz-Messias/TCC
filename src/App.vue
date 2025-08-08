<template>
  <div id="app">
    <!-- Conteúdo da Página -->
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {},
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
