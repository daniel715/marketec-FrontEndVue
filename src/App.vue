<template>
 <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <!-- <Header/>
  <Busqueda/>
  <Carrusel/> --> 
  <Comprar/>
  <!-- <Footer/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/PaginaPrincipal/HelloWorld.vue';
import Header from './components/PaginaPrincipal/Header.vue';
import Busqueda from './components/PaginaPrincipal/Busqueda.vue';
import Carrusel from './components/PaginaPrincipal/Carrusel.vue'
import Footer from './components/PaginaPrincipal/Footer.vue';
import Comprar from './components/PaginaPrincipal/Comprar.vue'


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Busqueda,
    Carrusel,
    Footer,
    Comprar
  }
});
</script>

<style lang="sass">
#app 


</style>
