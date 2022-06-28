<template>
  <div class="Breadcrumb" v-if="breadcrumbList[this.$route.path]">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="b.path?{ path:b.path }:null"
        v-for="b in breadcrumbList[this.$route.path]"
        :key="b.path"
      >{{b.title[$lang]}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { breadcrumbList } from './breadcrumbConfig'

export default {
  props: ['pageName'],
  data() {
    return {
      breadcrumbList
    }
  },
  created() {}
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.Breadcrumb {
  width: $contentWidth;
  margin: 10px auto;
  background-color: #e9ecef;
  border-radius: 5px;
  padding: 10px 0;
  height: 40px;
  .el-breadcrumb{
    line-height: 40px;
    font-size: 14px;
    padding: 0 20px;
  }
}
</style>