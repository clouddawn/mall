<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  components: {},
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #ddd;
  background-color: white;
}
.check {
  background-color: var(--color-tint);
  border: 2px solid var(--color-tint);
}
</style>
