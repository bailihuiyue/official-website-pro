<template>
  <div class="CompanyStateDetail">
    <div class="title">{{title}}</div>
    <div class="content" v-html="content"></div>
  </div>
</template>
<script>
import { getCompanyStateDetail } from './service'
export default {
  name: 'companyStateDetail',
  data() {
    return {
      content: '',
      title: ''
    }
  },
  created() {
    getCompanyStateDetail(this.$lang, this.$route.query.id).then((res) => {
      this.title = res.title
      this.content = res.content
    })
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.CompanyStateDetail {
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
    img{
      width: 100%;
    }
    // color: $lightWhite;
  }
}
.mobile {
  .CompanyStateDetail {
    .title {
      font-size: 16px;
    }
  }
}
</style>