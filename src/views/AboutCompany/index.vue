<template>
  <div class="aboutCompany">
    <ButtonGroup
      :btns="aboutCompanyTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="0"
    />
    <div class="content aboutUs" v-if="type==='aboutUs'">{{aboutCompanyData.aboutUs}}</div>
    <div class="content investmentPolicy" v-if="type==='investmentPolicy'">{{aboutCompanyData.investmentPolicy}}</div>
    <div class="content teamPresence" v-if="type==='teamPresence'">{{aboutCompanyData.teamPresence}}</div>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { aboutCompanyTypes } from '@/utils/config'
import { getAboutCompanyList } from './service'

export default {
  name: 'aboutCompany',
  components: {
    ButtonGroup
  },
  data() {
    return {
      aboutCompanyTypes,
      aboutCompanyData: {},
      type: 'aboutUs'
    }
  },
  created() {
    getAboutCompanyList(this.$lang).then((res) => (this.aboutCompanyData = res))
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.id
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