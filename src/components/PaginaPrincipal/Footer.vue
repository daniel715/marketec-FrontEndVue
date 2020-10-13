<template>
  <div id="contenedor">
    <div id="padre" >
      <div id="col1" >
          <h2>Tiendas Asociadas</h2>
          <ul>
            <li>Tienda 1</li>
            <li>Tienda 2</li>
            <li>Tienda 3</li>
            <li>Tienda 4</li>
          </ul>
      </div>
      <div id="col2" >
            <h2>Servicios</h2>
              <h5>Tiendas</h5>
              <h5>Personas</h5>
      </div>
      <div id="col3" >
            <h2>Contactanos</h2>
            <div id="iconos" >
              <a href="https://www.fb.com">
                <img src="../../assets/fbicon.png" alt="iconofb">
              </a>
              <a href="">
                <img src="../../assets/youtubeicon.png" alt="iconoyoutube">
              </a>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped lang="sass">
#contenedor
  margin-top: 50px
  #padre
    color: white
    width: 100%
    display: flex
    justify-content: space-around
    background-color: #777777
    #col3
      display: flex
      flex-direction: column
      #iconos
        display: flex
        flex-direction: column
        a
          margin: 20px
          img
            width: 150px
</style>
