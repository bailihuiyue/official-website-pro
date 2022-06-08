<template>
  <div class="appDownload">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="appDownloadTypes" type="vertical" @click="onChangeTypes" v-show="!searchTxt" />
    <AppDownloadList :searchTxt="searchTxt" :type="type" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { appDownloadTypes } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar.vue'
import AppDownloadList from './components/AppDownloadList'

export default {
  name: 'appDownload',
  components: {
    ButtonGroup,
    SeatchBar,
    AppDownloadList
  },
  data() {
    return {
      appDownloadTypes,
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
    }
  }
}
</script>
<style lang="scss">
.appDownload {
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