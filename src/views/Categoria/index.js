import { onMounted, ref, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCategoriaStore } from '@/stores/categoriaStore'
import CategoriaModal from '@/components/Categoria/CategoriaModal.vue'

export default {
  name: 'CategoriaView',
  components: {
    CategoriaModal,
  },
  setup() {
    const categoriaStore = useCategoriaStore()
    const categoriaParaExcluir = ref(null)

    const {
      categorias,
      loading,
      paginaAtual,
      itensPorPagina,
      totalItens,
      totalPaginas,
      termoBusca,
      ordenacao,
      modalAberto,
    } = storeToRefs(categoriaStore)

    const {
      listarCategorias,
      abrirModal,
      excluirCategoria,
      aplicarFiltros,
      limparFiltros,
      alterarOrdenacao,
    } = categoriaStore

    const editarCategoria = (categoria) => {
      abrirModal(categoria)
    }

    const confirmarExclusao = (categoria) => {
      categoriaParaExcluir.value = categoria
    }

    const excluirCategoriaConfirmado = async () => {
      if (categoriaParaExcluir.value) {
        try {
          await excluirCategoria(categoriaParaExcluir.value.id)
        } finally {
          categoriaParaExcluir.value = null
        }
      }
    }

    const gerarPaginas = () => {
      const paginas = []
      const maxPaginas = 5
      const metade = Math.floor(maxPaginas / 2)

      let inicio = Math.max(1, paginaAtual.value - metade)
      let fim = Math.min(totalPaginas.value, inicio + maxPaginas - 1)

      if (fim - inicio < maxPaginas - 1) {
        inicio = Math.max(1, fim - maxPaginas + 1)
      }

      if (inicio > 1) {
        paginas.push(1)
        if (inicio > 2) paginas.push('...')
      }

      for (let i = inicio; i <= fim; i++) {
        paginas.push(i)
      }

      if (fim < totalPaginas.value) {
        if (fim < totalPaginas.value - 1) paginas.push('...')
        paginas.push(totalPaginas.value)
      }

      return paginas
    }

    // Atalho de teclado para criar nova categoria
    const handleKeyPress = (event) => {
      // Só executa se não houver modal aberto e a tecla for Tab
      if (event.key === 'Tab' && !modalAberto.value) {
        event.preventDefault()
        abrirModal()
      }
    }

    onMounted(async () => {
      await listarCategorias()
      // Adiciona o listener global para a tecla Tab
      document.addEventListener('keydown', handleKeyPress)
    })

    onUnmounted(() => {
      // Remove o listener quando o componente for desmontado
      document.removeEventListener('keydown', handleKeyPress)
    })

    return {
      // Estado
      categorias,
      loading,
      paginaAtual,
      itensPorPagina,
      totalItens,
      totalPaginas,
      termoBusca,
      ordenacao,
      categoriaParaExcluir,

      // Métodos
      listarCategorias,
      abrirModal,
      editarCategoria,
      confirmarExclusao,
      excluirCategoriaConfirmado,
      aplicarFiltros,
      limparFiltros,
      alterarOrdenacao,
      gerarPaginas,
    }
  },
}
