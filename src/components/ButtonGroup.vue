<template>
  <div class="ButtonGroup">
    <el-row>
      <template v-for="(b,index) in btns">
        <el-link
          v-if="isMobile"
          :class="b.id+''===clickedId?'isActive':''"
          @click="onClickBtn(b,index)"
        >{{b['title'][$lang]}}</el-link>
        <el-button
          v-else
          class="isPC"
          @click="onClickBtn(b,index)"
          :class="b.id+''===clickedId?'isActive':''"
        >
          <div v-if="type==='vertical'" class="vertical">
            <div>
              <img :src="(useLocalImg?'':$imgServer)+b.img" />
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="extraData&&extraData[$lang]">{{extraData[$lang]}}</div>
            </div>
          </div>
          <div class="horizontal" v-else>
            <img :src="(useLocalImg?'':$imgServer)+b.img" />
            <div class="txtWrap">
              <div class="title">{{b['title'][$lang]}}</div>
              <div class="desc" v-if="extraData&&extraData[$lang]">{{extraData[$lang]}}</div>
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
  props: ['btns', 'type', 'defaultClickedBtn', 'useLocalImg', 'extraData'], //horizontal / vertical
  data() {
    return {
      isMobile: device.mobile(),
      clickedId: null
    }
  },
  // 从详情返回时保存住当前点击过的分类
  // created() {
  //   const clickedId = sessionStorage.getItem(this.$route.path)
  //   if (clickedId) {
  //     this.clickedId = clickedId
  //     sessionStorage.removeItem(this.$route.path)
  //   }
  // },
  watch: {
    defaultClickedBtn: {
      handler: function (val) {
        this.clickedId = val
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onClickBtn(data, index) {
      // 从详情返回时保存住当前点击过的分类
      // sessionStorage.setItem(this.$route.path, data.id)
      // sessionStorage.setItem(this.$route.path + 'type', data.typeNo)

      this.clickedId = data.id + ''
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
      color: $themeColor;
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
    margin-top: 20px;
    .el-row {
      text-align: left;
      margin-bottom: 5px;
      a {
        margin-bottom: 10px;
        margin-right: 20px;
      }
      // .el-link--inner {
      //   margin-right: 15px;
      // }
    }
  }
}
</style>