<template>
  <div class="companyState">
    <ButtonGroup
      :btns="companyStateTypes"
      type="vertical"
      @click="onChangeTypes"
      defaultClickedBtn="0"
      :useLocalImg="true"
    />
    <CompanyStateList :type="type" v-if="showList" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { companyStateTypes } from '@/utils/config'
import CompanyStateList from './components/CompanyStateList'

export default {
  name: 'companyState',
  components: {
    ButtonGroup,
    CompanyStateList
  },
  data() {
    return {
      companyStateTypes,
      type: 0,
      showList: true
    }
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.id
    },
    onSubmit(data) {}
  },
  watch: {
    type(val) {
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

.companyState {
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