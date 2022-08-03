<template>
  <div class="faqList">
    <div :style="{minHeight:isMobile?'':'340px'}">
      <el-row :gutter="30">
        <el-col :span="isMobile?24:6" v-for="l in list" :key="l.id">
          <el-card class="faqItem" @click.native="jumpTo(l.id)">
            <div slot="header" class="clearfix">
              <span class="title" :class="'title'+$lang">{{l.title}}</span>
            </div>
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
import { getFAQList } from '../service'
import device from 'current-device'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  props: ['type', 'searchTxt'],
  data() {
    return {
      list: [],
      currentPage: 1,
      pageSize: 8,
      total: 0,
      isMobile: device.mobile(),
      loading: true
    }
  },
  created() {
    this.getFAQListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type,
      searchTxt: this.searchTxt || undefined
    })
  },
  methods: {
    getFAQListApi({ currentPage, pageSize, type, searchTxt }) {
      this.loading = true
      getFAQList({
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
        this.loading = false
      })
    },
    onCurrentChange(currentPage) {
      this.getFAQListApi({
        currentPage,
        pageSize: this.pageSize,
        type: this.type
      })
    },
    jumpTo(id) {
      this.$router.push({
        path: '/faqDetail',
        query: {
          id
        }
      })
    }
  },
  watch: {
    type(val) {
      this.getFAQListApi({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        type: val
      })
    },
    searchTxt(val) {
      if (val) {
        this.getFAQListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          searchTxt: val
        })
      } else {
        this.getFAQListApi({
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

.faqList {
  margin-top: 20px;
  width: $contentWidth;
  margin: 0 auto;
  .el-row {
    margin-top: 40px;
    .faqItem {
      margin-top: 20px;
      height: 150px;
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
        word-break: break-word;
        // height: 35px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 16px;
        color: $themeColor;
      }
      .titlecn {
        height: 42px;
      }
      .titleen {
        height: 38px;
      }
      .desc {
        // height: 35px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        font-size: 14px;
        // height: 40px;
        word-break: break-word;
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
  .faqList {
    .el-row {
      margin-top: 0px;
      .faqItem {
        .title {
          height: auto;
        }
      }
    }
  }
}
</style>