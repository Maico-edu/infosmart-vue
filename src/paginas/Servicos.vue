<script setup>
import { empresa } from '../dados/empresa'
// Para adicionar um serviço, inclua um item nesta lista.
const servicos = [
  { titulo: 'Assistência técnica de celulares', texto: 'Seu celular com problema? Fale com a equipe para avaliar o defeito e solicitar orçamento.' },
  { titulo: 'Manutenção e assistência técnica', texto: 'Suporte para equipamentos de informática. Consulte a equipe sobre o seu caso.' }
]
</script>
<template>
  <section class="titulo-pag"><div class="wrap"><p class="eyebrow">Serviços</p><h1>Assistência técnica e manutenção</h1><p class="sub">Atendimento na loja, com orçamento pelo WhatsApp.</p></div></section>
  <section class="secao"><div class="wrap">
    <div class="serv">
      <div class="serv-item" v-for="(s, i) in servicos" :key="s.titulo">
        <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
        <div><h3>{{ s.titulo }}</h3><p>{{ s.texto }}</p></div>
        <a class="btn btn-linha" :href="empresa.whatsapp" target="_blank" rel="noopener">Solicitar orçamento</a>
      </div>
    </div>
    <div class="pendente"><b style="color:#fff">Para completar:</b> detalhar aqui os serviços específicos (ex.: troca de tela, formatação, limpeza) assim que o dono da loja confirmar a lista. Edite a lista <code>servicos</code> neste arquivo.</div>
  </div></section>
</template>
