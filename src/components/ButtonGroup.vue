<template>
  <div class="ButtonGroup">
    <el-row>
      <template v-for="b in btns">
        <el-link v-if="isMobile">{{b['title'][$lang]}}</el-link>
        <el-button v-else class="isPC">
          <div v-if="type==='vertical'" class="vertical">
            <div class>
              <img :src="b.img" />
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="b.desc">{{b['desc'][$lang]}}</div>
            </div>
          </div>
          <div class="horizontal" v-else>
            <img :src="b.img" />
            <div class="txtWrap">
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="b.desc">{{b['desc'][$lang]}}</div>
            </div>
          </div>
        </el-button>
      </template>
    </el-row>
  </div>
</template>
<script>
import device from 'current-device'

export default {
  props: ['btns', 'type'],
  data() {
    return {
      isMobile: device.mobile()
    }
  }
}
</script>
<style lang="scss">
@import '../styles/color.scss';

.ButtonGroup {
  text-align: center;
  margin-top: 5vh;
  .el-row {
    .el-button:focus,
    .el-button:hover {
      color: $themeColor;
    }
    .isPC {
      margin: 0 30px;
      display: inline-block;
      background-color: #000;
      border: none;
      img {
        width: 50px;
        height: 50px;
      }
      .vertical {
        width: 100px;
        height: 100px;
      }
      .horizontal {
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        .txtWrap {
          margin-left: 10px;
          text-align: left;
          .desc {
            margin-top: 5px;
          }
        }
      }
    }
  }
}
.mobile {
  .ButtonGroup {
    .el-link.el-link--default:hover {
      color: $themeColor;
    }
    .el-link.el-link--default:visited {
      color: $themeColor !important;
    }
    .el-link.is-underline:hover:after{
      border-bottom: 1px solid $themeColor;
    }
    margin: 20px 0;
    .el-row {
      .el-link--inner {
        margin: 0 10px;
      }
    }
  }
}
</style>