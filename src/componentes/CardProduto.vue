<script setup>
import { empresa } from '../dados/empresa'
defineProps({ produto: { type: Object, required: true } })
</script>
<template>
  <article class="card">
    <div class="card-img">
      <img v-if="produto.imagem" :src="produto.imagem" :alt="produto.nome" loading="lazy">
      <div v-else class="vazio">Foto do produto</div>
      <span v-if="produto.exemplo" class="tag">Exemplo</span>
    </div>
    <div class="card-txt">
      <small>{{ produto.marca }}</small>
      <h3>{{ produto.nome }}</h3>
      <p>{{ produto.info }}</p>
      <a class="btn btn-linha" :href="empresa.whatsapp" target="_blank" rel="noopener">Consultar preço e disponibilidade</a>
    </div>
  </article>
</template>
