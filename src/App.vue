<template>
 <RegistroProductos/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Header from './components/PaginaPrincipal/Header.vue';
import Busqueda from './components/PaginaPrincipal/Busqueda.vue';
import Carrusel from './components/PaginaPrincipal/Carrusel.vue'
import Footer from './components/PaginaPrincipal/Footer.vue';
import Comprar from './components/PaginaPrincipal/Comprar.vue';
import RegistroProductos from './components/RegistroProductos/Formulario.vue';
import RegistroUsuario from './components/Signin/RegistroUsuario.vue';
import Login from './components/Login/InicioSesion.vue'

export default defineComponent( {
  name: 'App',

  components: {
    Header,
    Busqueda,
    Carrusel,
    Footer,
    Comprar,
    RegistroProductos,
    RegistroUsuario,
    Login
  },
});
</script>

<style lang="sass" scoped>

</style>
