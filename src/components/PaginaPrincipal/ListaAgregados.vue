<template>
  <div id="contenedor" >
      <div id="padre" >
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

.item
    display: flex
    direction: row
    justify-content: space-around

</style>