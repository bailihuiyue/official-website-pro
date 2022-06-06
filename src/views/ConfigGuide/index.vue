<template>
  <div class="configGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="configGuide" type="horizontal" @click="onChangeTypes" v-show="!searchTxt" />
    <GuideList :searchTxt="searchTxt" :type="type" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { configGuideTypes } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar.vue'
import GuideList from './components/GuideList'

export default {
  name: 'configGuide',
  components: {
    ButtonGroup,
    SeatchBar,
    GuideList
  },
  data() {
    return {
      configGuide: configGuideTypes,
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
.configGuide {
  .ButtonGroup {
    .el-row {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      text-align: left;
      .isPC:first-child {
        margin-left: 0;
        padding-left: 0;
      }
    }
  }
}
</style>