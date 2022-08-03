<template>
  <div class="FAQDetail">
    <div class="title">{{title}}</div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
import { getFAQDetail } from './service'
export default {
  name: 'FAQDetail',
  data() {
    return {
      content: '',
      title: ''
    }
  },
  created() {
    getFAQDetail(this.$lang, this.$route.query.id).then((res) => {
      this.title = res.title
      this.content = res.content
    })
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.FAQDetail {
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
    // color: $lightWhite;
    img {
      width: 100%;
      display: block;
    }
  }
}
.mobile {
  .FAQDetail {
    .title {
      font-size: 16px;
    }
  }
}
</style>