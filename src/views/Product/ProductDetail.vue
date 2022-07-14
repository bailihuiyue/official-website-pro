<template>
  <div class="ProductDetail">
    <!-- pc模式 -->
    <div class="isPC" v-if="!isMobile">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="detail.title" name="title" disabled class="title" />
        <el-tab-pane :label="words['technicalSupport'][$lang]" name="technicalSupport">
          <div class="technicalSupport" v-html="detail.technicalSupport"></div>
        </el-tab-pane>
        <el-tab-pane :label="words['productParameter'][$lang]" name="productParameter">
          <div class="productParameter" v-html="detail.productParameter"></div>
        </el-tab-pane>
        <el-tab-pane :label="words['productDetail'][$lang]" name="productDetail">
          <div class="productPage" v-html="detail.productDetail"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 手机模式 -->
    <el-tabs v-model="activeName" v-else :class="$lang==='en'?'productDetailEn':''">
      <el-tab-pane :label="words['productDetail'][$lang]" name="productDetail">
        <div class="productPage" v-html="detail.productDetail"></div>
      </el-tab-pane>
      <el-tab-pane :label="words['productParameter'][$lang]" name="productParameter">
        <div class="productParameter" v-html="detail.productParameter"></div>
      </el-tab-pane>
      <el-tab-pane :label="words['technicalSupport'][$lang]" name="technicalSupport">
        <div class="technicalSupport" v-html="detail.technicalSupport"></div>
      </el-tab-pane>
    </el-tabs>
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
  watch: {
    '$route.query.id': {
      handler: function (val) {
        if (val) {
          getProductDetail(this.$lang, val).then((res) => {
            if (res) {
              this.detail = res
            } else {
              this.detail = {
                productDetail:
                  '<img style="width:50%;margin:30px auto" src="/imgs/404.jpg"/>'
              }
            }
            this.activeName = 'productDetail'
          })
        }
      },
      deep: true,
      immediate: true
    }
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
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
        height: 63px;
        margin-bottom: 0;
      }
      .el-tabs__nav-wrap::after {
        background-color: transparent;
      }
      .el-tabs__nav-scroll {
        width: $contentWidth !important;
        margin-left: 5% !important;
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
    // .productPage {
    //   width: $contentWidth;
    //   margin: 0px auto;
    //   img {
    //     display: block;
    //     width: 100%;
    //   }
    // }
    .productPage,
    .productParameter,
    .technicalSupport {
      img {
        display: block;
        width: 100%;
      }
      width: $contentWidth;
      margin: 5px auto;
      margin-top: 70px;
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
      &:hover {
        color: #616161;
      }
    }
    #tab-productDetail {
      padding-right: 20px;
    }
    #tab-productDetail,
    #tab-productParameter {
      border-right: 1px solid #e0e0e0;
    }
  }
}
.mobile {
  .ProductDetail {
    .productPage,
    .productParameter,
    .technicalSupport {
      video {
        width: 100%;
        max-height: 300px;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    .productDetailEn {
      #tab-productDetail {
        padding-right: 15px;
      }
      #tab-productParameter {
        padding: 0;
      }
      #tab-technicalSupport {
        padding-left: 15px;
      }
    }
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