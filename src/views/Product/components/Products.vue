<template>
  <div class="Products">
    <el-row :gutter="30">
      <el-col :span="12" v-for="l in list" :key="l.id">
        <div class="wrap">
          <div @click="jumpTo(l.id)">
            <el-image :src="l.img" style="width:100%;height:100%" />
            <div class="title">{{l.title}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-pagination
      style="text-align: center;margin:20px 0"
      @current-change="onCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :layout="isMoblie?'total, prev, next':'total, prev, pager, next'"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>
<script>
import { getProductList } from '../service'
export default {
  props: ['isMoblie', 'type'],
  data() {
    return {
      list: [],
      currentPage: 0,
      pageSize: 0,
      total: 0
    }
  },
  created() {
    this.getProductListApi(this.currentPage, this.pageSize)
  },
  methods: {
    getProductListApi(currentPage, pageSize, type) {
      getProductList(this.$lang, currentPage, pageSize, type).then((res) => {
        this.list = res.list
        this.currentPage = res.currentPage
        this.pageSize = res.pageSize
        this.total = res.total
      })
    },
    onCurrentChange(currentPage) {
      this.getProductListApi(currentPage, this.pageSize, this.type)
    },
    jumpTo(id) {
      this.$router.push({
        path: '/productDetail',
        query: {
          id
        }
      })
    }
  },
  watch: {
    type(val) {
      this.getProductListApi(this.currentPage, this.pageSize, val)
    },
    searchTxt(val) {
      
    }
  }
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';

.Products {
  .wrap {
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    color: #e5e5e5;
    .title {
      font-size: 18px;
      margin: 15px 0;
    }
    &:hover {
      color: $themeColor !important;
      // border: 1px solid rgba(255,255,255,0.5);
    }
  }
}
</style>