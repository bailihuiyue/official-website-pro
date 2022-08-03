<template>
  <el-result title="404" :subTitle="lang.pageNotFound[$lang]">
    <template slot="icon">
      <img src="imgs/404.jpg" style="width:80%"></img>
    </template>
    <template slot="extra">
      <router-link to="/">
        <el-button type="primary" size="medium">{{lang.back[$lang]}}</el-button>
      </router-link>
    </template>
  </el-result>
</template>

<script>
export default {
  name: 'Exception404',
  data() {
    return {
      lang: {
        pageNotFound: {
          cn: '抱歉，页面不存在',
          en: 'Page Not Found'
        },
        back: {
          cn: '返回首页',
          en: 'Back To Index Page'
        }
      }
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
