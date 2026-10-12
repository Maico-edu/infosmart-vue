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
        <small>Telefone</small><p>{{ empresa.telefone || '+55 47 9902-1010' }}</p>
        <small>Horário</small><p>{{ empresa.horario || 'Seg a Sáb, 10h às 22h' }}</p>
      </div>
    </div>
    <div class="mapa">
    <div class="mapa">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.172791810764!2d-48.84873982479705!3d-26.3209037770049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0f8943adb67%3A0x3ef34bfd80829073!2sAv.%20Get%C3%BAlio%20Vargas%2C%201446%20-%2035%20-%20Bucarein%2C%20Joinville%20-%20SC%2C%2089202-002!5e0!3m2!1spt-BR!2sbr!4v1791825753928!5m2!1spt-BR!2sbr"
    width="100%"
    height="700"
    style="border: 0; display: block;"
    allowfullscreen
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    title="Localização da InfoSmart Joinville"
  ></iframe>
</div>
    </div>
  </div></section>
</template>
