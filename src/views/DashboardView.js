import { ref } from 'vue'

export default {
  name: 'DashboardView',
  components: {},
  setup() {
    const acoes = ref([
      { rotulo: 'Realizar Pedido', icone: 'fas fa-plus' },
      { rotulo: 'Devolução de Produtos', icone: 'fas fa-undo' },
      { rotulo: 'Converter Unidades', icone: 'fas fa-exchange-alt' },
      { rotulo: 'Cancelar Pedido', icone: 'fas fa-times' },
      { rotulo: 'Atualizar Preço', icone: 'fas fa-dollar-sign' },
      { rotulo: 'Calcular Impostos', icone: 'fas fa-calculator' },
    ])
    return {
      acoes,
    }
  },
}
