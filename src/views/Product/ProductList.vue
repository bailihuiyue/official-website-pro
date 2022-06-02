<template>
  <div class="ProductList">
    <SeatchBar @onSearch="onSearch" />
    <div class="productType">
      <el-tabs v-model="type">
        <el-tab-pane label="用户管理" v-for="pt in productTypes" :key="pt.id" :name="pt.id">
          <template slot="label">
            <div>
              <el-image v-if="!isMoblie" style="width: 100px; height: 100px" :src="pt.img" />
              <div class="title">{{ pt[$lang] }}</div>
            </div>
          </template>
          <div class="content"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Products :isMoblie="isMoblie" :type="type" :searchTxt="searchTxt"/>
  </div>
</template>
<script>
import SeatchBar from '@/components/SeatchBar.vue'
import Products from './components/Products'
import { getProductType } from './service'
import device from 'current-device'

export default {
  components: { SeatchBar, Products },
  data() {
    return {
      productTypes: [],
      isMoblie: device.mobile(),
      type: '-1',
      searchTxt: ''
    }
  },
  created() {
    getProductType().then((res) => (this.productTypes = res))
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
      this.type = '-1'
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
    margin-top: 15px;
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