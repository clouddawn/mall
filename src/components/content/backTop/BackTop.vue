<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  components: {},
  data() {
    return {};
  },
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: 5px;
  bottom: 50px;

  img {
    width: 60px;
  }
}
</style>
