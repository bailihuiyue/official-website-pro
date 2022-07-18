<template>
  <div class="videoPlayer">
    <video
      preload="auto"
      :poster="this.$videoURL + videoData.img"
      controls="controls"
      autoplay
      id="videoPlayer"
      v-if="autoplay"
    >
      <source :src="videoData.href || videoData.src" />
    </video>
    <video
      preload="auto"
      :poster="this.$videoURL + videoData.img"
      controls="controls"
      id="videoPlayer"
      v-else
    >
      <source :src="videoData.href || videoData.src" />
    </video>
  </div>
</template>
<script>
export default {
  props: ['videoData', 'autoplay']
}
</script>
<style lang="scss">
.videoPlayer {
  video{
    width: 100%;
  }
}
.mobile {
  .videoPlayer {
  }
}
</style>