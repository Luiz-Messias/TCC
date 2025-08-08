import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

// Store de autenticação do sistema de gestão de bebidas
export const useAuthStore = defineStore('auth', () => {
  // Token e papel do usuário
  const token = ref(localStorage.getItem('token') || '')
  const papel = ref(localStorage.getItem('papel') || 'User')

  // Computed para saber se está autenticado
  const estaAutenticado = computed(() => !!token.value)

  // Função para login
  const login = async ({ email, senha, manterConectado }) => {
    try {
  // Chamada à API de autenticação
      const resposta = await axios.post('https://localhost:7143/api/Token/LoginUser', {
        email,
        senha,
      })
      token.value = resposta.data.token
      papel.value = resposta.data.papel || 'User'

      // Salva token conforme "manter conectado"
      if (manterConectado) {
        localStorage.setItem('token', token.value)
        localStorage.setItem('papel', papel.value)
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('papel')
      } else {
        sessionStorage.setItem('token', token.value)
        sessionStorage.setItem('papel', papel.value)
        localStorage.removeItem('token')
        localStorage.removeItem('papel')
      }
      return true
    } catch (erro) {
  // Tratamento de erro
      return false
    }
  }

  // Função para logout
  const logout = () => {
    token.value = ''
    papel.value = 'User'
    localStorage.removeItem('token')
    localStorage.removeItem('papel')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('papel')
  }

  return { token, papel, estaAutenticado, login, logout }
})
