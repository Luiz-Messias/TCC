export function parseApiError(erro) {
  let mensagem = 'Erro ao fazer operação.'
  if (
    erro.response &&
    erro.response.data &&
    erro.response.data.errors &&
    typeof erro.response.data.errors === 'object'
  ) {
    // Pega a primeira mensagem do primeiro campo de erro
    const firstKey = Object.keys(erro.response.data.errors)[0]
    if (firstKey && erro.response.data.errors[firstKey].length > 0) {
      mensagem = erro.response.data.errors[firstKey][0]
    }
  } else if (
    erro.response &&
    erro.response.data &&
    erro.response.data.data &&
    Array.isArray(erro.response.data.data) &&
    erro.response.data.data.length > 0
  ) {
    mensagem = erro.response.data.data[0]
  } else if (erro.response && erro.response.data && erro.response.data.message) {
    mensagem = erro.response.data.message
  } else if (erro.message) {
    mensagem = erro.message
  }
  return mensagem
}
