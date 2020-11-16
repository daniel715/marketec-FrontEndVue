<template>
  <Header />
  <div id="contenedor">
    <div id="padre">
      <h1>Registro de Productos</h1>
      <form action="">
        <div class="form-group">
          <label> ID </label>
          <input v-model="id" class="form-control" min="1" type="number" />
        </div>
        <div class="form-group">
          <label> Nombre </label>
          <input v-model="nombre" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label> Marca </label>
          <input v-model="marca" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label> Categoria </label>
          <input v-model="categoria" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label> Unidad Medida </label>
          <input v-model="unidadMedida" class="form-control" type="text" />
        </div>
        <div class="form-group">
          <label> Valor Medida </label>
          <input
            v-model="valorMedida"
            class="form-control"
            min="1"
            type="number"
          />
        </div>
        <button v-on:click="enviar()" class="btn btn-dark">Guardar</button>
        <button class="btn btn-dark ml-5">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../PaginaPrincipal/Header.vue";
const axios = require("axios");

export default {
  name: "Formulario",
  components: {
    Header,
  },
  data: function () {
    return {
      id: "",
      nombre: "",
      marca: "",
      categoria: "",
      unidadMedida: "",
      valorMedida: "",
    };
  },
  methods: {
    enviar() {
      const cuerpo = {
        id: this.id,
        nombre: this.nombre,
        marca: this.marca,
        categoria: this.categoria,
        unidadMedida: this.unidadMedida,
        valorMedida: this.val,
      };

      axios
        .post("https://marketec-boot.herokuapp.com/productos",cuerpo)
        .then( (response) => {
          console.log("Enviado con exito",response);
        })
        .catch( (error) =>  {
          console.log("Error al enviar",error);
        });
    },
  },
};
</script>

<style lang='sass' scoped>
#contenedor
  display: flex
  justify-content: center
  #padre
    width: 80%
    div
      text-align: left
      width: 30%
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button
        -webkit-appearance: none
        margin: 0

</style>