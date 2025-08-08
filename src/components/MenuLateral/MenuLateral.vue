<template>
  <div>
    <!-- Ícone de hambúrguer com classe dinâmica -->
    <div class="menu-icon" :class="{ active: isMenuOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Menu lateral -->
    <div class="menu-lateral" :class="{ active: isMenuOpen }">
      <ul>
        <li @click="closeMenu">
          <router-link to="/home">Início</router-link>
        </li>
        <li @click="closeMenu">
          <router-link to="/relatorios">Relatórios</router-link>
        </li>
        <li @click="closeMenu">
          <router-link to="/contatos">Contato</router-link>
        </li>
        <li @click="Sair()">
          <router-link to="/login">Sair</router-link>
        </li>
      </ul>
    </div>

    <!-- Overlay para escurecer o fundo quando o menu está aberto -->
    <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
/* Estilo do ícone de hambúrguer */
.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.menu-icon span {
  width: 100%;
  height: 3px;
  background-color: #333;
  transition: all 0.3s ease;
}

/* Transformação do ícone de hambúrguer em "X" */
.menu-icon.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon.active span:nth-child(2) {
  opacity: 0;
}

.menu-icon.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Estilo do menu lateral */
.menu-lateral {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 999;
}

.menu-lateral.active {
  left: 0;
}

.menu-lateral ul {
  list-style: none;
  padding: 60px 20px 0;
}

.menu-lateral ul li {
  margin-bottom: 20px;
  font-size: 18px;
  cursor: pointer;
}

.menu-lateral ul li:hover {
  color: #007bff;
}

/* Estilo do overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;
  z-index: 998;
}

.overlay.active {
  opacity: 1;
  visibility: visible;
}
</style>
