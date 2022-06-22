<template>
  <div class="configGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="configGuide" type="horizontal" @click="onChangeTypes" v-show="!searchTxt" />
    <GuideList :searchTxt="searchTxt" :type="type" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import SeatchBar from '@/components/SeatchBar.vue'
import GuideList from './components/GuideList'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'configGuide',
  components: {
    ButtonGroup,
    SeatchBar,
    GuideList
  },
  data() {
    return {
      configGuide: [],
      searchTxt: '',
      type: ''
    }
  },
  created() {
    getClassify(classifyTypesEnum.configGuide).then((res) => {
      this.configGuide = res
    })
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
    },
    onChangeTypes(data) {
      this.type = data.typeNo
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