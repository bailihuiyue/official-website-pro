<template>
  <div class="AboutCompanyAdmin">
    <ChangeLocationAdmin />
    <el-button type="primary" @click="onUpdate()" style="margin:20px 0;display:block">保存</el-button>
    <el-tabs :value="aboutCompanyTypes[0].type">
      <el-tab-pane v-for="a in aboutCompanyTypes" :key="a.type" :label="a.title.cn" :name="a.type">
        <Tinymce :content="data[a.type]||''" :height="500" :menubar="false" :ref="`${a.type}Tiny`" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import { getAboutCompanyList, modifyAboutCompany } from './service'
import { aboutCompanyTypes } from '@/utils/config'

export default {
  name: 'AboutCompanyAdmin',
  components: {
    Tinymce,
    ChangeLocationAdmin
  },
  data() {
    return {
      aboutCompanyTypes,
      loading: true,
      data: {}
    }
  },
  created() {
    this.getAboutCompanyApi()
  },
  methods: {
    getAboutCompanyApi() {
      this.loading = true
      getAboutCompanyList(this.$adminLang).then((res) => {
        if (!res) {
          this.data.aboutUs = ''
          this.data.investmentPolicy = ''
          this.data.teamPresence = ''
        } else {
          this.data = res
        }
        this.loading = false
      })
    },
    onUpdate() {
      this.loading = true
      aboutCompanyTypes.forEach((item) => {
        this.data[item.type] = this.$refs[item.type + 'Tiny'][0].getContent()
      })
      modifyAboutCompany(this.$adminLang, this.data)
        .then((response) => {
          this.loading = false
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
          this.getAboutCompanyApi()
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
.AboutCompanyAdmin {
}
</style>