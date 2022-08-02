<template>
  <div class="goods-list">
    <good-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "@/components/content/goods/goodListItem";

export default {
  name: "goodsList",
  components: {
    GoodListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
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
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>













