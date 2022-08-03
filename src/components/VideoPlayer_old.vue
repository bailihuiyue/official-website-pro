<template>
  <div class="videoPlayer">
    <div class="p-video">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
  </div>
</template>
<script>
export default {
  props: ['videoData', 'autoplay'],
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 4.0, 8.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        //aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: '',
            src: '' //url地址
          }
        ],
        poster: '', //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      }
    }
  },
  watch: {
    videoData: {
      handler: function (val) {
        this.playerOptions.sources[0].src = val.href || val.src
        this.playerOptions.poster = this.$videoURL + val.img
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    if (this.autoplay) {
      this.playerOptions.autoplay = this.autoplay
    }
  }
}
</script>
<style lang="scss">
.videoPlayer {
  height: 100%;
  .p-video {
    height: 100%;
    // width: 1000px;
    // margin: 0 auto;
    // padding: 60px 0;
    .video-player {
      height: 100%;
      .vjs-poster {
        background-color: rgb(28, 30, 31);
      }
      .vjs-fluid {
        height: 100%;
      }
    }
  }
}
.mobile {
  .videoPlayer {
    .p-video {
      width: auto;
    }
    .vjs-control-bar {
      .vjs-volume-panel-horizontal,
      .vjs-time-control,
      .vjs-playback-rate {
        display: none;
      }
    }
  }
}
</style>