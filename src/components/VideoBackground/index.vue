<template>
  <div class="videoBackground">
    <div class="videoBackgroundMask">
      <div class="videoBackgroundContent">
        <div class="title">{{videoData.title}}</div>
        <div class="desc">{{videoData.desc}}</div>
        <div class="showVideoBtn" @click="showVideo">
          <div>{{lang.showVideo[$lang]}} ></div>
        </div>
      </div>
    </div>
    <video
      class="video-background"
      preload="auto"
      loop
      playsinline
      autoplay
      tabindex="-1"
      muted="muted"
      v-if="!reloadBgVideo"
    >
      <source :src="$videoURL+videoData.videoBg" />
    </video>
    <el-dialog
      :show-close="false"
      :visible.sync="showVideoModal"
      :width="isMobile?'100%':'70%'"
      custom-class="videoModal"
      @close="onVideoModalClose"
    >
      <video preload="auto" controls="controls" autoplay id="videoBackgroundId">
        <source :src="$videoURL+videoData.videoPop" />
      </video>
    </el-dialog>
  </div>
</template>
<script>
import device from 'current-device'

export default {
  name: 'videoBackground',
  props: ['videoData'],
  components: {},
  data() {
    return {
      lang: {
        showVideo: {
          cn: '观看视频',
          en: 'Show Video'
        }
      },
      showVideoModal: false,
      isMobile: device.mobile(),
      reloadBgVideo: false
    }
  },
  methods: {
    showVideo() {
      this.showVideoModal = true
      this.$nextTick(() => {
        document.getElementById('videoBackgroundId').play()
      })
    },
    onVideoModalClose() {
      document.getElementById('videoBackgroundId').pause()
    }
  }
}
</script>
<style lang="scss">
.videoBackground {
  position: relative;
  width: 100%;
  .videoBackgroundMask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 2;
    .videoBackgroundContent {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, 0%);
      .title {
        font-size: 50px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0;
        color: #ffffff;
        text-align: center;
        overflow: hidden;
        margin: auto;
        text-align: center;
      }
      .desc {
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0rem;
        color: #ffffff;
        margin-top: 20px;
        text-align: center;
      }
      .showVideoBtn {
        width: 250px;
        height: 40px;
        margin: 0 auto;
        border-radius: 50px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #232323;
        background: rgba(255, 255, 255, 0.8);
        line-height: 40px;
        margin-top: 30px;
        cursor: pointer;
        z-index: 3;
        &:hover {
          background: rgba(255, 255, 255, 0.6);
        }
        div {
          text-align: center;
          width: 100%;
        }
      }
    }
  }
  video {
    display: block;
    width: 100%;
  }
  .videoModal {
    background-color: #000;
    .el-dialog__header,
    .el-dialog__body {
      padding: 0;
    }
  }
}
.mobile {
  .videoBackground {
    .videoBackgroundContent {
      top: 8vw !important;
      .title {
        font-size: 9vw !important;
      }
      .desc {
        font-size: 6vw !important;
        margin-top: 3vw !important;
      }
      .showVideoBtn {
        margin-top: 5vw !important;
      }
    }
  }
}
</style>