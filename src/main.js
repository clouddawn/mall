import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "@/components/common/toast";
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();

Vue.use(toast);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 3
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

