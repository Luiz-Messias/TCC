<template>
  <div id="app">
    <!-- Menu Lateral -->
    <div>
      <MenuLateral v-if="estaAutenticado" />
    </div>

    <!-- Conteúdo da Página -->
    <div class="content transition-transform duration-300 ease-in-out">
      <router-view />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore.js'
import MenuLateral from '../src/components/MenuLateral/MenuLateral.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    MenuLateral,
  },
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
}

#app {
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  margin-left: 0; /* Inicialmente sem margem */
  transition: margin-left 0.3s ease; /* Transição suave para o deslocamento */
}

/* Quando o menu estiver aberto, desloque o conteúdo para a direita */
.menu-lateral.active ~ .content {
  margin-left: 250px; /* Largura do menu lateral */
}
</style>
