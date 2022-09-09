<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  components: {},
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  mounted() {

  },
  methods: {
    show(message = "默认内容", duration = 2500) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  background-color: rgba(0, 0, 0.75);
  z-index: 999;
}
</style>
