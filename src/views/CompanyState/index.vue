<template>
  <div class="companyState">
    <ButtonGroup
      :btns="companyStateTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="0"
    />
    <CompanyStateList :type="type" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { companyStateTypes } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar'
import CompanyStateList from './components/CompanyStateList'

export default {
  name: 'companyState',
  components: {
    ButtonGroup,
    SeatchBar,
    CompanyStateList
  },
  data() {
    return {
      companyStateTypes,
      type: 0
    }
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.id
    },
    onSubmit(data) {}
  }
}
</script>
<style lang="scss">
.companyState {
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