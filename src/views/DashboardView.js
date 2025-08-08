import { ref } from 'vue'

export default {
  name: 'DashboardView',
  setup() {
    const menuItems = ref([
      { nome: 'Produtos', icone: 'fas fa-box', ativo: false },
      { nome: 'Clientes', icone: 'fas fa-users', ativo: false },
      { nome: 'Pedidos', icone: 'fas fa-shopping-cart', ativo: false },
      { nome: 'Relatórios', icone: 'fas fa-chart-bar', ativo: false },
      { nome: 'Devoluções', icone: 'fas fa-undo', ativo: false },
      { nome: 'Estoque', icone: 'fas fa-tags', ativo: false }
    ])

    const acoesPrincipais = ref([
      { 
        titulo: 'Realizar', 
        subtitulo: 'Pedido', 
        icone: 'fas fa-plus', 
        cor: 'blue',
        acao: () => console.log('Realizar Pedido')
      },
      { 
        titulo: 'Devolução', 
        subtitulo: 'de Produtos', 
        icone: 'fas fa-undo', 
        cor: 'green',
        acao: () => console.log('Devolução de Produtos')
      },
      { 
        titulo: 'Converter', 
        subtitulo: 'Unidades', 
        icone: 'fas fa-exchange-alt', 
        cor: 'purple',
        acao: () => console.log('Converter Unidades')
      },
      { 
        titulo: 'Cancelar', 
        subtitulo: 'Pedido', 
        icone: 'fas fa-times', 
        cor: 'red',
        acao: () => console.log('Cancelar Pedido')
      },
      { 
        titulo: 'Atualizar', 
        subtitulo: 'Preço', 
        icone: 'fas fa-dollar-sign', 
        cor: 'yellow',
        acao: () => console.log('Atualizar Preço')
      },
      { 
        titulo: 'Calcular', 
        subtitulo: 'Impostos', 
        icone: 'fas fa-calculator', 
        cor: 'indigo',
        acao: () => console.log('Calcular Impostos')
      }
    ])

    const navegarPara = (item) => {
      console.log(`Navegando para: ${item}`)
    }

    const executarAcao = (acao) => {
      acao()
    }

    return {
      menuItems,
      acoesPrincipais,
      navegarPara,
      executarAcao
    }
  }
}