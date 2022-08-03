<template>
  <div class="configGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup
      :btns="configGuide"
      type="horizontal"
      @click="onChangeTypes"
      v-if="!searchTxt"
      :extraData="extraData"
    />
    <GuideList :searchTxt="searchTxt" :type="type" v-if="showList" />
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
      type: '',
      extraData: {
        cn: '了解更多',
        en: 'Learn More'
      },
      showList: true
    }
  },
  created() {
    // 从详情返回时保存住当前点击过的分类
    // const type = sessionStorage.getItem(this.$route.path + 'type')
    // sessionStorage.removeItem(this.$route.path + 'type')
    // this.type = type

    getClassify(classifyTypesEnum.configGuide).then((res) => {
      this.configGuide = res
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

.configGuide {
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