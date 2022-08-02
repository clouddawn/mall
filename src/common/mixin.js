import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

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
