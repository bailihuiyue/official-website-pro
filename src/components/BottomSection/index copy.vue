<template>
  <div class="bottomSection">
    <div class="section s1">
      <a :href="bottomImgs[0].href">
        <el-image class="img" :src="$imgServer+bottomImgs[0].img" />
      </a>
    </div>
    <div class="section s2">
      <VideoPlayer :videoData="bottomImgs[1]" />
    </div>
    <div class="section s3">
      <a :href="bottomImgs[2].href">
        <el-image class="img" :src="$imgServer+bottomImgs[2].img" />
      </a>
    </div>
    <div class="section s4">
      <Carousel :carouselList="bottomImgs[3].imgs" />
    </div>
  </div>
</template>
<script>
import VideoPlayer from '../VideoPlayer.vue'
import Carousel from '../Carousel.vue'

export default {
  props: ['bottomImgs'],
  components: {
    VideoPlayer,
    Carousel
  }
}
</script>
<style lang="scss">
.bottomSection {
  background: rgb(28, 30, 31);
  padding: 20px;
  .section {
    // padding: 10px;
    width: calc(50% - 10px);
    display: inline-block;
    border: none;

    &.s1,
    &.s3 {
      // margin-left:10px;
      margin-right: 20px;
    }
    &.s3,
    &.s4 {
      margin-top: 20px;
    }
  }
}
</style>