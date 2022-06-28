<template>
  <div class="playVideoWithModal">
    <el-image class="img" :src="$imgServer+data.img" />
    <div class="playButton" @click="onShowVideoModal"></div>
    <el-dialog
      :destroy-on-close="true"
      :show-close="false"
      :visible.sync="showVideoModal"
      width="60%"
      custom-class="videoModal"
    >
      <VideoPlayer :videoData="data" :autoplay="true" v-if="showVideoModal"/>
    </el-dialog>
  </div>
</template>
<script>
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
  props: ['data'],
  components: { VideoPlayer },
  data() {
    return {
      showVideoModal: false
    }
  },
  methods: {
    onShowVideoModal() {
      this.showVideoModal = true
    }
  }
}
</script>
<style lang="scss">
.playVideoWithModal {
  position: relative;
  .playButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
    width: 100px;
    height: 100px;
    background-position: center center;
    background-image: url('../../public/imgs/video/play.png');
    background-repeat: no-repeat;
    background-size: cover;
    &:hover {
      background-image: url('../../public/imgs/video/playing.png');
    }
  }
  .videoModal {
    background-color: #000;
    .el-dialog__header,
    .el-dialog__body {
      padding: 0;
    }
  }
}
</style>