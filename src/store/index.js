import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [],
  },
  getters: {},
  mutations: {
    addCart(state, payload) {
      let oldProduct = state.cartList.find(item => item.id === payload.id);
      if (oldProduct) {
        oldProduct.count++;
      } else {
        this.state.cartList.push(payload);
      }
    }
  },
  actions: {},
  modules: {}
});
