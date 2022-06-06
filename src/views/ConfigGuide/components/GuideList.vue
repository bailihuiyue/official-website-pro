<template>
  <div class="GuideList">
    <el-row :gutter="30">
      <el-col :span="isMoblie?24:12" v-for="l in list" :key="l.id">
        <span class="wrap">
          <div @click="jumpTo(l.id)">
            <i class="el-icon-arrow-right"></i>
            <span class="title">{{l.title}}</span>
          </div>
        </span>
      </el-col>
    </el-row>
    <Pagination
      @onCurrentChange="onCurrentChange"
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      :isMoblie="isMoblie"
    />
  </div>
</template>
<script>
import { getConfigGuideList } from '../service'
import device from 'current-device'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  props: ['type', 'searchTxt'],
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 12,
      total: 0,
      isMoblie: device.mobile()
    }
  },
  created() {
    this.getConfigGuideListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type
    })
  },
  methods: {
    getConfigGuideListApi({ currentPage, pageSize, type, searchTxt }) {
      getConfigGuideList({
        lang: this.$lang,
        currentPage,
        pageSize,
        type,
        searchTxt
      }).then((res) => {
        this.list = res.list
        this.currentPage = 0
        // bug fix
        this.$nextTick(() => (this.currentPage = res.currentPage))
        this.pageSize = res.pageSize
        this.total = res.total
      })
    },
    onCurrentChange(currentPage) {
      this.getConfigGuideListApi({
        currentPage,
        pageSize: this.pageSize,
        type: this.type
      })
    },
    jumpTo(id) {
      this.$router.push({
        path: '/configGuideDetail',
        query: {
          id
        }
      })
    }
  },
  watch: {
    type(val) {
      this.getConfigGuideListApi({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        type: val
      })
    },
    searchTxt(val) {
      if (val) {
        this.getConfigGuideListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          searchTxt: val
        })
      } else {
        this.getConfigGuideListApi({
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

.GuideList {
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
  .el-row {
    margin-top: 40px;
  }
  .wrap {
    // margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    color: #e5e5e5;
    text-align: left;
    i,
    span {
      display: inline-block;
    }
    i {
      margin-right: 10px;
      font-weight: bold;
      color: #0094ff;
    }
    .title {
      font-size: 16px;
      margin: 10px 0;
    }
    &:hover {
      color: $themeColor !important;
      // border: 1px solid rgba(255,255,255,0.5);
    }
  }
}
</style>