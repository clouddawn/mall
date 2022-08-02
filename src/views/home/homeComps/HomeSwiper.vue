<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <template>
          <a :href="item.link">
            <img @load="swiperImgLoad" :src="item.image" alt="">
          </a>
        </template>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper, SwiperItem
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {

  },
  methods: {
    swiperImgLoad() {
      if (!this.loaded) {
        this.$emit('homeSwiperImgLoaded');
        this.loaded = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
