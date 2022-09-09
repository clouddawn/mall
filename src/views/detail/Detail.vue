<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" class="detail-nav" ref="navBar"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scrollPosition="getPosition" :probe-type="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :item-params="itemParams"></detail-param-info>
      <detail-comment-info ref="comments" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommends" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/goodsList";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";

import {itemListenerMixIn, backTopMixIn} from "@/common/mixin";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll
  },
  data() {
    return {
      id: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
    };
  },
  mixins: [itemListenerMixIn, backTopMixIn],
  mounted() {
    this.id = this.$route.params.id;
    getDetail(this.id).then((res) => {
      const result = res.result;
      this.topImages = result.itemInfo.topImages;
      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
      this.shop = new Shop(result.shopInfo);
      this.detailInfo = result.detailInfo;
      this.itemParams = new GoodsParam(result.itemParams.info, result.itemParams.rule);
      if (result.rate.cRate !== 0) {
        this.commentInfo = result.rate.list[0];
      }
    });
    // 获取推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getOffsetTop();
    },
    getOffsetTop() {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44);
    },
    getPosition(position) {
      const positionY = -position.y;
      for (let i in this.themeTopYs) {
        const index = +i;
        if (this.$refs.navBar.currentIndex !== i) {
          if (positionY >= this.themeTopYs[index] && positionY < this.themeTopYs[index + 1]) {
            this.$refs.navBar.currentIndex = index;
          }
        }
      }
      this.showBackTopListener(position);
    },
    addToCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      product.count = 1;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res);
      });
    }
  },
  destroyed() {
    this.$bus.$off("imgLoaded", this.itemImgListener);
  }
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #ffffff;

  .detail-nav {
    position: relative;
    z-index: 10;
    background-color: white;
  }

  .content {
    height: calc(100vh - 44px - 58px);
  }
}
</style>
