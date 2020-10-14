<template>
<div id="contenedor" >
    <div id="padre" >
        <Barra/>
        <ListaAgregados/>
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
        width: 80%
        display: flex
        flex-direction: row
</style>