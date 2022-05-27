<template>
  <div class="carousel">
    <el-carousel :height="height" arrow="always">
      <el-carousel-item v-for="item in carouselList" :key="item.img">
        <img :src="item.img" class="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ['carouselList'],
  data() {
    return {
      height: '0px'
    }
  },
  watch: {
    carouselList: {
      handler: function (val, oldVal) {
        const self=this
        if (val.length) {
          const clientWidth = document.documentElement.clientWidth
          var img = new Image()
          img.src = val[0].img
          img.onload = function () {
            self.height = (clientWidth * img.naturalHeight) / img.naturalWidth + 'px'
          }
        }
      },
      deep: true,
      immediate: true
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