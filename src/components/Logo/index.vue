<template>
  <div class="logo">
    <i class="el-icon-s-unfold" v-if="isMobile" @click="handleDisplayDrawer(true)"></i>
    <div style="flex:1;overflow:hidden;width: 300px;height: 70px;padding:5px 0">
      <img :src="$imgserver+logo" alt />
    </div>
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
  max-width: 350px;
  max-height: 70px;
  display: flex;
  align-items: center;
  img {
    margin-top: 3px;
    max-height: calc(100% - 6px);
    max-width: calc(100% - 6px);
  }
  i {
    font-size: 30px;
    margin: 5px;
    color: rgba(0, 0, 0, 0.35);
    line-height: 50px;
  }
}
</style>