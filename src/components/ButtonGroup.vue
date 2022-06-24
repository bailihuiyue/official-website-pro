<template>
  <div class="ButtonGroup">
    <el-row>
      <template v-for="(b,index) in btns">
        <el-link
          v-if="isMobile"
          :class="clickedIndex===index?'isActive':''"
          @click="onClickBtn(b,index)"
        >{{b['title'][$lang]}}</el-link>
        <el-button
          v-else
          class="isPC"
          @click="onClickBtn(b,index)"
          :class="clickedIndex===index?'isActive':''"
        >
          <div v-if="type==='vertical'" class="vertical">
            <div class>
              <img :src="(useLocalImg?'':$imgServer)+b.img" />
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="b.desc">{{b['desc'][$lang]}}</div>
            </div>
          </div>
          <div class="horizontal" v-else>
            <img :src="(useLocalImg?'':$imgServer)+b.img" />
            <div class="txtWrap">
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="b.desc">{{b['desc'][$lang]}}</div>
            </div>
          </div>
        </el-button>
      </template>
    </el-row>
    <hr />
  </div>
</template>
<script>
import device from 'current-device'

export default {
  props: ['btns', 'type', 'defaultClickedBtn', 'useLocalImg'], //horizontal / vertical
  data() {
    return {
      isMobile: device.mobile(),
      clickedIndex: -1
    }
  },
  created() {
    this.clickedIndex =
      this.defaultClickedBtn >= 0 || this.defaultClickedBtn
        ? this.defaultClickedBtn
        : -1
  },
  methods: {
    onClickBtn(data, index) {
      this.clickedIndex = index
      this.$emit('click', data)
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
    margin-bottom: 20px;
    .isActive {
      color: $themeColor;
    }
    .el-button:focus,
    .el-button:hover {
      // color: $themeColor;
      background-color: transparent;
    }
    .isPC {
      margin: 0 30px;
      display: inline-block;
      // background-color: #000;
      border: none;
      img {
        width: 100px;
        height: 100px;
      }
      .vertical {
        width: 120px;
        // height: 120px;
        .title {
          margin-top: 10px;
        }
        .desc {
          margin-top: 5px;
          font-size: 12px;
        }
      }
      .horizontal {
        width: 200px;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        .txtWrap {
          margin-left: 20px;
          text-align: left;
          .desc {
            margin-top: 20px;
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
    .el-link.is-underline:hover:after {
      border-bottom: 1px solid $themeColor;
    }
    margin: 20px 0;
    .el-row {
      text-align: left;
      a{
        margin-bottom: 10px;
      }
      .el-link--inner {
        margin: 0 10px;
      }
    }
  }
}
</style>