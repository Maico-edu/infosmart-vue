<script setup>
import { ref } from 'vue'
import { empresa } from '../dados/empresa'
const aberto = ref(false)
const links = [['/', 'Início'], ['/produtos', 'Produtos'], ['/servicos', 'Serviços'], ['/sobre', 'Sobre'], ['/contato', 'Contato']]
</script>
<template>
  <header class="topo">
    <div class="wrap topo-in">
      <router-link to="/" class="marca" aria-label="InfoSmart — início"><img src="/imagens/logo.png" alt="InfoSmart Loja de Notebook, Celular, Pc Gamer"></router-link>
      <nav class="menu" :class="{ aberto }" aria-label="Principal" @click="aberto = false">
        <router-link v-for="l in links" :key="l[0]" :to="l[0]" active-class="ativo" exact-active-class="ativo">{{ l[1] }}</router-link>
      </nav>
      <a class="btn btn-azul topo-cta" :href="empresa.whatsapp" target="_blank" rel="noopener">WhatsApp</a>
      <button class="burger" aria-label="Abrir menu" :aria-expanded="aberto" @click="aberto = !aberto"><span></span><span></span><span></span></button>
    </div>
  </header>
</template>
