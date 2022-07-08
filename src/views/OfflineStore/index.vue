<template>
  <div class="offlineStore">
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
import { getOfflineStore } from './service'
export default {
  name: 'offlineStore',
  data() {
    return {
      content: ''
    }
  },
  created() {
    getOfflineStore(this.$lang).then((res) => {
      this.content = res.content
    })
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.offlineStore {
  width: $contentWidth;
  margin: 0 auto;
  margin-top: 30px;
  .content {
    margin: 20px auto;
    img{
      width: 100%;
    }
    // color: $lightWhite;
  }
}
</style>