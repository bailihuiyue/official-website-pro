<template>
  <div class="carousel" ref="carouselRef">
    <el-carousel :height="height" arrow="always">
      <el-carousel-item v-for="item in carouselList" :key="item.id">
        <a :href="'#'+item.href">
          <!-- <el-image :src="item.img" fit="contain"/> -->
          <img :src="$imgServer+item.img" class="img" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ['carouselList', 'useDocumentWidth'],
  data() {
    return {
      height: '0px',
      ruleWidth: ''
    }
  },
  watch: {
    carouselList: {
      handler: function (val, oldVal) {
        this.calcCarouselHeight()
      },
      deep: true
      // immediate: true
    }
  },
  mounted() {
    this.calcCarouselHeight()
  },
  methods: {
    calcCarouselHeight() {
      const self = this
      if (this.carouselList.length) {
        let clientWidth = ''
        if (this.useDocumentWidth) {
          clientWidth = document.documentElement.clientWidth
        } else {
          clientWidth = this.$refs.carouselRef.clientWidth
        }
        var img = new Image()
        img.src = this.$imgServer + this.carouselList[0].img
        img.onload = function () {
          self.height =
            (clientWidth * img.naturalHeight) / img.naturalWidth + 'px'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.carousel {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>