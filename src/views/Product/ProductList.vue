<template>
  <div class="ProductList">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup
      :btns="productTypes"
      type="vertical"
      @click="onChangeTypes"
      class="productType"
      v-if="!searchTxt"
      :defaultClickedBtn="defaultClickedBtn"
    />
    <Products :isMobile="isMobile" :type="type" :searchTxt="searchTxt"  v-if="showList"/>
  </div>
</template>
<script>
import SeatchBar from '@/components/SeatchBar'
import Products from './components/Products'
import { getProductType } from './service'
import device from 'current-device'
import ButtonGroup from '@/components/ButtonGroup'

export default {
  components: { SeatchBar, Products, ButtonGroup },
  data() {
    return {
      productTypes: [],
      isMobile: device.mobile(),
      type: '-1',
      searchTxt: '',
      defaultClickedBtn: null,
      showList: true
    }
  },
  created() {
    getProductType().then((res) => {
      this.productTypes = res

      const id = this.$route.query.id
      if (id) {
        this.defaultClickedBtn = id
        res.forEach((item) => {
          if (item.id === id) {
            this.type = item.id
          }
        })
      }

      const searchTxt = this.$route.query.searchTxt
      if (searchTxt) {
        this.onSearch(searchTxt)
      }
    })
  },
  watch: {
    '$route.query.id': {
      handler: function (val) {
        let hasSetType = false
        this.defaultClickedBtn = val
        this.productTypes.forEach((item) => {
          if (item.id + '' === val) {
            this.type = item.id
            hasSetType = true
          }
        })
        if (!hasSetType) {
          this.type = '-1'
        }
      },
      deep: true
      // immediate: true
    },
    type() {
      this.showList = false
      this.$nextTick(() => {
        this.showList = true
      })
    },
    searchTxt() {
      this.showList = false
      this.$nextTick(() => {
        this.showList = true
      })
    }
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
      this.type = '-1'
    },
    onChangeTypes(data) {
      this.type = data.id
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.ProductList {
  margin: 20px auto;
  width: $contentWidth;
  .el-tabs__item {
    line-height: unset;
    height: 135px;
  }
  .title {
    margin-bottom: 15px;
    text-align: center;
    height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .productType {
    margin-top: 35px;
  }
}
.mobile {
  .ProductList {
    .el-tabs__item {
      height: 35px !important;
    }
  }
}
</style>