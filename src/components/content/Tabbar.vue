<template>
  <div class="tabbar">
    <tab-bar-itme link="/home" activeColor="red">
      <template #tabbar-item-icon>
        <img src="~@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template #tabbar-item-active-icon>
        <img src="~@/assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #tabbar-item-text>
        <div>首页</div>
      </template>
    </tab-bar-itme>
    <tab-bar-itme link="/category">
      <template #tabbar-item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="">
      </template>
      <template #tabbar-item-active-icon>
        <img src="@/assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #tabbar-item-text>
        <div>分类</div>
      </template>
    </tab-bar-itme>
    <tab-bar-itme link="/cart">
      <template #tabbar-item-icon>
        <img src="@/assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template #tabbar-item-active-icon>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #tabbar-item-text>
        <div>购物车</div>
      </template>
    </tab-bar-itme>
    <tab-bar-itme link="/profile">
      <template #tabbar-item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="">
      </template>
      <template #tabbar-item-active-icon>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #tabbar-item-text>
        <div>我的</div>
      </template>
    </tab-bar-itme>
  </div>
</template>

<script>
import TabBarItme from "components/common/TabBar/TabBarItme.vue";

export default {
  components: {TabBarItme},
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    select(currentIndex) {
      this.currentIndex = currentIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
.tabbar {
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  height: 49px;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(145, 145, 145, 0.15);
}
</style>
