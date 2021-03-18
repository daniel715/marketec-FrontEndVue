<template>
  <div>
    <Home/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "../components/PaginaPrincipal/PaginaPrincipal.vue";

@Options({
  components: {
    Home,
  },
})
export default class PaginaPrincipal extends Vue {
    
}
</script>
