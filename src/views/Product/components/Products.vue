<template>
  <div class="Products">
    <el-row :gutter="30">
      <el-col :span="12" v-for="l in list" :key="l.id">
        <div class="wrap">
          <div @click="jumpTo(l.id)">
            <el-image :src="$imgServer+l.img" style="width:100%;height:100%" />
            <div class="title">{{l.title}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <Pagination
      @onCurrentChange="onCurrentChange"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :isMobile="isMobile"
    />
  </div>
</template>
<script>
import { getProductList } from '../service'
import Pagination from '@/components/Pagination'

export default {
  props: ['isMobile', 'type', 'searchTxt'],
  components: {
    Pagination
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 6,
      total: 0
    }
  },
  created() {
    this.getProductListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type,
      searchTxt: this.searchTxt || undefined
    })
  },
  methods: {
    getProductListApi({ currentPage, pageSize, type, searchTxt }) {
      getProductList({
        lang: this.$lang,
        currentPage,
        pageSize,
        type: searchTxt ? undefined : type,
        searchTxt
      }).then((res) => {
        this.list = res.list
        this.currentPage = 0
        this.$nextTick(() => (this.currentPage = res.currentPage))
        this.pageSize = res.pageSize
        this.total = res.total
      })
    },
    onCurrentChange(currentPage) {
      this.getProductListApi({
        currentPage,
        pageSize: this.pageSize,
        type: this.type
      })
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
      this.getProductListApi({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        type: val
      })
    },
    searchTxt(val) {
      if (val) {
        this.getProductListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          searchTxt: val
        })
      } else {
        this.getProductListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          type: this.type
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../../styles/color.scss';

.Products {
  margin-top: 20px;
  .wrap {
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    // color: #e5e5e5;
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