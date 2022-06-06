<template>
  <div class="Pagination">
    <el-pagination
      style="text-align: center;margin:20px 0"
      @current-change="onCurrentChange"
      :current-page.sync="currentPageData"
      :page-size="pageSize"
      :layout="isMoblie?'total, prev, next':'total, prev, pager, next'"
      :total="total"
      background
      :small="isMoblie"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ['pageSize', 'isMoblie', 'total', 'currentPage'],
  data() {
    return {
      currentPageData: 0
    }
  },
  methods: {
    onCurrentChange(currentPage) {
      this.$emit('onCurrentChange', currentPage)
    }
  },
  watch: {
    currentPage(val) {
      this.currentPageData = val
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.Pagination{
  .active{
    background-color: $themeColor !important;
  }
}
</style>