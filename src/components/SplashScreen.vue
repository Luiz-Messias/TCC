<template>
  <div class="splash-screen">
    <div class="logo-container animate-fade-in">
      <img src="../assets/logo-preto-branco.png" alt="Logo Arcca Bebidas" class="logo" />
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SplashScreen',
  setup() {
    const router = useRouter()

    onMounted(() => {
      setTimeout(() => {
        router.push('/login')
      }, 2000) // 2 segundos para uma experiência mais fluida
    })

    return {}
  },
}
</script>

<style scoped>
.splash-screen {
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0e7ff 0%, #fff 60%, #bae6fd 100%);
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 180px;
  max-width: 80vw;
  margin-bottom: 2.5rem;
  filter: drop-shadow(0 4px 24px rgba(0, 0, 0, 0.08));
  transition: transform 0.5s;
}

.animate-fade-in {
  animation: fadeIn 1.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.loader {
  border: 4px solid #e0e7ff;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  animation: spin 1s linear infinite;
  margin-top: 1.5rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 480px) {
  .logo {
    width: 120px;
    margin-bottom: 1.5rem;
  }
  .loader {
    width: 28px;
    height: 28px;
  }
}
</style>
