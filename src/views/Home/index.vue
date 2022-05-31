<template>
  <div class="home" v-loading="loading">
    <Carousel :carouselList="carouselList" />
    <ProductImgs :productImgs="productImgs"/>
  </div>
</template>
 
<script>
import { getCarousel, getProductImgs } from './service'
import Carousel from '@/components/Carousel'
import ProductImgs from '@/components/ProductImgs'

export default {
  name: 'HelloWorld',
  components: {
    Carousel,
    ProductImgs
  },
  data() {
    return {
      loading: false,
      carouselList: [],
      productImgs:[]
    }
  },
  created() {
    getCarousel(this.$lang).then((res) => (this.carouselList = res))
    getProductImgs(this.$lang).then((res) => (this.productImgs = res))
  }
}
</script>
 
<style lang="scss" scoped>
</style>