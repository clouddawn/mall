<template>
  <div class="home">
    <nav-bar class="home-nav-bar">
      <template #left></template>
      <template #center>
        <div class="center-text">购物街</div>
      </template>
      <template #right></template>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="tabSticky"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scrollPosition="getScrollPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <template>
        <home-swiper :banners="banners" @homeSwiperImgLoaded="getOffsetTop"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <home-feature></home-feature>
        <tab-control
          :titles="['流行','新款','精选']"
          @tabClick="tabClick"
          ref="tabControl2"
        ></tab-control>
        <goods-list ref="goodsList" :goods="currentGoods"></goods-list>
      </template>
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/goodsList";
import Scroll from "components/common/scroll/Scroll.vue";

import HomeSwiper from "@/views/home/homeComps/HomeSwiper";
import HomeRecommend from "@/views/home/homeComps/HomeRecommend";
import HomeFeature from "@/views/home/homeComps/HomeFeature";

import {getHomeMultidata, getHomeGoods} from "@/network/home";

import {itemListenerMixIn, backTopMixIn} from "@/common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        "pop": {title: "流行", page: 0, list: []},
        "new": {title: "新款", page: 0, list: []},
        "sell": {title: "精选", page: 0, list: []},
      },
      currentGoods: [],
      currentType: "pop",
      tabControlOffsetTop: 0,
      // tabControl 是否吸顶
      tabSticky: false,
      saveY: 0,
    };
  },
  mixins: [itemListenerMixIn, backTopMixIn],
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    this.currentGoods = this.goods.pop.list;
  },
  mounted() {
  },
  activated() {
    setTimeout(() => {
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    }, 100);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off("imgLoaded", this.itemImgListener);
  },
  methods: {
    getOffsetTop() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    getScrollPosition(position) {
      this.showBackTopListener(position);
      // 判断是否吸顶
      if (-this.tabControlOffsetTop !== 0) {
        this.tabSticky = position.y < -this.tabControlOffsetTop;
      }
    },
    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.currentGoods = this.goods[this.currentType].list;
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      let that = this;
      getHomeGoods(type, page)
        .then((res) => {
          const list = that.goods[type].list;
          // that.goods[type].list = list.concat(res.data.list);
          // that.goods[type].list.push(...res.data.list);
          for (let item of res.data.list) {
            this.goods[type].list.push(item);
          }
          that.goods[type].page = page;
          that.$refs.scroll.finishPullUp();
        });
    },
  }
};
</script>

<style lang="scss" scoped>
.home {
  .tab-control {
    position: relative;
    z-index: 10;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    background: white;
    overflow: hidden;
    //height: 400px;
  }

  .home-nav-bar {
    background: #ff8e96;
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //z-index: 20;

    .center-text {
      color: white;
      font-size: 16px;
    }
  }
}
</style>
