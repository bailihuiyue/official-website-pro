<template>
  <div class="logo" :style="{justifyContent:isMobile?'center':''}">
    <router-link to="/">
      <div class="imgWrap">
        <img :src="$imgServer+logo" :class="isMobile?'mobileLogo':'pcLogo'" v-if="logo" />
      </div>
    </router-link>
  </div>
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
  margin-top: 15px;
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
  // #menuBtn {
  //   width: 20px;
  //   margin-left: 5px;
  // }
  .pcLogo,
  .mobileLogo {
    // margin-top: 5px;
    max-height: calc(100% - 10px);
    max-width: calc(100% - 10px);
  }
  // i {
  //   font-size: 30px;
  //   margin: 5px;
  //   color: rgba(0, 0, 0, 0.35);
  //   line-height: 50px;
  // }
}
.mobile {
  .logo {
    margin-top: 0;
    .imgWrap {
      justify-content: center;
    }
  }
}
</style>