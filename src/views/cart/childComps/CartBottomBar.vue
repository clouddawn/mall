<template>
  <div class="cart-bottom-bar">
    <div class="all-check" @click="checkAll">
      <check-button :is-checked="isSelectAll" class="all-check-button"></check-button>
      <div>全选</div>
    </div>
    <div class="price">
      总价：¥{{ totalPrice }}
    </div>
    <div class="calculate">
      去结算({{ shopCount }})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from "vuex";

export default {
  name: "CartBottomBar",
  components: {CheckButton},
  data() {
    return {};
  },
  mounted() {

  },
  computed: {
    ...mapGetters(["cartChekedList"]),
    totalPrice() {
      return this.cartChekedList.reduce((prev, curv) => {
        return prev + curv.price * curv.count;
      }, 0).toFixed(2);
    },
    shopCount() {
      return this.cartChekedList.length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.some(item => item.checked === false);
    }
  },
  methods: {
    checkAll() {
      const isSelectAll = this.isSelectAll;
      this.$store.state.cartList.forEach(item => {
        item.checked = !isSelectAll;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-bottom-bar {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eeeeee;
  padding: 0 10px;

  .all-check {
    display: flex;
    align-items: center;

    .all-check-button {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  .price {
    min-width: 160px;
  }

  .calculate {
    background-color: #ff4584;
    color: white;
    padding: 5px 8px;
    border-radius: 15px;
    font-size: 15px;
  }
}
</style>
