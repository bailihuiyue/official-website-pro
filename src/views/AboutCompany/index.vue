<template>
  <div class="aboutCompany">
    <ButtonGroup
      :btns="aboutCompanyTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="0"
    />
    <div
      v-for="r in aboutCompanyTypes"
      :class="`content ${r.type}`"
      v-if="type===r.type"
    >{{aboutCompanyData[type]}}</div>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { aboutCompanyTypes } from '@/utils/config'
import { getAboutCompanyList } from './service'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'aboutCompany',
  components: {
    ButtonGroup,
    Breadcrumb
  },
  data() {
    return {
      aboutCompanyTypes,
      aboutCompanyData: {},
      type: aboutCompanyTypes[0].type
    }
  },
  created() {
    getAboutCompanyList(this.$lang).then((res) => (this.aboutCompanyData = res))
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.type
    }
  }
}
</script>
<style lang="scss">
.aboutCompany {
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
  .content {
    width: 80%;
    margin: 20px auto;
  }
}
</style>