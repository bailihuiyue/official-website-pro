<template>
  <div class="footer">
    <div class="footer-content">
      <ul class="content-nav">
        <li v-for="f in footers.list">
          <p>{{f[$lang]}}</p>
          <a v-for="c in f.children" target="_blank" style="display: block;" :href="c.href||''">{{c[$lang]}}</a>
        </li>
      </ul>
      <img v-if="footers.img" :src="footers.img" alt />
    </div>
    <div class="copyright">
      <span>{{footers.copyright}}</span>
    </div>
  </div>
</template>

<script>
import { getFooter } from './service'

export default {
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
  width: 100%;
  // height: 216px;
  // overflow: hidden;
  background-color: #14679f;
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
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        a {
          color: #f7f7f7;
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
    background: #125688;
    span {
      margin-bottom: 10px;
      // width: 1240px;
      padding: 0 10%;
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
  }
}
</style>