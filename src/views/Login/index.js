import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const email = ref(localStorage.getItem('keepConnectedEmail') || '')
    const password = ref(localStorage.getItem('keepConnectedPassword') || '')
    const keepConnected = ref(
      localStorage.getItem('keepConnected') === 'true' &&
        !!localStorage.getItem('keepConnectedEmail') &&
        !!localStorage.getItem('keepConnectedPassword'),
    )
    const authStore = useAuthStore()
    const router = useRouter()

    const handleLogin = async () => {
      if (keepConnected.value) {
        localStorage.setItem('keepConnected', 'true')
        localStorage.setItem('keepConnectedEmail', email.value)
        localStorage.setItem('keepConnectedPassword', password.value)
      } else {
        localStorage.removeItem('keepConnected')
        localStorage.removeItem('keepConnectedEmail')
        localStorage.removeItem('keepConnectedPassword')
      }
      // const success = await authStore.login({
      //   email: email.value,
      //   password: password.value,
      //   keepConnected: keepConnected.value,
      // })
      const success = true
      if (success) {
        router.push('/home') // Redireciona após login
      }
    }

    // Limpa email/senha salvos ao desmarcar keepConnected
    const onKeepConnectedChange = () => {
      if (!keepConnected.value) {
        localStorage.removeItem('keepConnected')
        localStorage.removeItem('keepConnectedEmail')
        localStorage.removeItem('keepConnectedPassword')
        email.value = ''
        password.value = ''
      }
    }

    return {
      email,
      password,
      keepConnected,
      handleLogin,
      onKeepConnectedChange,
    }
  },
}
