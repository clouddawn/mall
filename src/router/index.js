import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("views/home/Home.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("views/cart/Cart.vue")
  },
  {
    path: "/category",
    name: "Category",
    component: () => import("views/category/Category.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("views/profile/Profile.vue")
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("views/detail/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
