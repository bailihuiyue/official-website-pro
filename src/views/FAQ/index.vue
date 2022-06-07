<template>
  <div class="faqGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="faqTypes" type="vertical" @click="onChangeTypes" v-show="!searchTxt" />
    <FAQList :searchTxt="searchTxt" :type="type" />
    <SubmitQuestion @submit="onSubmit" :isFAQ="true"/>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { faqTypes } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar'
import FAQList from './components/FAQList'
import SubmitQuestion from '@/components/SubmitQuestion'

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
      faqTypes,
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
    onSubmit(data) {
    }
  }
}
</script>
<style lang="scss">
.faqGuide {
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