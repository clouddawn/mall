<template>
  <div class="recommend">
    <a class="recommendItem" v-for="(item,index) in recommends" :key="index" :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
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
.recommend {
  display: flex;
  align-items: center;
  padding: 10px 0 25px;
  border-bottom: 10px solid #eee;
  .recommendItem {
    text-align: center;
    flex: 1;
    font-size: 14px;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 5px;
    }
  }
}
</style>
