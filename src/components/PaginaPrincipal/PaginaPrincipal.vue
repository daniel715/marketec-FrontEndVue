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
import Header from  './Header.vue';
import Busqueda from './Busqueda.vue';
import Carrusel from './Carrusel.vue'
import Footer from './Footer.vue';
import Comprar from './Comprar.vue';

export default {
    components:{
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