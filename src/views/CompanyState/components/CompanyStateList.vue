<template>
  <div class="companyStateList">
    <div :style="{minHeight:isMobile?'':'500px'}">
      <el-row :gutter="30">
        <el-col :span="isMobile?24:12" v-for="l in list" :key="l.id">
          <el-card class="companyStateItem" @click.native="jumpTo(l.id)">
            <div slot="header" class="clearfix">
              <img style="width:100%" :src="$imgServer+l.img" />
            </div>
            <span class="title">{{l.title}}</span>
            <div class="desc">{{l.desc}}</div>
          </el-card>
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
import { getCompanyStateList } from '../service'
import device from 'current-device'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  props: ['type', 'searchTxt'],
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 6,
      total: 0,
      isMobile: device.mobile()
    }
  },
  created() {
    this.getCompanyStateListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type
    })
  },
  methods: {
    getCompanyStateListApi({ currentPage, pageSize, type, searchTxt }) {
      getCompanyStateList({
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
      this.getCompanyStateListApi({
        currentPage,
        pageSize: this.pageSize,
        type: this.type
      })
    },
    jumpTo(id) {
      this.$router.push({
        path: '/companyStateDetail',
        query: {
          id
        }
      })
    }
  },
  watch: {
    type(val) {
      this.getCompanyStateListApi({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        type: val
      })
    },
    searchTxt(val) {
      if (val) {
        this.getCompanyStateListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          searchTxt: val
        })
      } else {
        this.getCompanyStateListApi({
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
@import '~@/styles/color.scss';

.companyStateList {
  margin-top: 20px;
  width: $contentWidth;
  margin: 0 auto;
  .el-row {
    margin-top: 40px;
    .companyStateItem {
      margin-top: 20px;
      // border-color: transparent;
      // background-color: $blackBackgroundColor;
      // color: $blackFontColor;
      cursor: pointer;
      &:hover {
        // border-color: $blackBorderColor;
        border-color: rgba(0, 0, 0, 0.2);
      }
      .el-card__header {
        // border-bottom-color: $blackBorderColor;
      }
      .title {
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 16px;
        // color: $themeColor;
      }
      .desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 14px;
      }
    }
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
    &:hover {
      color: $themeColor !important;
      // border: 1px solid rgba(255,255,255,0.5);
    }
  }
}
.mobile {
  .companyStateList {
    .el-row {
      margin-top: 0px;
    }
  }
}
</style>