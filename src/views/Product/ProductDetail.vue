<template>
  <div class="ProductDetail">
    <div :class="isMobile?'':'isPC'">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="detail.title" name="title" disabled class="title" v-if="!isMobile" />
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
  </div>
</template>
<script>
import { getProductDetail } from './service'
import device from 'current-device'

export default {
  data() {
    return {
      isMobile: device.mobile(),
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
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.ProductDetail {
  .isPC {
    .el-tabs.el-tabs--top {
      .el-tabs__active-bar.is-top {
        opacity: 0;
      }
      .el-tabs__header.is-top {
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 0 5px 5px rgba(0,0,0,0.05);
        height: 63px;
      }
      .el-tabs__nav-wrap::after {
        background-color: transparent;
      }
      .el-tabs__nav-scroll {
        width: 80% !important;
        margin-left: 10% !important;
        .el-tabs__nav.is-top {
          // float: right;
          width: 100%;
          margin-top: 24px;
        }
        .is-active {
          color: $themeColor;
        }
        .el-tabs__item {
          color: #616161;
        }
        .el-tabs__item.is-active {
          color: $themeColor;
        }
        .el-tabs__item:hover {
          color: $themeColor;
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
    #tab-technicalSupport {
      padding-right: 0;
    }
    #tab-title {
      font-size: 18px;
      // color: #fff;
      &:hover{
        color: #616161;
      }
    }
    #tab-productDetail {
      padding-right: 20px;
    }
    #tab-productDetail,
    #tab-productParameter {
      border-right: 1px solid #e0e0e0;;
    }
  }
}
.mobile {
  .ProductDetail {
    .el-tabs__active-bar.is-top {
      opacity: 0;
    }
    .is-active {
      color: $themeColor;
    }
    .el-tabs__item:hover {
      color: $themeColor;
    }
    .el-tabs__nav.is-top {
      float: none;
      width: 100%;
      // margin-top: 20px;
      text-align: center;
    }
  }
}
</style>