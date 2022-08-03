<template>
  <div class="searchProduct">
    <el-popover
      placement="bottom"
      width="258.2px"
      v-model="isShowSearchPop"
      trigger="manual"
      popper-class="searchProductPopperClass"
      :visible-arrow="false"
    >
      <i class="el-icon-search" slot="reference" @click="()=>this.isShowSearchPop=!this.isShowSearchPop"></i>
      <slot
        <el-autocomplete
          class="searchProductInput"
          v-model="searchTxt"
          :fetch-suggestions="querySearch"
          :placeholder="$lang==='cn'?'请输入搜索内容':'Please input search content'"
          :trigger-on-focus="false"
          @select="handleSelect"
          style="width:100%;"
        />
        <!-- backgroundColor:#000 -->
      </slot>
    </el-popover>
  </div>
</template>
<script>
import {getProduct} from './service'
 
export default {
  data() {
    return {
      searchTxt:'',
      isShowSearchPop:false
    }
  },
  methods: {
      querySearch(queryString, cb) {
        getProduct(queryString).then(res=>cb(res))
      },
      handleSelect(item) {
        this.$router.push('/productDetail/'+item.id)
        this.isShowSearchPop=false
      },
  },
}
</script>
<style lang="scss">
.searchProduct {
  width: 40px;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  text-align: left;
}
.searchProductPopperClass{
  padding: 0 !important;
  // background-color: #000;
  .searchProductInput{
    input{
      // background-color: #000;
      border: none;
    }
  }
}
.el-autocomplete-suggestion{
  // background-color: #000 !important;
  .popper__arrow{
    display: none !important;
  }
  li:hover{
    background-color: #202020 !important;
  }
}
</style>