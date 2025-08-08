# Instruções para Agent — Sistema de Gestão de Bebidas

## Padrões Gerais do Projeto

- Use **Vue 3** com **Composition API** e coloque o js em arquivos separados.
- Nomes de componentes, variáveis e funções em **português**, coerentes com o domínio do sistema (ex: `TelaLogin.vue`, `listaPedidos`, `calcularImposto`).
- Utilize **Vue Router** para navegação com rotas nomeadas e guardas para proteger áreas restritas.
- Use **Axios** para comunicação HTTP com backend.
- Componentes devem ser **reutilizáveis**, coesos e bem organizados.
- Código deve ser comentado, legível e seguir princípios de **Clean Code**.
- Use **Tailwind CSS** para estilização, mantendo design limpo, moderno e responsivo.
- Gerencie estado local via Composition API ou Pinia/Vuex conforme necessidade.
- Sempre utilize ícones Font Awesome (`fas fa`) em todos os componentes e telas.

## Estrutura Funcional do Sistema

1. **Dashboard Principal (Área Bebidas)**

   - Tela inicial com resumo do sistema: estoque, pedidos recentes, alertas.

2. **Gestão de Pedidos**

   - Criar novo pedido.
   - Cancelar pedido.
   - Listar pedidos e seus status.

3. **Devolução de Produtos**

   - Processar devoluções.
   - Atualizar estoque automaticamente.

4. **Conversão de Unidades**

   - Ferramenta para conversão entre unidades usadas.

5. **Cálculo de Impostos**

   - Cálculo automático de impostos para produtos e pedidos.

6. **Gestão de Estoque**
   - Controle de entrada e saída.
   - Visualização detalhada do estoque atual.

## Boas Práticas e Regras

- Nomenclatura consistente: ex. `telaLogin.vue`, `gerenciarPedidos.vue`.
- Dados carregados/enviados via **Axios** com tratamento de erros.
- Autenticação com login funcional e fallback simulado enquanto backend não existir.
- Layout responsivo para desktop e dispositivos móveis.
- Formulários com validação e feedback visual claro.
- Mensagens de erro e sucesso amigáveis.
- Código documentado para facilitar manutenção.
- Priorizar experiência e usabilidade do usuário.

## UI e Estilo

- Design clean, profissional e consistente com o padrão do projeto.
- Uso harmonioso das cores da identidade visual.
- Ícones adequados para cada funcionalidade.
- Sidebar fixa ou responsiva para navegação principal.
- Espaçamentos, tipografia clara e elementos visuais intuitivos.
- Animações suaves onde fizer sentido (ex: loading, transições).

## Extras

- Autenticação completa com:
  - Tela de login com validação e feedback.
  - Armazenamento de token no `localStorage`.
  - Proteção de rotas e redirecionamento pós-login.
- Fallback para login simulado enquanto backend não estiver pronto.
- Dependências atualizadas e compatíveis com Vue 3 e Tailwind CSS.
- Evitar dependências externas desnecessárias para manter leveza.

---

> **Nota:** Utilize estas instruções para garantir que o código gerado seja consistente, reutilizável e alinhado com os objetivos e padrões do sistema de gestão de bebidas.

# Padrões para Vue e JavaScript no Projeto

## Vue.js

- Separe claramente as **responsabilidades** dentro do setup, usando funções e reativos (`ref`, `reactive`) organizados.
- Evite lógica duplicada, extraia em **composables reutilizáveis** quando possível.
- Prefira o uso de **`ref` para dados simples** e **`reactive` para objetos complexos**.
- Use **watchers** e **computed** para derivar dados e reagir a mudanças.
- Faça validação simples diretamente no componente, ou extraia para hooks/composables.
- Comente o código explicando o propósito das variáveis e funções.
- Não faça nada em **TypeScript**.
- Evite usar grandes blocos de lógica dentro do template — mantenha o template limpo, declarativo e apenas para renderização.

## JavaScript

- Siga princípios de **Clean Code**:
  - Nomes claros e sem abreviações obscuras.
  - Funções pequenas, com responsabilidade única.
  - Código legível e fácil de entender.
- Use async/await para chamadas assíncronas com Axios, sempre com tratamento de erros (`try/catch`).
- Evite side effects inesperados — prefira funções puras dentro de composables.
- Organize o código em módulos quando fizer sentido (ex: utils, api, composables).
- Prefira usar o **ES Modules** (import/export).
- Utilize destruturação para melhorar legibilidade e evitar repetição.
- Use template literals para strings dinâmicas.
- Evite repetição de código; reutilize funções/composables.
- Comente blocos complexos explicando a lógica.

-- Vou deixar um exemplo de como quero que seja construido os arquivos js:

```
import { ref } from 'vue';

export default {
  name: "Exemplo",
  setup() {
    const mensagem = ref("Bem-vindo ao Arcca Bebidas");

    const nomeFuncao = () => {
      // Lógica da função
    };

    return { mensagem };
  }
}
```

-- Vou deixar um exemplo de como quero que seja construido os arquivos vue:

```
<template>
  <div>
    <h1>{{ mensagem }}</h1>
    <button @click="nomeFuncao">Clique aqui</button>
  </div>
</template>

<script src="./Exemplo.js"></script>
```
