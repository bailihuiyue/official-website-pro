<template>
  <div class="appDownload">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="appDownloadTypes" type="vertical" @click="onChangeTypes" v-if="!searchTxt" />
    <AppDownloadList :searchTxt="searchTxt" :type="type" v-if="showList" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import SeatchBar from '@/components/SeatchBar.vue'
import AppDownloadList from './components/AppDownloadList'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'appDownload',
  components: {
    ButtonGroup,
    SeatchBar,
    AppDownloadList
  },
  data() {
    return {
      appDownloadTypes: [],
      searchTxt: '',
      type: '',
      showList: true
    }
  },
  created() {
    getClassify(classifyTypesEnum.app).then((res) => {
      this.appDownloadTypes = res
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
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.appDownload {
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