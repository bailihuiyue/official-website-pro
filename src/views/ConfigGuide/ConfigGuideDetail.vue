<template>
  <div class="ConfigGuideDetail">
    <div class="title">{{title}}</div>
    <VideoPlayer :videoData="videoData" v-if="videoData.href" />
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'
import { getConfigGuideDetail } from './service'
export default {
  components: { VideoPlayer },
  data() {
    return {
      videoData: {},
      content: '',
      title: ''
    }
  },
  created() {
    getConfigGuideDetail(this.$lang, this.$route.query.id).then((res) => {
      this.title = res.title
      if (res.video) {
        this.videoData = {
          img: res.img,
          href: this.$videoURL + res.video
        }
      }
      this.content = res.content
    })
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.ConfigGuideDetail {
  width: $contentWidth;
  margin: 0 auto;
  margin-top: 30px;
  .title {
    text-align: center;
    font-size: 30px;
    margin: 20px;
    // color: $lightWhite;
  }
  .videoPlayer {
    width: $contentWidth;
    margin: 0 auto;
    // position: relative;
    // z-index:0;
  }
  .content {
    width: $contentWidth;
    margin: 20px auto;
    // color: $lightWhite;
  }
}
.mobile {
  .ConfigGuideDetail {
    width: 100%;
    .title {
      font-size: 16px;
    }
    img {
      width: 100%;
    }
  }
}
</style>