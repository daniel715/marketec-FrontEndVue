<template>
    <!-- template for the modal component -->
<button v-on:click="traerTiendas()" type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal1">
 Continuar
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myLargeModalLabel">TIENDAS CERCANAS</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" >
        <div class="card" id="padre" v-for= "item in mostrarTiendas" :key="item.id" >
            <img src="../../assets/tiendaReferencial.jpg" alt="imagenTienda" >
            <div id="col1" >
              <h5>Nombre: </h5>
              <span>{{item.nombre}}</span> <br/>
              <h5>Descripcion:</h5>
              <span>{{item.descripcion}}</span>
            </div>
            <div id="col2" >
              <h5>Telefono</h5>
              <span>{{item.telefono}}</span> <br/>
              <h5>Referencia</h5>
              <span>{{item.referencia}}</span>
            </div>
             <input type="button" value="Seleccionar" >
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Regresar</button>
        <button data-dismiss="modal" type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal2">
        Continuar
        </button>


      </div>
    </div>
  </div>
</div>


</template>


<script>
const axios = require('axios');
export default {
    computed:{
        mostrarTiendas(){
            return this.$store.state.listaTiendas
        }
    },
    methods:{
        traerTiendas(){
          // se envia el carrito de compras para que el back responda con las tiendas que tengan esos productos
              const carrito = this.$store.state.carritoCompra
              console.log(carrito)
            axios
            .post('aqui va el endpoint que recibe la lista de productos a comprar', carrito)
            .then( (response) => {
                 console.log("enviado con exito")
                 this.$store.commit("obtenerTiendas",response.data)
            })  
       
        }
    }
    
}
</script>

<style lang="sass" scoped>
.modal-body
  overflow-y: scroll
  #padre
    display: flex
    flex-direction: row
    justify-content: space-between
    img
      width: 180px
    div
      margin-bottom: 20px
    input
      height: 30px
      align-self: center
</style>
