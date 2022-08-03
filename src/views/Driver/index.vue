<template>
  <div class="Driver">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="driverTypes" type="vertical" @click="onChangeTypes" v-if="!searchTxt" />
    <DriverList :searchTxt="searchTxt" :type="type" v-if="showList" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import SeatchBar from '@/components/SeatchBar'
import DriverList from './DriverList'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'driver',
  components: {
    ButtonGroup,
    SeatchBar,
    DriverList
  },
  data() {
    return {
      driverTypes: [],
      searchTxt: '',
      type: '',
      showList: true
    }
  },
  created() {
    getClassify(classifyTypesEnum.driver).then((res) => {
      this.driverTypes = res
    })
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
      this.type = ''
    },
    onChangeTypes(data) {
      this.type = data.typeNo
    }
  },
  watch: {
    type(val) {
      this.showList = false
      this.$nextTick(() => {
        this.showList = true
      })
    },
    searchTxt(val) {
      this.showList = false
      this.$nextTick(() => {
        this.showList = true
      })
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.Driver {
  .ButtonGroup {
    .el-row {
      width: $contentWidth;
      margin-left: auto;
      margin-right: auto;
      // text-align: left;
      .isPC:first-child {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>