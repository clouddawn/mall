import {ADD_COUNTER, ADD_TO_CART} from "./mutations_types";

export default {
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.id === payload.id);
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct);
        resolve("商品数量加1");
      } else {
        commit(ADD_TO_CART, payload);
        resolve("商品已加入到购物车");
      }
    });
  }
};
