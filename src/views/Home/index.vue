<template>
  <div class="home" v-loading="loading">
    <Carousel :carouselList="carouselList" useDocumentWidth v-if="carouselList.length"/>
    <ProductImgs :productImgs="productImgs" />
    <BottomSection :bottomImgs="bottomImgs" v-if="bottomImgs.length"/>
  </div>
</template>
 
<script>
import { getCarousel, getProductImgs, getBottomImgs } from './service'
import Carousel from '@/components/Carousel'
import ProductImgs from '@/components/ProductImgs'
import BottomSection from '@/components/BottomSection'

export default {
  name: 'HelloWorld',
  components: {
    Carousel,
    ProductImgs,
    BottomSection
  },
  data() {
    return {
      loading: false,
      carouselList: [],
      productImgs: [],
      bottomImgs: []
    }
  },
  created() {
    getCarousel(this.$lang).then((res) => (this.carouselList = res))
    getProductImgs(this.$lang).then((res) => (this.productImgs = res))
    getBottomImgs(this.$lang).then((res) => (this.bottomImgs = res))
  }
}
</script>
 
<style lang="scss" scoped>
</style>