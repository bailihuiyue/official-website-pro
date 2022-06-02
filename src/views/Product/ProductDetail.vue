<template>
  <div class="ProductDetail">
    <el-tabs v-model="activeName">
      <el-tab-pane :label="detail.title" name="title" disabled class="title" />
      <el-tab-pane :label="words['technicalSupport'][$lang]" name="technicalSupport">
        <div class="detailPage" v-html="detail.technicalSupport"></div>
      </el-tab-pane>
      <el-tab-pane :label="words['productParameter'][$lang]" name="productParameter">
        <div class="detailPage" v-html="detail.productParameter"></div>
      </el-tab-pane>
      <el-tab-pane :label="words['productDetail'][$lang]" name="productDetail">
        <div class="detailPage" v-html="detail.productDetail"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getProductDetail } from './service'

export default {
  data() {
    return {
      activeName: 'productDetail',
      detail: {},
      words: {
        productDetail: {
          cn: '产品详情',
          en: 'Product Detail'
        },
        productParameter: {
          cn: '产品参数',
          en: 'Product Parameter'
        },
        technicalSupport: {
          cn: '技术支持',
          en: 'Technical Support'
        }
      }
    }
  },
  created() {
    const id = this.$route.query.id
    getProductDetail(this.$lang, id).then((res) => (this.detail = res))
  }
}
// TODO:1.按钮颜色及样式完全仿照miui;2.兼容手机模式
</script>
<style lang="scss">
.ProductDetail {
  .el-tabs.el-tabs--top {
    .el-tabs__active-bar.is-top {
      opacity: 0;
    }
    .el-tabs__nav-scroll {
      width: 80% !important;
      margin-left: 10% !important;
      .el-tabs__nav.is-top {
        // float: right;
        width: 100%;
      }
    }
  }
  .detailPage {
    width: 80%;
    margin: 10px auto;
  }
  #tab-technicalSupport,
  #tab-productParameter,
  #tab-productDetail {
    float: right;
  }
  #tab-title,
  #tab-technicalSupport,
  #tab-productParameter,
  #tab-productDetail {
    height: 20px;
    line-height: 20px;
    margin-bottom: 15px;
  }
  #tab-title{
    font-size:18px;
  }
  #tab-productDetail {
    padding-right: 20px;
  }
  #tab-productDetail,
  #tab-productParameter {
    border-right: 2px solid rgb(212, 209, 203);
  }
}
</style>