<template>
  <div class="RecruitmentAdmin">
    <ChangeLocationAdmin />
    <el-button type="primary" @click="onUpdate()" style="margin:20px 0;display:block">保存</el-button>
    <el-tabs :value="recruitmentTypes[0].type">
      <el-tab-pane v-for="r in recruitmentTypes" :key="r.type" :label="r.title.cn" :name="r.type">
        <Tinymce :content="data[r.type]" :height="500" :menubar="false" :ref="`${r.type}Tiny`" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import { getRecruitmentList, modifyRecruitment } from './service'
import { recruitmentTypes } from '@/utils/config'

export default {
  name: 'RecruitmentAdmin',
  components: {
    Tinymce,
    ChangeLocationAdmin
  },
  data() {
    return {
      recruitmentTypes,
      loading: true,
      data: {}
    }
  },
  created() {
    this.getRecruitmentApi()
  },
  methods: {
    getRecruitmentApi() {
      this.loading = true
      getRecruitmentList(this.$adminLang).then((res) => {
        this.data = res
        this.loading = false
      })
    },
    onUpdate() {
      this.loading = true
      recruitmentTypes.forEach((item) => {
        this.data[item.type] = this.$refs[item.type + 'Tiny'][0].getContent()
      })
      modifyRecruitment(this.$adminLang, this.data)
        .then((response) => {
          this.loading = false
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
          this.getRecruitmentApi()
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