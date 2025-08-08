<template>
  <div class="dashboard-container flex min-h-screen bg-gray-50">
    <!-- <MenuLateral /> -->
    <div class="flex-1 flex flex-col">
      <h1 class="text-2xl font-bold mb-8 mt-8 ml-8">Bem-vindo ao Arcca Bebidas</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8">
        <button v-for="acao in acoes" :key="acao.rotulo" class="dashboard-action">
          <i :class="acao.icone + ' mr-2'" style="width: 20px; text-align: center"></i>
          {{ acao.rotulo }}
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./DashboardView.js"></script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
}
.sidebar {
  min-height: 100vh;
}
.sidebar-btn {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #222;
  background: none;
  transition: background 0.2s;
  width: 100%;
  text-align: left;
}
.sidebar-btn:hover {
  background: #f3f4f6;
}
.dashboard-action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.25rem 1rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  font-weight: 500;
  font-size: 1rem;
  transition:
    box-shadow 0.2s,
    background 0.2s;
  border: 1px solid #f3f4f6;
}
.dashboard-action:hover {
  background: #f3f4f6;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.06);
}
</style>
