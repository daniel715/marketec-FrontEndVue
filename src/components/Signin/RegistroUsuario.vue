<template>
  <div id="contenedor">
    <div id="padre">
      <h1>Registro de Usuarios</h1>
      <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01">Primer Nombre</label>
            <input
              v-model="primerNombre"
              type="text"
              class="form-control"
              placeholder="Primer Nombre"
              id="validationCustom01"
              required
            />
            <div class="valid-feedback">OK!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02">Apellido Paterno</label>
            <input
              v-model="apellidoMaterno"
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Apellido Paterno"
              required
            />
            <div class="valid-feedback">OK!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom03">Apellido Materno</label>
            <input
              v-model="apellidoPaterno"
              type="text"
              class="form-control"
              id="validationCustom03"
              placeholder="Apellido Materno"
              required
            />
            <div class="valid-feedback">OK!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom04">DNI</label>
            <input
              v-model="dni"
              type="text"
              class="form-control"
              id="validationCustom04"
              placeholder="DNI"
              required
            />
            <div class="valid-feedback">OK!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom05">Telefono</label>
            <input
              v-model="telefono"
              type="text"
              class="form-control"
              id="validationCustom05"
              placeholder="Telefono"
              required
            />
            <div class="valid-feedback">OK!</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom06">Correo Electronico</label>
            <div class="input-group">
              <input
                v-model="correoElectronico"
                type="text"
                class="form-control"
                id="validationCustom06"
                placeholder="Usuario"
                required
              />
              <div class="invalid-feedback">
                Por favor escriba un correo valido
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom07">Contraseña</label>
            <div class="input-group">
              <input
                v-model="contrasena"
                type="password"
                class="form-control"
                id="validationCustom07"
                placeholder="Contraseña"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-3 mb-3">
            <label for="validationCustom08">Departamentos</label>
            <select v-model="departamento" class="form-control" >
              <option value="" disabled>Seleccione Departamento</option>
              <option v-for="depar in departamentos" :key="depar.id"> {{depar.nombre}} </option>
            </select>
            <div class="invalid-feedback">Ingrese una direccion valida</div>
          </div>

          <div class="col-md-3 mb-3">
            <label for="validationCustom09">Provincia</label>
            <input
              v-model="provincia"
              type="text"
              class="form-control"
              id="validationCustom09"
              placeholder="Provincia"
              required
            />
            <div class="invalid-feedback">Ingrese un Departamento valido</div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationCustom10">Distrito</label>
            <input
              v-model="distrito"
              type="text"
              class="form-control"
              id="validationCustom10"
              placeholder="Distrito"
              required
            />
            <div class="invalid-feedback">Ingrese una Provincia valida</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom11">Direccion</label>
            <div class="input-group">
              <input
                v-model="direccion"
                type="text"
                class="form-control"
                id="validationCustom0511"
                placeholder="Direccion"
                required
              />
            </div>
          </div>
        </div>
        <button class="btn btn-dark" @click="enviar()">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "RegistroUsuario",
  data: function(){
    return{
      departamentos:[
      ],
      provincias:[
      ],
      distritos:[

      ],
      primerNombre:"",
      apellidoMaterno:"",
      apellidoPaterno:"",
      dni:"",
      telefono:"",
      correoElectronico:"",
      contrasena:"",
      departamento:"",
      provincia:"",
      distrito:"",
      direccion:""
    }
  },
  methods:{
    enviar(){
      const payLoad = {
        primerNombre:this.primerNombre,
        apellidoMaterno:this.apellidoMaterno,
        apellidoPaterno:this.apellidoPaterno,
        dni:this.dni,
        telefono:this.telefono,
        correoElectronico:this.correoElectronico,
        contrasena:this.contrasena,
        departamento:this.departamento,
        provincia:this.provincia,
        distrito:this.distrito,
        direccion:this.direccion
      }
      console.log(payLoad)
    },

    traerDepartamentos(){
      axios.get("https://marketec-boot.herokuapp.com/departamentos")
      .then( res=> { this.departamentos=res.data; console.log(this.departamentos)})
      .catch( err => {console.log(error,err)})
    }
  },
   mounted(){
     this.traerDepartamentos();
    }

};
</script>

<style lang="sass" scoped>
#contenedor
  display: flex
  justify-content: center
  #padre
    width: 80%
    margin-top: 20px
</style>