<template>
  <div id="contenedor">
    <div id="padre">
      <div class="card col-5 mt-5">
        <div>
           <h1>Inicio Sesion</h1> 
        </div>
        <div class="card-body">
            <div class="form-group">
            <label for="">Ingrese su Usuario o Correo Electronico</label>
            <input type="text" class="form-control" />
          </div>
           <div class="form-group">
            <label for="">Ingrese su contraseña</label>
            <input type="password" class="form-control" />
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary" >Iniciar Sesion</button>
          <button class="btn btn-dark" >Crear cuenta nueva</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "InicioSesion",
    
};

</script>

<style lang="sass" scoped>
#contenedor
    display: flex
    justify-content: center
    #padre
        width: 80%
        display: flex
        justify-content: center
        .card-footer
            display: flex
            flex-direction: column
            div
                padding: 10px
            button
                margin: 5px
</style>