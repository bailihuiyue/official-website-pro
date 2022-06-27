<template>
  <div class="footer">
    <div class="footer-content" v-if="!isMobile">
      <ul class="content-nav">
        <li v-for="f in footers.list">
          <p>{{f[$lang]}}</p>
          <div
            v-for="c in f.children"
            target="_blank"
            style="display: block"
            :class="c.href?'hasUnderLine':'noUnderLine'"
            @click="jumpTo(c.href)"
          >{{c[$lang]}}</div>
        </li>
      </ul>
      <div class="followUs">
        <h3>{{lang.followUs[$lang]}}</h3>
        <div class="miniPic">
          <a :href="fi.href" v-for="fi in footers.img" :key="fi.img" target="_blank">
            <img :src="fi.img" />
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      <el-collapse>
        <el-collapse-item v-for="f in footers.list">
          <template slot="title">
            <div style="margin:0 10px">{{f[$lang]}}</div>
          </template>
          <a
            class="collapseItem"
            v-for="c in f.children"
            target="_blank"
            style="display: block;"
            @click="jumpTo(c.href)"
          >{{c[$lang]}}</a>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="copyright">
      <span>{{footers.copyright}}</span>
    </div>
  </div>
</template>

<script>
import { getFooter } from './service'

export default {
  props: ['isMobile'],
  data() {
    return {
      footers: {},
      lang: {
        followUs: {
          en: 'Follow Us',
          cn: '关注我们'
        }
      }
    }
  },
  created() {
    getFooter(this.$lang).then((res) => {
      this.footers = res
      this.footers.list = JSON.parse(res.list)
      this.footers.img = JSON.parse(res.img)
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
    }
  }
}
</script>

<style lang="scss">
.footer {
  background: #111 url('../../../public/imgs/footerBg.png') no-repeat top right;
  width: 100%;
  // height: 216px;
  // overflow: hidden;
  // background-color: #000;
  &-content {
    // width: 1240px;
    margin: 0 auto;
    padding: 10px 10% 0 10%;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
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
          padding: 5px 0;
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
          text-decoration: underline;
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
    .followUs {
      width: 250px;
      h3 {
        color: #fff;
        margin-bottom: 20px;
        margin-top: 10px;
        margin-left: 10px;
      }
      .miniPic {
        a {
          margin: 10px;
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
  }
  .copyright {
    // height: 30px;
    // background: #111;
    margin-top: 15px;
    span {
      border-top: 1px solid rgb(83, 82, 82);
      // width: 1240px;
      padding: 10px 10% 20px 10%;
      display: block;
      color: #fff;
      line-height: 30px;
      margin: auto;
      font-size: 12px;
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
          width: 90%;
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