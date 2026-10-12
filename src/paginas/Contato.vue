<script setup>
import { empresa } from '../dados/empresa'
</script>
<template>
  <section class="titulo-pag"><div class="wrap"><p class="eyebrow">Contato</p><h1>Fale com a InfoSmart</h1><p class="sub">O WhatsApp é o canal mais rápido para preço, disponibilidade e orçamento.</p></div></section>
  <section class="secao"><div class="wrap contato">
    <div>
      <div class="info"><small>WhatsApp</small><p>Atendimento comercial</p><a class="btn btn-azul" :href="empresa.whatsapp" target="_blank" rel="noopener">Chamar no WhatsApp</a></div>
      <div class="info"><small>Instagram</small><p>{{ empresa.instagramUser }}</p><a class="btn btn-linha" :href="empresa.instagram" target="_blank" rel="noopener">Abrir Instagram</a></div>
      <div class="info"><small>Loja virtual</small><p>Catálogo online</p><a class="btn btn-linha" :href="empresa.lojaVirtual" target="_blank" rel="noopener">Visitar loja virtual</a></div>
      <div class="info">
        <small>Endereço</small><p>{{ empresa.endereco || 'Shopping em Joinville — endereço a confirmar (editar em src/dados/empresa.js)' }}</p>
        <small>Telefone</small><p>{{ empresa.telefone || 'A confirmar (editar em src/dados/empresa.js)' }}</p>
        <small>Horário</small><p>{{ empresa.horario || 'A confirmar (editar em src/dados/empresa.js)' }}</p>
      </div>
    </div>
    <div class="mapa">
      <iframe v-if="empresa.mapaEmbed" :src="empresa.mapaEmbed" loading="lazy" title="Mapa da loja"></iframe>
      <span v-else>Mapa disponível após informar o link em src/dados/empresa.js (mapaEmbed).</span>
    </div>
  </div></section>
</template>
