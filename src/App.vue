<template>
<!-- <RegistroUsuario/> -->
<router-view/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal.vue';
import RegistroProductos from './components/RegistroProductos/Formulario.vue';
import RegistroUsuario from './components/Signin/RegistroUsuario.vue';
import Login from './components/Login/InicioSesion.vue'

export default defineComponent( {
  name: 'App',
  components: {
    PaginaPrincipal,
    RegistroProductos,
    RegistroUsuario,
    Login
  },
});
</script>

<style lang="sass" scoped>

</style>
