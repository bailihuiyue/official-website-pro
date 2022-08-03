<template>
  <div class="bottomSection">
    <div class="section s1">
      <router-link :to="bottomImgs[0].href">
        <el-image class="img" :src="$imgServer+bottomImgs[0].img" />
      </router-link>
    </div>
    <div class="section s2">
      <PlayVideoWithModal :data="bottomImgs[1]" />
    </div>
    <div class="section s3">
      <router-link :to="bottomImgs[2].href">
        <el-image class="img" :src="$imgServer+bottomImgs[2].img" />
      </router-link>
    </div>
    <div class="section s4">
      <Carousel :carouselList="bottomImgs[3].imgs" />
    </div>
  </div>
</template>
<script>
import Carousel from '../Carousel.vue'
import PlayVideoWithModal from '@/components/PlayVideoWithModal'

export default {
  props: ['bottomImgs'],
  components: {
    PlayVideoWithModal,
    Carousel
  }
}
</script>
<style lang="scss">
.bottomSection {
  background: rgb(28, 30, 31);
  // padding: 20px;
  width: 100%;
  // height: 66%; // 高度随意
  display: flex;
  flex-wrap: wrap;
  .section {
    // padding: 10px;
    // width: calc(50% - 10px);
    // display: inline-block;
    // border: none;
    flex: 1;
    width: 48%;
    min-width: 48%;
    max-width: 48%;
    &.s1,
    &.s2 {
      margin-top: 1%;
    }
    &.s1,
    &.s3 {
      margin-left: 1%;
      margin-right: 1%;
    }
    &.s3,
    &.s4 {
      margin-top: 1%;
      margin-bottom: 1%;
    }
    .el-image {
      img {
        transition: all 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>