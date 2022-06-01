import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
  },
  mutations: {
    setProducs(state, data) {
      state.products = data
    },
    addCartItem(state, data) {
      state.cart.push(data)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['cart']
  })],
})
