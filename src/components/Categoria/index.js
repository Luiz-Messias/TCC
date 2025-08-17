import { storeToRefs } from 'pinia'
import { useCategoriaStore } from '@/stores/categoriaStore'
import { ref, watch, nextTick } from 'vue'

export default {
  name: 'CategoriaModal',
  setup() {
    const categoriaStore = useCategoriaStore()
    const campoNome = ref(null)

    const { categoria, modalAberto, modoEdicao, loading } = storeToRefs(categoriaStore)

    const { fecharModal, criarCategoria, atualizarCategoria } = categoriaStore

    const salvarCategoria = async () => {
      try {
        if (modoEdicao.value) {
          await atualizarCategoria(categoria.value)
        } else {
          categoria.value.id = 0
          await criarCategoria(categoria.value)
        }
      } catch (erro) {
        // Erro já tratado na store
        console.error('Erro ao salvar categoria:', erro)
      }
    }

    // Foca no campo nome quando o modal abre
    watch(modalAberto, (novoValor) => {
      if (novoValor) {
        nextTick(() => {
          if (campoNome.value) {
            campoNome.value.focus()
          }
        })
      }
    })

    return {
      categoria,
      modalAberto,
      modoEdicao,
      loading,
      campoNome,
      fecharModal,
      salvarCategoria,
    }
  },
}
