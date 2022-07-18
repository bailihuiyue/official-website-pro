<template>
  <div class="footer" v-if="list&&list.length">
    <div class="blogroll">
      <div class="followUsTitleEn">{{lang.followUs.en}}</div>
      <div class="imgsWrap">
        <a :href="i.href" v-for="i in img" class="imgItem" target="_blank">
          <img :src="i.img" />
          <div class="txt">{{i.txt}}</div>
        </a>
      </div>
    </div>
    <div class="copyright">
      <div class="footerLine"></div>
      <span>{{copyright}}</span>
    </div>
  </div>
</template>

<script>
import { getFooter } from './service'

export default {
  props: ['isMobile'],
  data() {
    return {
      isIndexPage: '',
      list: [],
      img: [],
      copyright: '',
      lang: {
        followUs: {
          en: 'Follow Us',
          cn: '联系我们'
        },
        backToTop: {
          en: 'Back To Top',
          cn: '回到顶部'
        }
      }
    }
  },
  created() {
    getFooter().then((res) => {
      this.list = JSON.parse(res.list)
      this.img = JSON.parse(res.img)[this.$lang]
      this.copyright = res.copyright
    })
  },
  methods: {
    jumpTo(href) {
      if (href) {
        if (href.indexOf('//') > 0) {
          window.location.href = href
        } else {
          this.$router.push(href)
        }
      }
    },
    backToTop() {
      window.scrollTo(0, 0)
    }
  },
  watch: {
    '$route.path': {
      handler: function (val) {
        this.isIndexPage = val === '/'
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/color.scss';

.footer {
  background: #111 url('../../../public/imgs/footerBg.png') no-repeat top right;
  width: 100%;
  .blogroll {
    width: 80%;
    margin: auto;
    .followUsTitleEn,
    .followUsTitleCn {
      font-size: 40px;
      color: #fff;
      text-align: center;
      margin-bottom: 20px;
    }
    .followUsTitleEn {
      margin-top: 70px;
      margin-bottom: 100px;
    }
    .followUsTitleCn {
      font-size: 26px;
      margin-top: 30px;
      margin-bottom: 130px;
    }
    .imgsWrap {
      margin-bottom: 60px;
      display: flex;
      justify-content: space-between;
      .imgItem {
        text-decoration: none;
        flex: 0 1 auto;
        width: 80px;
        display: block;
        color: #fff;
        img {
          width: 100%;
        }
        .txt {
          text-align: center;
          &:hover {
            color: $themeColor;
          }
        }
        &:hover {
          color: $themeColor;
        }
      }
    }
  }
  .copyright {
    // height: 30px;
    // background: #111;
    margin-top: 15px;
    border-top: 1px solid rgb(83, 82, 82);
    width: 80%;
    margin: auto;
    span {
      // width: 1240px;
      padding: 10px 0;
      display: block;
      color: #bbb;
      line-height: 30px;
      margin: auto;
      font-size: 14px;
    }
  }
}
.mobile {
  .footer {
    height: auto;
    .blogroll {
      width: 90%;
      .followUsTitleEn {
        margin: 10px;
        font-size: 20px;
        margin-top: 20px;
      }
      .followUsTitleCn {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }
    .copyright {
      text-align: center;
    }
    .imgsWrap {
      display: block;
      margin-bottom: 20px;
      .imgItem {
        width: 20%;
        display: inline-block;
        .txt {
          font-size: 14px;
        }
      }
    }
  }
}
</style>