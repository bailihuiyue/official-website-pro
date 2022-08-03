<template>
  <div class="RecruitmentAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的招聘类型:</span>
      <el-radio-group v-model="selectedRecruitmentType">
        <el-radio
          :label="r.typeNo"
          v-for="r in recruitmentTypes"
          :key="r.typeNo"
        >{{r.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="onUpdate()" style="margin:20px 0;display:block">保存</el-button>
    <Tinymce :content="data.content" :height="500" :menubar="false" ref="recruitmentTiny" />
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import { getRecruitment, modifyRecruitment } from './service'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'RecruitmentAdmin',
  components: {
    Tinymce,
    ChangeLocationAdmin
  },
  data() {
    return {
      recruitmentTypes: [],
      selectedRecruitmentType: 0,
      loading: true,
      data: {}
    }
  },
  created() {
    getClassify(classifyTypesEnum.recruitment).then((res) => {
      this.recruitmentTypes = res
      this.typeNo = res[0].typeNo
      this.selectedRecruitmentType = res[0].typeNo
      this.getRecruitmentApi(res[0].typeNo)
    })
  },
  watch: {
    selectedRecruitmentType(val) {
      this.$refs.recruitmentTiny.setContent('')
      this.getRecruitmentApi(val)
    }
  },
  methods: {
    getRecruitmentApi(typeNo) {
      this.loading = true
      getRecruitment(typeNo, this.$adminLang).then((res) => {
        if (!res) {
          this.data = { id: undefined, content: '' }
        } else {
          this.data = res
          this.$refs.recruitmentTiny.setContent(res.content)
        }
        this.loading = false
      })
    },
    onUpdate() {
      this.loading = true
      this.data.content = this.$refs.recruitmentTiny.getContent()
      modifyRecruitment(this.$adminLang, {
        ...this.data,
        type: this.selectedRecruitmentType
      })
        .then((response) => {
          this.loading = false
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
          this.getRecruitmentApi(this.selectedRecruitmentType)
        })
        .catch((e) => {
          this.$message({
            message: '网络或程序异常！' + e,
            type: 'error'
          })
        })
    }
  }
}
</script>
<style lang="scss">
.RecruitmentAdmin {
}
</style>