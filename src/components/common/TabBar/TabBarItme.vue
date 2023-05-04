<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="tabbar-item-icon"></slot>
    <slot v-else name="tabbar-item-active-icon"></slot>
    <div class="tabbar-text" :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItme",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red",
    }
  },
  methods: {
    select(currentIndex) {
      this.currentIndex = currentIndex;
    },
    itemClick() {
      this.$router.push(this.link);
    }
  },
  computed: {
    isActive() {
      // console.log(this.$route.path.indexOf(this.link));
      // console.log(this.link);
      // console.log(this.$route.path.indexOf(this.path));
      return this.$route.path.indexOf(this.link) > -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}

.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  vertical-align: middle;

  .tabbar-text > div {
    font-size: 12px;
    color: inherit;
  }

  img {
    width: 24px;
    height: 24px;
    margin-top: 4px;
  }
}
</style>
