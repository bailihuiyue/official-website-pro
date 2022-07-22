<template>
  <div class="faqGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="faqTypes" type="vertical" @click="onChangeTypes" v-if="!searchTxt" />
    <FAQList :searchTxt="searchTxt" :type="type" v-if="showList" />
    <SubmitQuestion @submit="onSubmit" :isFAQ="true" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import SeatchBar from '@/components/SeatchBar'
import FAQList from './components/FAQList'
import SubmitQuestion from '@/components/SubmitQuestion'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'faqGuide',
  components: {
    ButtonGroup,
    SeatchBar,
    FAQList,
    SubmitQuestion
  },
  data() {
    return {
      faqTypes: [],
      searchTxt: '',
      type: '',
      showList: true
    }
  },
  created() {
    getClassify(classifyTypesEnum.faq).then((res) => {
      this.faqTypes = res
    })
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
      this.type = ''
    },
    onChangeTypes(data) {
      this.type = data.typeNo
    },
    onSubmit() {}
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

.faqGuide {
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