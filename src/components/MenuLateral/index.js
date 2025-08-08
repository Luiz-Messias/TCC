import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router/index.js'

export default {
  name: 'Menu Lateral',
  setup() {
    const userAuthStore = useAuthStore()

    const Sair = () => {
      closeMenu()
      userAuthStore.logout()
      // Redireciona para a tela de login
      router.push({ name: 'Login' })
    }

    // Estado para controlar se o menu está aberto ou fechado
    const isMenuOpen = ref(false)

    // Função para alternar o estado do menu
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    // Função para fechar o menu
    const closeMenu = () => {
      isMenuOpen.value = false
    }

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
      Sair,
    }
  },
}
