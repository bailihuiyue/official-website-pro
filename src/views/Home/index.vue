<template>
  <div class="home" v-loading="loading">
    <Carousel :carouselList="carouselList"/>
  </div>
</template>
 
<script>
import { getCarousel } from './service'
import Carousel from '@/components/Carousel'

export default {
  name: 'HelloWorld',
  components: {
    Carousel
  },
  data() {
    return {
      loading: false,
      carouselList: []
    }
  },
  created() {
    getCarousel(this.$lang).then((res) => (this.carouselList = res))
  }
}
</script>
 
<style lang="scss" scoped>

</style>