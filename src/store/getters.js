export default {
  cartLength(state) {
    return state.cartList.length;
  },
  cartChekedList(state){
    return state.cartList.filter(item => item.checked);
  }
}
