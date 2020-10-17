<template>

  <div id="contenedor">
    <div id="padre">
      <div id="barra">
        <button
          v-on:click="mostrar('bebidas')"
          class="btn btn-secondary"
          type="button"
        >
          Bebidas asdfasdfasdflj;lk;
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
        <div v-if="producto === 'bebidas'" class="tabcontent">
        <div>
          <button>
            
            <img src="../../assets/incakolaPersonal.jpg" />
            <div class="descripcion" >
              <span>Inca Kola<br> 450 ml </span>
            </div>
          </button>
         
        </div>
        <div>
          <button>
          
            <img src="../../assets/cocaKolaPersona.png" />
            <div class="descripcion" >
              <span>Cola Kola<br> 450 ml </span>
            </div>
          </button>
        </div>
        <div>
          <button>
           
            <img src="../../assets/sprite.webp" />
            <div class="descripcion" >
              <span>Sprite<br> 450 ml </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/cieloPersonal.webp" />
            <div class="descripcion" >
              <span>Cielo<br> 450 ml </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            
            <img src="../../assets/sanmateoPersonal.webp" />
            <div class="descripcion" >
              <span>San Mateo<br> 450 ml </span>
            </div>
          </button>
        </div>
         <div>
          <button>
            
            <img src="../../assets/inca3litros.png" />
            <div class="descripcion" >
              <span>Inca Kola <br> 3L </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            
            <img src="../../assets/cola3litros.png" />
            <div class="descripcion" >
              <span>Cola Kola<br> 3 L</span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/ruskalla.webp" />
            <div class="descripcion" >
              <span>Ruskalla <br> 800 ml </span>
            </div>
          </button>
        </div>
        <div>
          <button>
           
            <img src="../../assets/ron.webp" />
            <div class="descripcion" >
              <span>Botella Ron<br> 800 ml </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            
            <img src="../../assets/cristal.jpg" />
            <div class="descripcion" >
              <span>Cristal <br> 450 ml </span>
            </div>
          </button>
        </div>
      </div>
      <div v-if="producto === 'carnes'" class="tabcontent">
        <div>
          <button>
            <img src="../../assets/pollo.jpg" />
             <div class="descripcion" >
              <span>Pollo <br> 1KG </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/carne.jpg" />
             <div class="descripcion" >
              <span>Carne <br> 1KG </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/cerdo.jpg" />
             <div class="descripcion" >
              <span>Cerdo <br> 1KG </span>
            </div>
          </button>
        </div>
      </div>
      <div v-if="producto === 'tuberculos'" class="tabcontent">
        <div>
          <button>
            <img src="../../assets/papa.jpg" />
             <div class="descripcion" >
              <span>Papa <br> 1KG </span>
            </div>
          </button>
        </div>
        <div>
          <button>      
            <img src="../../assets/yuca.jpg" />
             <div class="descripcion" >
              <span>Yuca <br> 1KG </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/olluco.webp" />
             <div class="descripcion" >
              <span>Olluco <br> 1KG </span>
            </div>
          </button>
        </div>
        <div>
          <button>
            <img src="../../assets/jengibre.jpg" />
             <div class="descripcion" >
              <span>Jengibre <br> 1KG </span>
            </div>
          </button>
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>

export default {  
  name: "Barra",
  data: function () {
    return {
      producto: "bebidas",
      modalEstado : false,
      listaProductos : 
      [
        {incakola1450ml : "incakola-450ml"},
        {cocacola450ml : "cocacola-450ml"},
        {sprite450ml : "sprite-450ml"},
        {cielo : "incakola-1l"},
        {sanmateo450ml : "sanmateo-450ml"},
        {incakola3000ml : "incakola-3000ml"},
        {cocacola3000ml: "cocacola-3000ml"},
        {ruskalla800ml : "ruskalla800ml"},
        {ron800ml : "ron800ml"},
        {cristal750ml : "cristal750ml"},

      ]
    };
  },

  components : {},

  methods: {
    mostrar: function (a) {
      this.producto = a;
        },
  },
};
</script>

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
      button
        border-radius: 0px 
    .tabcontent
      overflow-y: scroll
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
        padding: 20px
        border: 0px
      img
        width: 100px
        height: 120px

</style>
