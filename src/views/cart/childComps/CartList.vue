<template>
  <div class="cart-list">
    <scroll class="cart-list-scroll" ref="cart-list-scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import {mapState} from "vuex";

import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
    CartBottomBar
  },
  data() {
    return {};
  },
  mounted() {

  },
  activated() {
    this.$refs['cart-list-scroll'].refresh();
  },
  computed: {
    ...mapState({
      cartList: "cartList"
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.cart-list {
  .cart-list-scroll {
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
    background-color: white;
  }
}
</style>
