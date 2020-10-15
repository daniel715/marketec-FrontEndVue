<template>
    <div id="contenedor">
      <div id="padre" >
        <div id="elemento1">
          <img id="imagen" src="../../assets/descarga.png" alt="logo">
          <div id="titulos" >
            <h3>TIENDASDELIMA</h3>
            <h6>Haz que conozcan tu tienda</h6>
          </div>
        </div>

        <div id="elemento3" >
          <a href="#">Quienes Somos?</a>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Desear Vender?</a>
        </div>
        <button id="elemento2" class="btn btn-primary" > Iniciar Sesion </button>
      </div>
      <div id="lineagradiente" >
      </div>
    </div>

</template>

<style scoped lang="sass" >

#contenedor
  background-color: #ffffff
  display: flex
  justify-content: center
  flex-direction: column
  #padre
    width: 80%
    height: 100px
    display: flex
    align-self: center
    flex-direction: row
    justify-content: space-between
    #elemento1
      display: flex
      flex-direction: row
      img
        height: 100px
      #titulos
        padding-top: 16px
        h3, h6
          margin: 0
    #elemento2
      border: 0px
      height: min-content
      align-self: center
      background-color: #228877
    #elemento3
      width: 500px
      display: flex
      justify-content: space-around
      align-self: center
      a
        color: #555555
  #lineagradiente
    border-color: white
    height: 5px
    background: linear-gradient(to bottom, #777777, white)

</style>


<script>
export default {
  name: "Header"
}
</script>
