<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <template #center>
        <div>购物车({{length}})</div>
      </template>
    </nav-bar>
    <cart-list></cart-list>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";

import {mapGetters} from 'vuex';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList
  },
  data() {
    return {};
  },
  computed:{
    ...mapGetters({
      length:'cartLength'
    })
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.cart {
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
}
</style>
