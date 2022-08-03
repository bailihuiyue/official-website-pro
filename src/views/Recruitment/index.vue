<template>
  <div class="recruitment">
    <ButtonGroup
      :btns="recruitmentTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="defaultClickedBtn"
    />
    <div class="content" v-html="recruitmentData.content"></div>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { getRecruitment } from './service'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'recruitment',
  components: {
    ButtonGroup
  },
  data() {
    return {
      recruitmentTypes: [],
      recruitmentData: {},
      type: 0,
      defaultClickedBtn: 0
    }
  },
  created() {
    getClassify(classifyTypesEnum.recruitment).then((res) => {
      this.recruitmentTypes = res
      this.type = res[0].typeNo
      this.defaultClickedBtn = res[0].id + ''
      this.getRecruitmentApi(res[0].typeNo)
    })
  },
  methods: {
    onChangeTypes(data) {
      this.getRecruitmentApi(data.typeNo)
    },
    getRecruitmentApi(typeNo) {
      this.loading = true
      getRecruitment(typeNo, this.$lang).then((res) => {
        this.recruitmentData = res
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.recruitment {
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
  .content {
    width: $contentWidth;
    margin: 20px auto;
    img {
      width: 100%;
    }
  }
}
.desktop{
  .recruitment{
    .content {
      width: $smallContentWidth;
    }
  }
}
</style>