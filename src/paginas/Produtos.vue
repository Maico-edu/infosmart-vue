<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { produtos, categorias } from '../dados/produtos'
import { empresa } from '../dados/empresa'
import CardProduto from '../componentes/CardProduto.vue'

const route = useRoute()
const ativa = ref(route.query.cat || 'todos')
const filtros = [{ id: 'todos', nome: 'Todos' }, ...categorias]
const itens = computed(() => produtos.filter(p => ativa.value === 'todos' || p.categoria === ativa.value))
</script>
<template>
  <section class="titulo-pag"><div class="wrap"><p class="eyebrow">Produtos</p><h1>Notebooks, PC Gamer, celulares e acessórios</h1><p class="sub">Consulte preço e disponibilidade com a equipe. A loja virtual também está disponível.</p></div></section>
  <section class="secao"><div class="wrap">
    <div class="filtros"><button v-for="f in filtros" :key="f.id" :class="{ on: f.id === ativa }" @click="ativa = f.id">{{ f.nome }}</button></div>
    <div class="grade"><CardProduto v-for="(p, i) in itens" :key="p.nome + i" :produto="p" /></div>
    <p v-if="!itens.length">Nenhum produto nesta categoria ainda.</p>
    <p class="aviso">Os itens marcados como “Exemplo” são ilustrativos e serão substituídos pelos produtos reais. Veja o catálogo completo na <a :href="empresa.lojaVirtual" target="_blank" rel="noopener" style="color:var(--ciano)">loja virtual</a>.</p>
  </div></section>
</template>
