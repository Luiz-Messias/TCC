import { ref, watch, computed } from 'vue'

export default {
  name: 'SeletorProduto',
  props: {
    produtos: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'selecionados'],
  setup(props, { emit }) {
    const busca = ref('')
    const produtosFiltrados = ref([])
    const produtosSelecionados = ref([...props.modelValue])

    const produtoSelecionadoIds = computed(() => produtosSelecionados.value.map((p) => p.id))

    const filtrarProdutos = () => {
      const termo = busca.value.trim().toLowerCase()
      if (!termo) {
        produtosFiltrados.value = []
        return
      }
      produtosFiltrados.value = props.produtos.filter(
        (p) => p.nome.toLowerCase().includes(termo) || String(p.id).includes(termo),
      )
    }

    const selecionarProduto = (produto) => {
      if (!produtoSelecionadoIds.value.includes(produto.id)) {
        produtosSelecionados.value.push(produto)
        emit('update:modelValue', produtosSelecionados.value)
        emit('selecionados', produtosSelecionados.value)
      }
    }

    const removerProduto = (produto) => {
      produtosSelecionados.value = produtosSelecionados.value.filter((p) => p.id !== produto.id)
      emit('update:modelValue', produtosSelecionados.value)
      emit('selecionados', produtosSelecionados.value)
    }

    watch(
      () => props.modelValue,
      (novo) => {
        produtosSelecionados.value = [...novo]
      },
    )

    return {
      busca,
      produtosFiltrados,
      produtosSelecionados,
      produtoSelecionadoIds,
      filtrarProdutos,
      selecionarProduto,
      removerProduto,
    }
  },
}
