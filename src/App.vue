<template>
  <div id="app">
    <el-container>
      <el-header :style="{width:isMobile?'':'80%'}">
        <Logo :isMobile="isMobile" :handleDisplayDrawer="handleDisplayDrawer" />
        <Menu mode="horizontal" :handleSelect="handleSelect" v-if="!isMobile" />
      </el-header>
      <el-drawer
        :visible="showDrawer"
        direction="ltr"
        :show-close="false"
        size="800"
        :withHeader="false"
        @close="handleDisplayDrawer(false)"
      >
        <Menu mode="vertical" :handleSelect="handleSelect" />
      </el-drawer>
      <el-main>
        <router-view />
      </el-main>
      <Footer v-show="isShow" />
    </el-container>
  </div>
</template>

<script>
import device from 'current-device'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'

export default {
  components: {
    Menu,
    Footer,
    Logo
  },
  data() {
    return {
      defaultActive: '/',
      isShow: true,
      isMobile: device.mobile(),
      showDrawer: false
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
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 auto;
  // width: 80%;
  padding: 0;
  //background-color: #fff;
  height: 70px !important;
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
        width: 100%;
      }
    }
  }
}
</style>
