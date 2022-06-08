<template>
  <div class="Driver">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="driverTypes" type="vertical" @click="onChangeTypes" v-show="!searchTxt" />
    <DriverList :searchTxt="searchTxt" :type="type" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { driverTypes } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar'
import DriverList from './DriverList'

export default {
  name: 'driver',
  components: {
    ButtonGroup,
    SeatchBar,
    DriverList
  },
  data() {
    return {
      driverTypes,
      searchTxt: '',
      type: ''
    }
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
    },
    onChangeTypes(data) {
      this.type = data.id
    },
  }
}
</script>
<style lang="scss">
.Driver {
  .ButtonGroup {
    .el-row {
      width: 80%;
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