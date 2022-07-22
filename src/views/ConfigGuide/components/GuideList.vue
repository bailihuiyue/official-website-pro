<template>
  <div class="GuideList">
    <div :style="{minHeight:isMobile?'':'330px'}">
      <el-row :gutter="30">
        <el-col :span="isMobile?24:12" v-for="l in list" :key="l.id">
          <span class="wrap">
            <i class="el-icon-arrow-right"></i>
            <span class="title" @click="jumpTo(l.id)">{{l.title}}</span>
          </span>
        </el-col>
      </el-row>
    </div>
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
      isMobile: device.mobile()
    }
  },
  created() {
    this.getConfigGuideListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type,
      searchTxt: this.searchTxt || undefined
    })
  },
  methods: {
    getConfigGuideListApi({ currentPage, pageSize, type, searchTxt }) {
      getConfigGuideList({
        lang: this.$lang,
        currentPage,
        pageSize,
        type: searchTxt ? undefined : type,
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
  width: $contentWidth;
  margin: 0 auto;
  .el-row {
    margin-top: 40px;
  }
  .wrap {
    // margin-bottom: 20px;
    text-align: center;
    // color: #e5e5e5;
    text-align: left;

    height: 20px;
    margin-top: 35px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
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
      display: inline;
    }
    .title:hover {
      color: $themeColor !important;
      cursor: pointer;
      // border: 1px solid rgba(255,255,255,0.5);
    }
  }
}
.mobile {
  .GuideList {
    .el-row {
      margin-top: 0px;
    }
  }
}
</style>