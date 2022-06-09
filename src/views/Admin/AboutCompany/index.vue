<template>
  <div class="AboutCompanyAdmin">
    <ChangeLocationAdmin />
    <el-button type="primary" @click="onUpdate()" style="margin:20px 0;display:block">保存</el-button>
    <el-tabs value="aboutUs">
      <el-tab-pane v-for="a in aboutCompanyTypes" :key="a.id" :label="a.title.cn" :name="a.id">
        <Tinymce :content="data[a.id]" :height="500" :menubar="false" :ref="`${a.id}Tiny`" />
      </el-tab-pane>
      <!-- <el-tab-pane label="招商政策" name="investmentPolicy">
        <Tinymce
          :content="data.investmentPolicy"
          :height="500"
          :menubar="false"
          ref="investmentPolicyTiny"
        />
      </el-tab-pane>
      <el-tab-pane label="团队风采" name="teamPresence">
        <Tinymce
          :content="data.teamPresence"
          :height="500"
          :menubar="false"
          ref="teamPresenceTiny"
        />
      </el-tab-pane>-->
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
        this.data = res
        this.loading = false
      })
    },
    onUpdate() {
      this.loading = true
      this.data.aboutUs = this.$refs.aboutUsTiny[0].getContent()
      this.data.investmentPolicy = this.$refs.investmentPolicyTiny[0].getContent()
      this.data.teamPresence = this.$refs.teamPresenceTiny[0].getContent()

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