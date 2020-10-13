<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  <!-- <Header/>
  <Busqueda/>
  <Carrusel/> -->
  <Barra/>
  <!-- <Footer/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/PaginaPrincipal/HelloWorld.vue';
import Header from './components/PaginaPrincipal/Header.vue';
import Busqueda from './components/PaginaPrincipal/Busqueda.vue';
import Barra from './components/PaginaPrincipal/Barra.vue';
import Carrusel from './components/PaginaPrincipal/Carrusel.vue'
import Footer from './components/PaginaPrincipal/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Busqueda,
    Barra,
    Carrusel,
    Footer
  }
});
</script>

<style lang="less">
#app {

}
</style>
