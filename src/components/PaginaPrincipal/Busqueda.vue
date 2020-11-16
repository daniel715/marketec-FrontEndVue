<template>
<div id="contenedor" >
  <div id="padre" >
    <h6>Que esta Buscando</h6>
    <input class="form-control col-6 "  type="text" placeholder="Busque cualquier producto" >
    <button class="btn btn-dark" > Buscar </button>
  </div>
</div>
</template>

<script>
export default {
name: "Busqueda"
}
</script>



<style lang="sass" scoped>
#contenedor
  display: flex
  justify-content: center
  flex-direction: row
  #padre
    height: 50px
    width: 80%
    margin-top: 40px
    display: flex
    justify-content: center
    flex-direction: row
    h6
      align-self: center
      margin-right: 10px
    input
      margin-right: 10px


</style>
