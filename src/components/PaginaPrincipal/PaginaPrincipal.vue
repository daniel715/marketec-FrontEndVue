<template>
    <div>
        <Header/>
        <Busqueda/>
        <Comprar/>
        <Carrusel/>
        <Footer/>
    </div>
</template>

<script>
import Barra from './Barra';
import Header from  './Header.vue';
import Busqueda from './Busqueda.vue';
import Carrusel from './Carrusel.vue'
import Footer from './Footer.vue';
import Comprar from './Comprar.vue';

export default {
    components:{
        Barra,
        Header,
        Busqueda,
        Carrusel,
        Footer,
        Comprar
    }
}
</script>

<style lang="sass" scoped>

</style>