<template>

  <div id="contenedor">
    <div id="padre">
        <div id="barra" >

          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bebidas
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button  v-on:click="mostrar('aguamineral')" class="dropdown-item">Agua Mineral</button>
              <button  v-on:click="mostrar('gaseosa')" class="dropdown-item">Gaseosa</button>
              <button  v-on:click="mostrar('bebidasalcoholicas')" class="dropdown-item">Bebidas Alcoholicas</button>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Carnes
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item">Pollo</button>
              <button class="dropdown-item">Res</button>
              <button class="dropdown-item">Cerdo</button>
            </div>
          </div>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Verduras
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item" >Vegetales</button>
              <button class="dropdown-item" >Tuberculos</button>
            </div>
          </div>

        </div>

          <div v-if="producto==='vegetales'" class="tabcontent">
            <div>
              <button>
                <h6> Apio </h6>
                <img src='../assets/incakolaPersonal.jpg'>
              </button>
            </div>
            <div>
              <button>
                <h6>  </h6>
                <img src='../assets/cocaKolaPersona.png'>
              </button>
            </div>
          </div>

      <div v-if="producto==='tuberculos'" class="tabcontent">
        <div>
          <button>
            <h6> Inka Kola </h6>
            <img src='../assets/incakolaPersonal.jpg'>
          </button>
        </div>
        <div>
          <button>
            <h6> Coca Kola </h6>
            <img src='../assets/cocaKolaPersona.png'>
          </button>
        </div>
      </div>

          <div v-if="producto==='gaseosa'" class="tabcontent">
            <div>
              <button>
                <h6> Inka Kola </h6>
                <img src='../assets/incakolaPersonal.jpg'>
              </button>
            </div>
            <div>
              <button>
                <h6> Coca Kola </h6>
                <img src='../assets/cocaKolaPersona.png'>
              </button>
            </div>
          </div>

          <div v-if="producto==='aguamineral'" class="tabcontent">
            <div>
              <button>
                <h6> Cielo </h6>
                <img src='../assets/cieloPersonal.webp'>
              </button>
            </div>
            <div>
              <button>
                <h6> San Mateo </h6>
                <img src='../assets/sanmateoPersonal.webp'>
              </button>
            </div>
          </div>

        <div v-if="producto==='bebidasalcoholicas'" class="tabcontent">
          <div>
            <button>
              <h6> Ruskalla </h6>
              <img src='../assets/ruskalla.webp'>
            </button>
          </div>
          <div>
            <button>
              <h6> Ron </h6>
              <img src='../assets/ron.webp'>
            </button>
          </div>
        </div>
    </div>

  </div>


</template>

<style lang="sass" scoped>
#contenedor
  display: flex
  justify-content: center
  flex-direction: row
  #padre
    width: 80%
    display: flex
    flex-direction: column
    justify-content: center
    #barra
      margin-top: 40px
      display: flex
      .dropdown
        button
          border-radius: 0px
    .tabcontent
      display: flex
      flex-wrap: wrap
      border: solid 1px black
      width: 80%
      div
        flex-grow: 1

      button
        border: 0px
      img
        width: 100px
        height: 120px


</style>



<script>
export default {
  name: "Barra",
  data: function() {
    return{
      producto:""
    }
  },

  methods:
      {
      mostrar: function (a) {this.producto=a}

      }

}
</script>
