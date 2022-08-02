<template>
  <div id="app">
    <tab-bar class="app-tab-bar"></tab-bar>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "@/components/content/Tabbar.vue";

export default {
  components: {
    TabBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "assets/css/base.css";

.app-tab-bar {
  z-index: 10;
}
</style>
