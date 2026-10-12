<script setup>
import { empresa } from '../dados/empresa'
</script>
<template>
  <section class="hero"><div class="wrap"><div class="hero-in">
    <div>
      <p class="eyebrow">Loja física em Joinville</p>
      <h1>Tecnologia para trabalhar, jogar e <span>se conectar.</span></h1>
      <p>Notebooks, iPhones, PC Gamer e assistência técnica. Venha conhecer a loja ou fale com a equipe pelo WhatsApp.</p>
      <div class="botoes"><router-link class="btn btn-azul" to="/produtos">Ver produtos</router-link><router-link class="btn btn-linha" to="/contato">Entrar em contato</router-link></div>
      <div class="fatos"><div><b>Mais de 20 anos</b>de experiência (informado no Instagram)</div><div><b>Loja física</b>em shopping de Joinville</div><div><b>Assistência técnica</b>celulares e informática</div></div>
    </div>
    <figure class="hero-foto"><img src="/imagens/loja/fachada.jpg" alt="Fachada da loja InfoSmart"><figcaption>Loja InfoSmart — Joinville</figcaption></figure>
  </div></div></section>

  <section class="secao alt"><div class="wrap">
    <p class="eyebrow">Produtos</p><h2>O que você encontra na loja</h2>
    <div class="cats">
      <router-link class="cat" to="/produtos?cat=notebooks"><h3>Notebooks</h3><p>Para estudo, trabalho e o dia a dia.</p><span>Ver notebooks →</span></router-link>
      <router-link class="cat" to="/produtos?cat=gamer"><h3>PC Gamer</h3><p>Notebooks e computadores para jogos.</p><span>Ver PC Gamer →</span></router-link>
      <router-link class="cat" to="/produtos?cat=celulares"><h3>Celulares</h3><p>iPhones e outros smartphones.</p><span>Ver celulares →</span></router-link>
      <router-link class="cat" to="/produtos?cat=acessorios"><h3>Acessórios</h3><p>Itens de informática e celular.</p><span>Ver acessórios →</span></router-link>
    </div>
  </div></section>

  <section class="secao"><div class="wrap dois">
    <div><p class="eyebrow">Serviços</p><h2>Deu problema? A gente resolve.</h2>
      <ul class="lista-serv"><li><b>Assistência técnica de celulares</b><br>Avaliação e conserto.</li><li><b>Manutenção e assistência técnica</b><br>Para equipamentos de informática.</li></ul>
      <router-link class="btn btn-linha" to="/servicos">Ver serviços</router-link></div>
    <div class="loja-fotos"><img src="/imagens/loja/notebooks.jpg" alt="Notebooks expostos na loja" loading="lazy"><img src="/imagens/loja/gamer.jpg" alt="Notebook gamer na loja" loading="lazy"></div>
  </div></section>

  <section class="secao alt cta"><div class="wrap"><h2>Procurando algo específico?</h2><p class="sub" style="margin-inline:auto">Consulte preço e disponibilidade direto com a equipe.</p>
    <div class="botoes"><a class="btn btn-azul" :href="empresa.whatsapp" target="_blank" rel="noopener">Chamar no WhatsApp</a><a class="btn btn-linha" :href="empresa.instagram" target="_blank" rel="noopener">Ver o Instagram</a></div></div></section>
</template>
