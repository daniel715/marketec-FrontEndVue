<template>
  <div id="contenedor" >
      <div id="padre">
          <div class="card" >
            <div class="card-header" >
                Productos Agregados
            </div>
            <div class="card-body" >
                <div class="item" v-for= "item in mostrar" :key="item.id"  >
                    <h5>{{key}}</h5>
                    <h6>{{item}}</h6>
                    <input min="1" type="number" style="width: 40px">  
                    <button class="btn btn-secondary" v-on:click="eliminarItem(item)" >Quitar</button>
                </div>
            </div>
            <div class="card-footer" >
                <Modal/>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
    name : "ListaAgregados",
    computed:{
        mostrar(){
            const arreglo = this.$store.state.carritoCompra
            return arreglo
        }
    },
    methods:{
        eliminarItem(nombreItem){
            this.$store.commit('eliminarProducto',nombreItem)
        }
    },
    components:{
           Modal
    }
}
</script>

<style lang="sass" scoped>
#contenedor
    width: 100%
    justify-content: center
    #padre
        width: 80%
        .card
            margin-top: 40px
            width: 100%
            .item
                margin-top: 10px
                display: flex
                direction: row
                justify-content: space-around
</style>