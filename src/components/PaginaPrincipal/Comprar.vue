<template>
<div id="contenedor" >
    <div id="padre" >
        <div id="contenedorBarra" >
            <Barra/>
        </div>
        <div id="contenedorListaAgregados" >
            <ListaAgregados/>
        </div>
    </div>
</div>

</template>

<script>
// si queremos usar un otro componente tenemos que importarlo y declararlo en un campo llamado
// components :
import ListaAgregados from './ListaAgregados.vue';
import Barra from './Barra.vue';

export default {
    name:"Comprar",
    components : {
        ListaAgregados,
        Barra
    }
}

</script>

<style lang="sass" >
#contenedor
    display: flex
    justify-content: center
    #padre
        height: 800px
        width: 80%
        display: flex
        flex-direction: row
        #contenedorBarra
            width: 60%
        #contenedorListaAgregados
            width: 40%
</style>