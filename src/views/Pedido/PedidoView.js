import { ref, computed } from 'vue'

export default {
  name: 'PedidoView',
  setup() {
    // Dados simulados para clientes e produtos
    const clientes = ref([
      { id: 1, nome: 'Bar do Zé' },
      { id: 2, nome: 'Mercado Central' },
      { id: 3, nome: 'Restaurante Sabor' },
    ])
    const produtos = ref([
      { id: 1, nome: 'Cerveja 600ml', preco: 8.5 },
      { id: 2, nome: 'Refrigerante 2L', preco: 7.0 },
      { id: 3, nome: 'Água Mineral', preco: 3.5 },
    ])

    // Formulário
    const cliente = ref('')
    const data = ref('')
    const itens = ref([{ produtoId: '', quantidade: 1 }])

    // Computed para calcular o total do pedido
    const totalPedido = computed(() => {
      return itens.value.reduce((total, item) => {
        const prod = produtos.value.find((p) => p.id === item.produtoId)
        return total + (prod ? prod.preco * item.quantidade : 0)
      }, 0)
    })

    // Métodos
    const adicionarItem = () => {
      itens.value.push({ produtoId: '', quantidade: 1 })
    }
    const removerItem = (idx) => {
      if (itens.value.length > 1) itens.value.splice(idx, 1)
    }
    const limparFormulario = () => {
      cliente.value = ''
      data.value = ''
      itens.value = [{ produtoId: '', quantidade: 1 }]
    }
    const salvarPedido = () => {
      // Aqui você pode integrar com API ou store
      alert('Pedido salvo com sucesso!')
      limparFormulario()
    }
    const handleCardClick = () => {}

    // Filtro para moeda
    const currency = (valor) => {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return {
      clientes,
      produtos,
      cliente,
      data,
      itens,
      totalPedido,
      adicionarItem,
      removerItem,
      limparFormulario,
      salvarPedido,
      handleCardClick,
      currency,
    }
  },
}
