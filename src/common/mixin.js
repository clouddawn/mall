import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";
import {POP, NEW, SELL} from "./const";

export const itemListenerMixIn = {
  data(){
    return {
      itemImgListener: null,
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      refresh();
    };
    this.$bus.$on("imgLoaded", this.itemImgListener);
  }
}

export const backTopMixIn = {
  data(){
    return {
      showBackTop: false,
    }
  },
  components:{
    BackTop,
  },
  methods:{
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    showBackTopListener(position){
      // 判断backtop是否显示
      this.showBackTop = position.y < -860;
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
