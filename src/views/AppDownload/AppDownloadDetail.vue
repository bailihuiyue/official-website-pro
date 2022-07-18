<template>
  <div class="AppDownloadDetail">
    <div class="title">{{title}}</div>
    <div class="content" v-html="content"></div>
    <el-link
      type="primary"
      class="downHref"
      target="_blank"
      :href="$baseURL+appUrl"
      v-if="appUrl"
    >{{lang.clickToDownload[$lang]}}</el-link>
  </div>
</template>
<script>
import { getAppDownloadDetail } from './service'
export default {
  data() {
    return {
      content: '',
      title: '',
      appUrl: '',
      lang: {
        clickToDownload: {
          cn: '点我下载',
          en: 'Click To Download'
        }
      }
    }
  },
  created() {
    getAppDownloadDetail(this.$lang, this.$route.query.id).then((res) => {
      this.title = res.title
      this.content = res.content
      this.appUrl = res.appUrl
    })
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.AppDownloadDetail {
  width: $contentWidth;
  margin: 0 auto;
  margin-top: 30px;
  .title {
    text-align: center;
    font-size: 30px;
    margin: 20px;
    // color: $lightWhite;
  }
  .content {
    margin: 20px auto;
    img {
      width: 100%;
      display: block;
    }
    // color: $lightWhite;
  }
  .downHref {
    font-size: 16px;
    margin: 20px 0;
  }
}
.mobile {
  .AppDownloadDetail {
    .title {
      font-size: 16px;
    }
  }
}
</style>