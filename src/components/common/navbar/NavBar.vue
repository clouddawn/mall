<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
  .nav-bar {
    height: 44px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    display: flex;
    line-height: 44px;
    text-align: center;
  }
  .left,.right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>
