<template>
  <div>
    <button @click="goHome">首页</button>
    购物车
  </div>
</template>

<script>

export default {
  // name: "Cart",
  components: {},
  data() {
    return {};
  },
  methods: {
    goHome() {
      // this.$router.push({
      //   name:'Home'
      // })
      this.$store.commit("add");
    }
  }
};
</script>
