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
          <!-- <el-input
            class="menuSearch"
            :placeholder="lang.placeholder[$lang]"
            suffix-icon="el-icon-search"
            v-model="searchTxt"
            @change="onSearchProd"
            v-if="!isMobile&&showMenuSearch"
          ></el-input>-->
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
        size="100%"
      >
        <VerticalMenu
          mode="vertical"
          :handleSelect="handleSelect"
          @closeMenu="handleDisplayDrawer(false)"
        />
      </el-drawer>
      <el-main :style="{marginTop:isMobile?'':'90px'}">
        <Breadcrumb />
        <transition>
           <!-- 从详情返回时保存住当前点击过的分类(此方案更靠谱些) -->
          <!-- <keep-alive include="configGuide"> -->
            <router-view />
          <!-- </keep-alive> -->
        </transition>
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
// import SearchProduct from '@/components/SearchProduct'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    HorizontalMenu,
    VerticalMenu,
    Footer,
    Logo,
    ChangeLocation,
    // SearchProduct,
    Breadcrumb
  },
  data() {
    return {
      defaultActive: '/',
      isShow: true,
      isMobile: device.mobile(),
      showDrawer: false,
      searchTxt: '',
      lang: {
        placeholder: {
          cn: '搜索产品',
          en: 'Search Product'
        }
      },
      showMenuSearch: true
    }
  },
  watch: {
    $route: {
      handler: function (val) {
        if (val.path.indexOf('admin') > 0) {
          this.isShow = false
        } else {
          this.isShow = true
        }
        this.showMenuSearch = val.name !== 'productList'
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
    },
    onSearchProd() {
      this.$router.push({
        path: '/productList',
        query: {
          searchTxt: this.searchTxt
        }
      })
      this.searchTxt = ''
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

  // 切换路由的过渡动画
  .v-enter {
    opacity: 0;
  }
  .v-enter-active {
    transition: all 0.5s;
  }
  .v-enter-to {
    opacity: 1;
  }

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
  .tinyVideo {
    margin: 15px auto;
    width: auto;
    height: 350px;
    display: block;
  }
  a[rel='noopener'] {
    margin: 10px 0;
    display: inline-block;
    color: $themeColor;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .menuSearch {
    margin-right: 30px;
    .el-input__inner {
      border-radius: 50px;
      height: 36px;

      background-color: rgb(24, 26, 27);
      border-color: rgb(56, 61, 64);
      color: rgb(169, 162, 151);
    }
    .el-input__suffix {
      right: 8px;
      .el-input__icon {
        line-height: 36px;
      }
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
  height: 90px !important;
  &.pcHeader {
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0 10%;
    // padding-top: 15px;
  }
  &.mobileHeader {
    background-color: rgba(0, 0, 0, 0.9);
    height: 60px !important;
  }
}
.lineImg {
  position: fixed;
  top: 90px;
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
  .tinyVideo {
    margin: 15px auto;
    width: 100% !important;
    height: auto !important;
    display: block;
  }
  .el-drawer__wrapper {
    z-index: 9999999999 !important;
  }
}
.menuDrawerClass {
  // width: 100% !important;
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
