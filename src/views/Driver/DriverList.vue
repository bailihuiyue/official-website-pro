<template>
  <div class="driverList">
    <div :style="{minHeight:isMobile?'':'480px'}">
      <el-row :gutter="30">
        <el-col :span="isMobile?24:12" v-for="l in list" :key="l.id">
          <div class="driverItem">
            <div class="txt">
              <div class="icon">
                <img src="imgs/download.png" />
              </div>
              <div class="words">
                <div class="title">{{l.title}}</div>
                <div class="desc" :title="l.desc">{{l.desc}}</div>
              </div>
            </div>
            <div class="download">
              <el-link
                type="primary"
                :href="$baseURL+l.driverUrl"
                class="downDriver"
                icon="el-icon-download"
              >{{lang.downDriver[$lang]}}</el-link>
              <el-link
                target="_blank"
                type="primary"
                :href="$baseURL+l.pdfUrl"
                class="downPDF"
                icon="el-icon-download"
              >{{lang.downPDF[$lang]}}</el-link>
            </div>
          </div>
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
import { getDriverList } from './service'
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
      lang: {
        downDriver: {
          cn: '下载驱动',
          en: 'Download Driver'
        },
        downPDF: {
          cn: '下载PDF',
          en: 'Download PDF'
        }
      }
    }
  },
  created() {
    this.getDriverListApi({
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      type: this.type,
      searchTxt: this.searchTxt || undefined
    })
  },
  methods: {
    getDriverListApi({ currentPage, pageSize, type, searchTxt }) {
      getDriverList({
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
      this.getDriverListApi({
        currentPage,
        pageSize: this.pageSize,
        type: this.type
      })
    }
  },
  watch: {
    type(val) {
      this.getDriverListApi({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        type: val
      })
    },
    searchTxt(val) {
      if (val) {
        this.getDriverListApi({
          currentPage: this.currentPage,
          pageSize: this.pageSize,
          searchTxt: val
        })
      } else {
        this.getDriverListApi({
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

.driverList {
  margin-top: 20px;
  width: $contentWidth;
  margin: 0 auto;
  .el-row {
    margin-top: 40px;
    .driverItem {
      margin-top: 20px;
      border: 2px solid transparent;
      background-color: rgba(0, 0, 0, 0.02);
      // color: $blackFontColor;
      padding: 10px;
      border-radius: 5px;
      .txt {
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon {
          width: 45px;
          height: 40px;
          margin: 0 10px;
          flex: 0 0 45px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .words {
          flex: 1;
          .title {
            height: 22px;
            font-size: 16px;
            color: $themeColor;
            margin-bottom: 5px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            color: $themeColor;
          }
          .desc {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            word-break: break-all;
            height: 20px;
          }
        }
      }
      &:hover {
        // border-color: $blackBorderColor;
      }
      .el-card__header {
        // border-bottom-color: $blackBorderColor;
      }
      .download {
        margin-left: 63px;
        a {
          margin-right: 20px;
          margin-top: 10px;
        }
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
  .driverList {
    .el-row {
      margin-top: 0px;
      .driverItem {
        .txt {
          .words {
            .title {
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>