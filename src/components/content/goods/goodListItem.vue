<template>
  <div class="goods-item" @click="goodsItemClick">
    <img v-lazy="showImg" alt="" @load="imgLoaded">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodListItem",
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show && this.goodsItem.show.img || this.goodsItem.img;
    }
  },
  methods: {
    imgLoaded() {
      this.$bus.$emit("imgLoaded");
    },
    goodsItemClick() {
      // this.$router.push({
      //   path: "/detail",
      //   query: {
      //     id: this.goodsItem.iid
      //   }
      // });
      this.$router.push("/detail/" + this.goodsItem.iid);
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 46%;

  img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }

    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }

    .collect {
      position: relative;
    }

    .collect::before {
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
