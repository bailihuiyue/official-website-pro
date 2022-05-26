<template>
  <router-link to="/">
    <div class="logo">
      <i v-if="isMobile" @click="handleDisplayDrawer(true)">
        <img id="menuBtn" src="/menu.svg" />
      </i>
      <div class="imgWrap">
        <img :src="$imgserver+logo" :class="isMobile?'mobileLogo':'pcLogo'" />
      </div>
    </div>
  </router-link>
</template>
<script>
import { getLogo } from './service'

export default {
  props: ['isMobile', 'handleDisplayDrawer'],
  data() {
    return {
      logo: ''
    }
  },
  created() {
    getLogo().then((res) => (this.logo = res))
  }
}
</script>
<style lang="scss">
.logo {
  max-width: 350px;
  max-height: 60px;
  display: flex;
  align-items: center;
  .imgWrap {
    text-align: center;
    flex: 1;
    overflow: hidden;
    // width: 300px;
    height: 60px;
    // padding: 5px 0;
    display: flex;
    align-items: center;
  }
  #menuBtn {
    width: 30px;
    margin-left: 5px;
  }
  .pcLogo,
  .mobileLogo {
    // margin-top: 5px;
    max-height: calc(100% - 10px);
    max-width: calc(100% - 10px);
  }
  i {
    font-size: 30px;
    margin: 5px;
    color: rgba(0, 0, 0, 0.35);
    line-height: 50px;
  }
}
.mobile {
  .logo {
    .imgWrap {
      justify-content: center;
    }
  }
}
</style>