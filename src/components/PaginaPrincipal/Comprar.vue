<template>
<div id="contenedor" >
    <div id="padre" >
        <div id="contenedorBarra" >
            <Barra/>
        </div>
    </div>
</div>

</template>

<script>
// si queremos usar un otro componente tenemos que importarlo y declararlo en un campo llamado
// components :
import Barra from './subcomponents/Barra.vue';


export default {
    name:"Comprar",
    components : {
        Barra
    }
}

</script>

<style lang="sass" scoped>
#contenedor
    display: flex
    justify-content: center
    margin-bottom: 20px
    height: 300px
    #padre
        width: 80%
        display: flex
        flex-direction: row
</style>