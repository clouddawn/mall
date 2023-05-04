<template>
  <div class="detailNavBar">
    <nav-bar>
      <template #left>
        <div class="backImg" @click="goBack">
          <img src="~@/assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template #center>
        <div class="title">
          <div
            v-for="(item,index) in titles"
            :key="index"
            @click="titleClick(index)"
            class="titleItem"
            :class="{active:currentIndex === index}">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {NavBar},
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  mounted() {

  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.detailNavBar {
  .backImg {
    img {
      vertical-align: middle;
    }
  }

  .title {
    display: flex;

    .titleItem {
      flex: 1;
      font-size: 15px;
    }

    .active {
      color: var(--color-high-text);
    }
  }
}
</style>
