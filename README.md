# Site InfoSmart Joinville (Vue 3 + Vite)

## O que instalar (uma vez)
1. **Node.js (versão LTS)**: https://nodejs.org — instale com as opções padrão.
2. **VS Code** com a extensão **Vue - Official** (opcional, ajuda a colorir o código).
3. Verifique no terminal: `node -v` e `npm -v` (devem mostrar números de versão). Se der erro, feche e reabra o VS Code.

## Como rodar
1. Extraia o ZIP e abra a pasta `infosmart-vue` no VS Code (Arquivo > Abrir Pasta).
2. Abra o terminal: menu **Terminal > Novo Terminal** (atalho Ctrl+').
3. Instale as dependências (só na primeira vez): `npm install`
4. Inicie o site: `npm run dev`
5. Abra no navegador o endereço mostrado (normalmente http://localhost:5173).
6. Para encerrar: clique no terminal e pressione **Ctrl+C**. Para iniciar de novo: `npm run dev`.

**Node, npm e package.json:** Node.js executa JavaScript no seu computador; o npm baixa as bibliotecas (Vue, Vite) listadas no `package.json` para a pasta `node_modules`; `npm run dev` roda o servidor de desenvolvimento do Vite, que atualiza a página ao salvar.

## Função de cada pasta
- `index.html` — arquivo base (título, favicon, fonte).
- `public/imagens/` — logo, fotos da loja (`loja/`) e de produtos (`produtos/`). No código, use `/imagens/...`.
- `src/main.js` — inicia o Vue. `src/App.vue` — cabeçalho + página + rodapé.
- `src/router/index.js` — lista de páginas e seus endereços.
- `src/paginas/` — uma página por arquivo: `Home`, `Produtos`, `Servicos`, `Sobre`, `Contato` (textos ficam aqui).
- `src/componentes/` — `Header`, `Footer`, `CardProduto`, `BotaoWhatsApp`.
- `src/estilos/` — `global.css` (cores, cabeçalho, rodapé), `home.css`, `produtos.css`, `interna.css` (serviços, sobre, contato).
- `src/dados/empresa.js` — **WhatsApp, Instagram, endereço, telefone, mapa**.
- `src/dados/produtos.js` — **lista de produtos**.

## Como alterar
- **Cores:** `src/estilos/global.css`, no topo (`--azul`, `--ciano`, `--bg`).
- **Logo:** substitua `public/imagens/logo.png` (mesmo nome), de preferência com o arquivo original.
- **Imagens:** coloque em `public/imagens/...` e ajuste o caminho (ex.: `/imagens/produtos/foto.jpg`).
- **Textos:** abra o `.vue` da página correspondente.
- **Adicionar produto:** em `src/dados/produtos.js`, copie um bloco `{ ... },` e edite (use `exemplo: false`).
- **Remover produto:** apague o bloco.
- **WhatsApp/Instagram/endereço:** `src/dados/empresa.js`.
- **Nova página:** crie `src/paginas/Garantia.vue` (copie `Sobre.vue`), importe e adicione uma rota em `src/router/index.js`, e inclua o link na lista `links` de `Header.vue`.

## Publicar
Rode `npm run build`. A pasta `dist/` gerada é o site pronto: envie-a para Netlify, Vercel, GitHub Pages ou a hospedagem da loja. (O roteador usa `#` nos endereços, então funciona em qualquer hospedagem sem configuração extra.)

## Erros comuns
- `npm não é reconhecido`: Node.js não instalado ou VS Code não reiniciado.
- Erro de permissão no PowerShell: use o terminal "Command Prompt" (setinha ao lado do + no terminal) ou rode `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.
- Porta em uso: o Vite sugere outra porta; use o endereço que ele mostrar.
- Tela em branco: veja a mensagem em vermelho no terminal ou no navegador (F12 > Console).
- Imagem não aparece: confira nome, maiúsculas e se está em `public/imagens/`.
