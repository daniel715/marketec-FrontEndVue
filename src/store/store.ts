import { createStore } from 'vuex'

export default createStore({
  state: {
    carritoCompra : Array(),
    listaTiendas :Array(),
    objetoVenta: {
      carrito : [],
      idTienda: "",
      metodoPago: "",
    }
  },
  mutations: {
    agregarProducto(state,payload){
      state.carritoCompra.push(payload)
    },
    eliminarProducto(state,nombre){
      const index = state.carritoCompra.indexOf(nombre)
      if(index > -1){
        state.carritoCompra.splice(index,1)
      }
    },
    obtenerTiendas(state,payload){
      state.listaTiendas=payload
    }
  },
  actions: {

  },
  modules: {
  }
})
