<template>
  <div class="param-info">
    <table v-for="(sizes,index) in itemParams.sizes" :key="index">
      <tr v-for="(lines,indey) in sizes" :key="indey">
        <td v-for="(item,indez) in lines" :key="indez">{{ item }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in itemParams.infos" :key="index">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="itemParams.image">
      <img :src="itemParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  components: {},
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      height: 42px;

      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
    }

    .info-param-key {
      width: 95px;
    }
  }

  .info-param {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .param-value {
    color: #eb4868;
  }

  .info-img img {
    width: 100%;
  }
}
</style>
