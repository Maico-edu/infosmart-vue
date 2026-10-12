<script setup>
import { empresa } from '../dados/empresa'
const ano = new Date().getFullYear()
</script>
<template>
  <footer class="rodape">
    <div class="wrap rodape-in">
      <div><img src="/imagens/logo.png" alt="InfoSmart" class="rodape-logo"><p>Notebooks, celulares, PC Gamer e assistência técnica em Joinville.</p></div>
      <div><h4>Navegação</h4>
        <router-link to="/">Início</router-link><router-link to="/produtos">Produtos</router-link><router-link to="/servicos">Serviços</router-link><router-link to="/sobre">Sobre</router-link><router-link to="/contato">Contato</router-link>
      </div>
      <div><h4>Contato</h4>
        <a :href="empresa.whatsapp" target="_blank" rel="noopener">WhatsApp</a>
        <a :href="empresa.instagram" target="_blank" rel="noopener">Instagram {{ empresa.instagramUser }}</a>
        <a :href="empresa.lojaVirtual" target="_blank" rel="noopener">Loja virtual</a>
        <span v-if="empresa.telefone">{{ empresa.telefone }}</span>
        <span v-if="empresa.endereco">{{ empresa.endereco }}</span>
      </div>
    </div>
    <div class="wrap copy">© {{ ano }} InfoSmart Joinville. Todos os direitos reservados.</div>
  </footer>
</template>
