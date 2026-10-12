// PRODUTOS — para adicionar, copie um bloco { ... } e edite. Para remover, apague o bloco.
// categoria: "notebooks" | "gamer" | "celulares" | "acessorios"
// imagem: caminho dentro de public (ex.: "/imagens/produtos/notebook1.jpg"). Vazio = espaço reservado.
// exemplo: true mostra a etiqueta "Exemplo". Use false ao cadastrar um produto real.
export const categorias = [
  { id: 'notebooks', nome: 'Notebooks' },
  { id: 'gamer', nome: 'PC Gamer' },
  { id: 'celulares', nome: 'Celulares' },
  { id: 'acessorios', nome: 'Acessórios' }
]
export const produtos = [
  { categoria: 'notebooks', nome: 'Notebook — modelo a cadastrar', marca: 'Marca', info: 'Processador, memória e armazenamento a preencher.', imagem: '/imagens/loja/notebooks.jpg', exemplo: true },
  { categoria: 'notebooks', nome: 'Notebook — modelo a cadastrar', marca: 'Marca', info: 'Informações do produto a preencher.', imagem: '', exemplo: true },
  { categoria: 'gamer', nome: 'Notebook Gamer — modelo a cadastrar', marca: 'Marca', info: 'Placa de vídeo e especificações a preencher.', imagem: '/imagens/loja/gamer.jpg', exemplo: true },
  { categoria: 'gamer', nome: 'PC Gamer — configuração a cadastrar', marca: 'Montagem', info: 'Componentes a preencher.', imagem: '', exemplo: true },
  { categoria: 'celulares', nome: 'iPhone — modelo a cadastrar', marca: 'Apple', info: 'Modelo, capacidade e condição a preencher.', imagem: '', exemplo: true },
  { categoria: 'celulares', nome: 'Smartphone — modelo a cadastrar', marca: 'Marca', info: 'Informações do produto a preencher.', imagem: '', exemplo: true },
  { categoria: 'acessorios', nome: 'Acessório — item a cadastrar', marca: 'Marca', info: 'Descrição a preencher.', imagem: '', exemplo: true }
]
