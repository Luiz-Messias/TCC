<template>
  <div class="w-60 border-r-2 shadow-lg h-full min-h-screen flex flex-col">
    <h2 class="flex justify-center">
      <router-link to="/home">
        <img
          src="@/assets/logo-preto-branco.png"
          alt="Logo Arcca Bebidas"
          class="w-[150px] h-[150px]"
        />
      </router-link>
    </h2>
    <nav>
      <ul class="space-y-2">
        <li>
          <router-link
            to="/home"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-home mr-3"></i>
            Início
          </router-link>
        </li>
        <li>
          <router-link
            to="/produtos"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-box mr-3"></i>
            Produtos
          </router-link>
        </li>
        <li>
          <router-link
            to="/clientes"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-users mr-3"></i>
            Clientes
          </router-link>
        </li>
        <li>
          <router-link
            to="/pedido/novo"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-shopping-cart mr-3"></i>
            Pedidos
          </router-link>
        </li>
        <li>
          <router-link
            to="/relatorios"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-chart-bar mr-3"></i>
            Relatórios
          </router-link>
        </li>
        <li>
          <router-link
            to="/devolucoes"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-undo mr-3"></i>
            Devoluções
          </router-link>
        </li>
        <li>
          <router-link
            to="/estoque"
            class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <i class="fas fa-tags mr-3"></i>
            Estoque
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script src="./index.js"></script>
