<!-- Estrutura de todas as páginas: cabeçalho + página atual + rodapé. -->
<script setup>
import Header from './componentes/Header.vue'
import Footer from './componentes/Footer.vue'
import BotaoWhatsApp from './componentes/BotaoWhatsApp.vue'
</script>
<template>
  <Header />
  <main><router-view /></main>
  <Footer />
  <BotaoWhatsApp />
</template>
