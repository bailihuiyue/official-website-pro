<template>
  <div class="recruitment">
    <ButtonGroup
      :btns="recruitmentTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="0"
    />
    <div
      v-for="r in recruitmentTypes"
      :class="`content ${r.type}`"
      v-if="type===r.type"
    >{{recruitmentData[type]}}</div>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { recruitmentTypes } from '@/utils/config'
import { getRecruitmentList } from './service'

export default {
  name: 'recruitment',
  components: {
    ButtonGroup
  },
  data() {
    return {
      recruitmentTypes,
      recruitmentData: {},
      type: recruitmentTypes[0].type
    }
  },
  created() {
    getRecruitmentList(this.$lang).then((res) => (this.recruitmentData = res))
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.type
    }
  }
}
</script>
<style lang="scss">
.recruitment {
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