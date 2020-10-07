<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  <Header/>
  <!--<Carrusel/>-->
  <Barra/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import Busqueda from './components/Busqueda.vue';
import Barra from './components/Barra.vue';
import Carrusel from './components/Carrusel.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Busqueda,
    Barra,
    Carrusel
  }
});
</script>

<style lang="less">
#app {

}
</style>
