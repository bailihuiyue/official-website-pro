<template>
  <div class="home" v-loading="loading">
    <Carousel :carouselList="carouselList" :useDocumentWidth="true" v-if="carouselList.length" />
    <VideoBackground :videoData="videoData" v-if="videoData.id" />
    <ProductImgs :productImgs="productImgs" />
    <BottomSection :bottomImgs="bottomImgs" v-if="bottomImgs.length" />
    <SubmitQuestion v-if="!isMobile" :isFAQ="true" :hasQQ="true" />
    <!-- 返回顶部 -->
    <el-backtop :right="40" :bottom="160" :visibility-height="800" v-if="!isMobile">
      <img src="/imgs/up.png" style="width:40px;height:40px" />
      <div style="text-align: center;">{{$lang==='cn'?'回到顶部':'Back To Top'}}</div>
    </el-backtop>
  </div>
</template>
 
<script>
import {
  getCarousel,
  getProductImgs,
  getBottomImgs,
  getVideoBackground
} from './service'
import Carousel from '@/components/Carousel'
import ProductImgs from '@/components/ProductImgs'
import BottomSection from '@/components/BottomSection'
import SubmitQuestion from '@/components/SubmitQuestion'
import VideoBackground from '@/components/VideoBackground'
import device from 'current-device'

export default {
  name: 'HelloWorld',
  components: {
    Carousel,
    ProductImgs,
    BottomSection,
    SubmitQuestion,
    VideoBackground
  },
  data() {
    return {
      loading: false,
      carouselList: [],
      productImgs: [],
      bottomImgs: [],
      videoData: {},
      isMobile: device.mobile()
    }
  },
  created() {
    getCarousel(this.$lang).then((res) => (this.carouselList = res))
    getProductImgs(this.$lang).then((res) => (this.productImgs = res))
    getBottomImgs(this.$lang).then((res) => (this.bottomImgs = res))
    getVideoBackground(this.$lang).then((res) => (this.videoData = res))
  }
}
</script>
 
<style lang="scss">
@import '~@/styles/color.scss';

.home {
  .SubmitQuestion {
    .isPC {
      z-index: 9999;
      right: 40px !important;
      color: #e8e8e8;
    }
  }
  .el-backtop {
    flex-direction: column;
    width: 60px;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    &:hover {
      color: $themeColor;
    }
    div {
      font-size: 12px;
      margin-top: 10px;
    }
  }
}
</style>