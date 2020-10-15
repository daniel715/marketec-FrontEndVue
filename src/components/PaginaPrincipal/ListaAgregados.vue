<template>
  <div id="contenedor" >
      <div id="padre">
          <div class="card" >
            <div class="card-header" >
                Productos Agregados 
            </div>
            <div class="card-body" >
                <div class="item" >
                    <h6>Producto 1</h6>
                    <h6>Cantidad</h6>
                    <button class="btn btn-secondary" >Quitar</button>
                </div>
                <div class="item" >
                    <h6>Producto 2</h6>
                    <h6>Cantidad</h6>
                    <button class="btn btn-secondary" >Quitar</button>
                </div>
                <div class="item" >
                    <h6>Producto 3</h6>
                    <h6>Cantidad</h6>
                    <button class="btn btn-secondary" >Quitar</button>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : "ListaAgregados"
}
</script>

<style lang="sass" >
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