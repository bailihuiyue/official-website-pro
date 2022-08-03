<template>
  <div class="footer" v-if="list&&list.length">
    <div v-if="!isMobile" :class="isIndexPage?'':'hasMarginTop'"></div>
    <div class="footer-content" v-if="!isMobile">
      <ul class="content-nav">
        <li v-for="l in list">
          <p>{{l[$lang]}}</p>
          <div
            v-for="c in l.children"
            target="_blank"
            style="display: block"
            :class="c[`href${$lang}`]?'hasUnderLine':'noUnderLine'"
            @click="jumpTo(c[`href${$lang}`])"
          >{{c[$lang]}}</div>
        </li>
      </ul>
      <div class="middleFooterContent">
        <div class="followUs">
          <span class="followUsTitle">{{lang.followUs[$lang]}}：</span>
          <span class="miniPic">
            <a :href="fi.href" v-for="fi in img" :key="fi.img" target="_blank">
              <img :src="fi.img" />
            </a>
          </span>
        </div>
        <el-link class="backToTop" @click="backToTop">{{lang.backToTop[$lang]}}</el-link>
      </div>
    </div>
    <div v-else>
      <el-collapse>
        <el-collapse-item v-for="f in list" :key="f.en">
          <template slot="title">
            <div style="margin:0 10px">{{f[$lang]}}</div>
          </template>
          <a
            class="collapseItem"
            v-for="c in f.children"
            target="_blank"
            style="display: block;"
            @click="jumpTo(c.href)"
            :key="c.en"
          >{{c[$lang]}}</a>
        </el-collapse-item>
      </el-collapse>
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
          cn: '关注我们'
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
      this.img = JSON.parse(res.img)
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
  .hasMarginTop {
    width: 100%;
    height: 80px;
    background-color: #fff;
  }
  background: #111 url('../../../public/imgs/footerBg.png') no-repeat top right;
  width: 100%;
  // height: 216px;
  // overflow: hidden;
  // background-color: #000;
  &-content {
    // width: 1240px;
    margin: 0 auto;
    padding: 10px 10% 0 10%;
    .content-nav {
      display: flex;
      // justify-content: space-around;
      li {
        margin-right: 150px;
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        //justify-content: center;
        align-items: flex-start;
        p {
          font-size: 16px;
          color: #fff;
          padding: 10px 0;
        }
        .hasUnderLine,
        .noUnderLine {
          font-size: 14px;
          color: #bbb;
          font-weight: 300;
          padding: 10px 0;
          text-decoration: none;
          cursor: default;
        }
        // a:not([href='']):hover {
        //   text-decoration: underline;
        //   cursor: pointer;
        // }
        // a[href=''] {
        //   pointer-events: none;
        // }
        .hasUnderLine:hover {
          color: $themeColor;
          cursor: pointer;
        }
        .noUnderLine:hover {
          pointer-events: none;
        }
      }
      li:first-child {
        padding-left: 0;
      }
    }
    .middleFooterContent {
      &:after {
        content: '';
        clear: both;
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
      }
      .followUs {
        float: left;
        // width: 250px;
        margin-top: 35px;
        margin-bottom: 20px;
        .followUsTitle {
          color: #fff;
          // margin-bottom: 10px;
          // margin-top: 10px;
          // margin-left: 10px;
          display: inline-block;
          height: 30px;
          margin-right: 10px;
        }
        .miniPic {
          display: inline-block;
          height: 30px;
          vertical-align: middle;
          a {
            // margin: 10px;
            margin-right: 20px;
            width: 30px;
            height: 30px;
            display: inline-block;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .backToTop {
        float: right;
        color: #bbb;
        margin-top: 35px;
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
    .footer-content {
      // width: 100%;
      display: block;
      .content-nav {
        display: block;
        li {
          display: block;
          width: $contentWidth;
          margin: auto;
          padding: 0 10px;
          span {
            padding: 5px;
          }
        }
        .contact {
          span {
            display: block;
          }
        }
      }
      img {
        margin: auto;
        display: block;
      }
    }
    .copyright {
      text-align: center;
    }
    .el-collapse {
      border-top: none;
      .collapseItem {
        color: #999;
        margin: 8px 15px;
        text-decoration: none;
      }
      .collapseItem[href=''] {
        pointer-events: none;
      }
      .el-collapse-item__header {
        background-color: #000;
        color: #e5e5e5;
      }
      .el-collapse-item__wrap {
        background-color: #000;
      }
      .el-collapse-item__content {
        padding-bottom: 0;
      }
      .el-collapse-item__header.is-active {
        border-bottom: 2px solid #333;
      }
    }
  }
}
</style>