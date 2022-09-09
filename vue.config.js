const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/inline-mall/'
    : '/',
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
      }
    }
  },
});
