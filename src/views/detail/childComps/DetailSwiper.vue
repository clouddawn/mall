<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <template>
        <img :src="item" alt="">
      </template>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper, SwiperItem
  },
  props: {
    topImages: {
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
.detail-swiper {
  height: 300px;
}
</style>
