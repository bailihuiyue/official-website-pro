<template>
  <div class="footer">
    <div class="footer-content" v-if="!isMobile">
      <ul class="content-nav">
        <li v-for="f in footers.list">
          <p>{{f[$lang]}}</p>
          <a
            v-for="c in f.children"
            target="_blank"
            style="display: block;"
            :href="c.href||''"
          >{{c[$lang]}}</a>
        </li>
      </ul>
      <img v-if="footers.img" :src="footers.img" alt />
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
            :href="c.href||''"
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
      footers: []
    }
  },
  created() {
    getFooter().then((res) => (this.footers = res))
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
        a {
          font-size: 14px;
          color: #bbb;
          font-weight: 300;
          padding: 5px 0;
          text-decoration: none;
          cursor: default;
        }
        a:not([href='']):hover {
          text-decoration: underline;
          cursor: pointer;
        }
        a[href=''] {
          pointer-events: none;
        }
      }
      li:first-child {
        padding-left: 0;
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
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