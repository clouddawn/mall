<template>
  <div class="tab-control" ref="tabControl">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index" @click="changeIndex(index)"
         :class="{active:index === currentIndex}">
      <span>
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    },
    tabSticky: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      // console.log(this.$refs.tabControl.offsetTop);
      // console.log(this.tabSticky)
    }, 1000);
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  background: white;
  z-index: 10;

  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;

    span {
      padding: 3px;
    }
  }

  .active {
    color: var(--color-high-text);

    span {
      border-bottom: 2px solid var(--color-tint);
    }
  }
}
</style>
