<template>
  <div id="app">
    <el-container>
      <!-- 1.header半透明2.兼容手机模式 -->
      <el-header :class="isMobile?'mobileHeader':'pcHeader'">
        <!-- <div :style="{width:isMobile?'':'80%'}"> -->
        <i class="menuBtn" v-if="isMobile" @click="handleDisplayDrawer(true)">
          <img id="menuBtn" src="/menu.svg" />
        </i>
        <Logo :isMobile="isMobile" :handleDisplayDrawer="handleDisplayDrawer" />
        <HorizontalMenu
          mode="horizontal"
          :handleSelect="handleSelect"
          v-if="!isMobile"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        />
        <div class="headerButtons">
          <!-- <SearchProduct v-show="!isMobile" /> -->
          <ChangeLocation :style="{marginRight:isMobile?'10px':'0'}" />
        </div>
        <!-- </div> -->
      </el-header>
      <img :class="isMobile?'':'lineImg'" src="/line.png" />
      <el-drawer
        :visible="showDrawer"
        direction="ltr"
        @close="handleDisplayDrawer(false)"
        custom-class="menuDrawerClass"
      >
        <VerticalMenu mode="vertical" :handleSelect="handleSelect" @closeMenu="handleDisplayDrawer(false)"/>
      </el-drawer>
      <el-main :style="{marginTop:isMobile?'':'60px'}">
        <Breadcrumb/>
        <router-view />
      </el-main>
      <Footer v-show="isShow" :isMobile="isMobile" />
    </el-container>
  </div>
</template>

<script>
import device from 'current-device'
import HorizontalMenu from '@/components/Menu/Horizontal'
import VerticalMenu from '@/components/Menu/Vertical'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'
import ChangeLocation from '@/components/ChangeLocation'
import SearchProduct from '@/components/SearchProduct'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    HorizontalMenu,
    VerticalMenu,
    Footer,
    Logo,
    ChangeLocation,
    SearchProduct,
    Breadcrumb
  },
  data() {
    return {
      defaultActive: '/',
      isShow: true,
      isMobile: device.mobile(),
      showDrawer: false
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (val.path.indexOf('admin') > 0) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      },
      deep: true,
      immediate: true
    }
  },
  // created() {
  //   window.onresize = () => {
  //     window.location.reload();
  //   };
  // },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key
      if (this.showDrawer) this.showDrawer = false
    },
    handleDisplayDrawer(isShowDrawer) {
      this.showDrawer = isShowDrawer
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/color.scss';

* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // width: 100%;
  // height: 100%;
  .headerButtons {
    display: flex;
    align-items: center;
  }
  .menuBtn {
    font-size: 30px;
    margin: 5px;
    color: rgba(0, 0, 0, 0.35);
    line-height: 50px;
    #menuBtn {
      width: 20px;
      margin-left: 5px;
    }
  }
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 auto;
  // width: 80%;
  padding: 0;
  //background-color: #fff;
  height: 60px !important;
  &.pcHeader {
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0 10%;
  }
  &.mobileHeader {
    background-color: rgba(0, 0, 0, 0.9);
  }
}
.lineImg {
  position: fixed;
  top: 60px;
  width: 100%;
  z-index: 3;
}
.el-main {
  padding: 0 !important;
}
.mobile {
  .el-header {
    padding: 0;
    margin: 0;
    .logo {
      width: 100%;
      img {
        padding-left: 0;
        // width: 100%;
      }
    }
  }
}
div.el-menu--horizontal {
  width: 100%;
  background-color: rgba(0,0,0,0.9);
  left: 0 !important;
  & > ul {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    padding: 0 10%;
    background-color: transparent !important;
    padding-top: 30px !important;
    li.el-menu-item {
      height: 150px !important;
      width: 200px;
      &:hover {
        background-color: transparent !important;
        color: $themeColor !important;
      }
      .subThumb,
      .subTitle {
        width: 90px;
      }
      .subTitle {
        text-align: center;
        font-size: 13px;
      }
    }
    // li {
    //   &.el-menu-item-group {
    //     margin-bottom: 25px;
    //     .el-menu-item-group__title {
    //       padding-left: 0 !important;
    //       .subTitle {
    //         color: #fff;
    //         font-size: 14px;
    //         margin-bottom: 25px;
    //         font-weight: bold;
    //       }
    //       .subThumb {
    //         // margin-bottom: 15px;
    //       }
    //     }
    //     ul {
    //       flex-direction: column;
    //       // margin-top: 10px;
    //       li {
    //         padding-left: 0 !important;
    //         min-width: 245px;
    //         background-color: transparent !important;
    //         height: auto !important;
    //         padding-bottom: 30px;
    //         margin: 5px 0;
    //         .subContent {
    //           margin: 5px 0;
    //           color: #999999 !important;
    //           font-weight: 600;
    //           font-size: 13px;
    //         }
    //         .subContent:hover {
    //           color: $themeColor !important;
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
.menuDrawerClass {
  width: 100% !important;
  height: 100%;
  background-color: #000 !important;
  // background-color: #000 !important;
  .el-drawer__header > :first-child {
    flex: 0;
  }
  .el-drawer__header {
    margin-bottom: 0 !important;
    padding-top: 15px;
  }
}


::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
  // height: 6px;
}

::-webkit-scrollbar-track-piece {
  border: none;
  background-color: transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  width: 6px;
  // height: 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
</style>
