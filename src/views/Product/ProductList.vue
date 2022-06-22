<template>
  <div class="ProductList">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup
      :btns="productTypes"
      type="vertical"
      @click="onChangeTypes"
      class="productType"
      v-if="!searchTxt"
    />
    <Products :isMobile="isMobile" :type="type" :searchTxt="searchTxt" />
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
      searchTxt: ''
    }
  },
  created() {
    getProductType().then((res) => {
      res.forEach((item) => {
        item.img = this.$imgServer + item.img
      })
      this.productTypes = res
    })
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
.ProductList {
  margin: 20px auto;
  width: 80%;
  .el-tabs__item {
    line-height: unset;
    height: 135px;
  }
  .title {
    margin-bottom: 15px;
    text-align: center;
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