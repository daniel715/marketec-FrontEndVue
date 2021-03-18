<template>
  <div>
    <InicioSesion/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InicioSesion from "../components/Login/InicioSesion.vue";

@Options({
  components: {
    InicioSesion,
  },
})
export default class Login extends Vue {
    
}
</script>
