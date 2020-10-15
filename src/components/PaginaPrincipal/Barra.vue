<template>
  <div id="contenedor">
    <div id="padre">
      <div id="barra">
        <button
          v-on:click="mostrar('bebidas')"
          class="btn btn-secondary"
          type="button"
        >
          Bebidas
        </button>
        <button
          v-on:click="mostrar('carnes')"
          class="btn btn-secondary"
          type="button"
        >
          Carnes
        </button>
        <button
          v-on:click="mostrar('tuberculos')"
          class="btn btn-secondary"
          type="button"
        >
          Tuberculos
        </button>
      </div>
      <div v-if="producto === 'carnes'" class="tabcontent">
        <div>
          <button>
            <h6>Pollo</h6>
            <img src="../../assets/pollo.jpg" />
          </button>
        </div>
        <div>
          <button>
            <h6>Carne</h6>
            <img src="../../assets/carne.jpg" />
          </button>
        </div>
        <div>
          <button>
            <h6>Cerdo</h6>
            <img src="../../assets/cerdo.jpg" />
          </button>
        </div>
      </div>
      <div v-if="producto === 'tuberculos'" class="tabcontent">
        <div>
          <button>
            <h6>Papa</h6>
            <img src="../../assets/papa.jpg" />
          </button>
        </div>
        <div>
          <button>
            <h6>Yuca</h6>
            <img src="../../assets/yuca.jpg" />
          </button>
        </div>
        <div>
          <button>
            <h6>Olluco</h6>
            <img src="../../assets/olluco.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>Jengibre</h6>
            <img src="../../assets/jengibre.jpg" />
          </button>
        </div>
      </div>

      <div v-if="producto === 'bebidas'" class="tabcontent">
        <div>
          <button>
            <h6>Inka Kola</h6>
            <img src="../../assets/incakolaPersonal.jpg" />
          </button>
        </div>
        <div>
          <button>
            <h6>Coca Kola</h6>
            <img src="../../assets/cocaKolaPersona.png" />
          </button>
        </div>
        <div>
          <button>
            <h6>Sprite</h6>
            <img src="../../assets/sprite.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>Cielo</h6>
            <img src="../../assets/cieloPersonal.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>San Mateo</h6>
            <img src="../../assets/sanmateoPersonal.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>Ruskalla</h6>
            <img src="../../assets/ruskalla.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>Ron</h6>
            <img src="../../assets/ron.webp" />
          </button>
        </div>
        <div>
          <button>
            <h6>Cristal</h6>
            <img src="../../assets/cristal.jpg" />
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
  #padre
    width: 100%
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
      background-color: #999999 
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      width: 100%
      height: 100%
      div
        margin: 20px
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
  data: function () {
    return {
      producto: "bebidas",
    };
  },

  methods: {
    mostrar: function (a) {
      this.producto = a;
    },
  },
};
</script>
