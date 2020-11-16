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

        <div id="elemento2" >
          <a href="#">Quienes Somos?</a>
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Desear Vender?</a>
        </div>
        <div id="elemento3" >
         
        </div>
        
      </div>
      <div id="lineagradiente" >
      </div>
    </div>
</template>
<script>

export default {
  
  data(){
    return{
      esHeader:true
    }
  },
  name: "Header",
  computed:{
    state(){
      return this.$store.state.counter;
    }
  },
  components:{
    
  }
}
</script>

<style lang="sass" scoped>

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
     width: 500px
     display: flex
     justify-content: space-around
     align-self: center
     a
       color: #555555
    #elemento3
      border: 0px
      height: min-content
      align-self: center
      background-color: #228877
  #lineagradiente
    border-color: white
    height: 7px
    background: linear-gradient(to bottom, #777777, white)

</style>

