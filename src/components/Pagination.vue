<template>
  <div class="Pagination">
    <el-pagination
      style="text-align: center"
      @current-change="onCurrentChange"
      :current-page.sync="currentPageData"
      :page-size="pageSize"
      :layout="isMobile?'total, prev, next':'total, prev, pager, next'"
      :total="total"
      background
      :small="isMobile"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ['pageSize', 'isMobile', 'total', 'currentPage'],
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

.Pagination {
  margin-top: 100px;
  margin-bottom: 20px;
  .active {
    background-color: $themeColor !important;
  }
  // .el-pagination.is-background .btn-next,
  // .el-pagination.is-background .btn-prev,
  // .el-pagination.is-background .el-pager li {
  //   background-color: rgb(30, 32, 34);
  // }
  // .el-pagination__total {
  //   color: rgb(169, 162, 151);
  // }
}
.mobile{
  .Pagination{
    margin-top: 30px;
  }
}
</style>