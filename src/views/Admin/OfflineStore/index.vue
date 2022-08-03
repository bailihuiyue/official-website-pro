<template>
  <div class="offlineStoreAdmin">
    <ChangeLocationAdmin />
    <el-button type="primary" @click="onUpdate()" style="margin:20px 0;display:block">保存</el-button>
    <Tinymce
      :content="offlineStoreData.content"
      :height="500"
      :menubar="false"
      ref="offlineStoreTiny"
    />
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import { getOfflineStore, modifyOfflineStore } from './service'

export default {
  name: 'offlineStoreAdmin',
  components: {
    Tinymce,
    ChangeLocationAdmin
  },
  data() {
    return {
      offlineStoreData: {}
    }
  },
  created() {
    this.getOfflineStoreApi()
  },
  methods: {
    getOfflineStoreApi() {
      this.loading = true
      getOfflineStore(this.$adminLang).then((res) => {
        if (res) {
          this.offlineStoreData = res
        }
        this.loading = false
      })
    },
    onUpdate() {
      this.loading = true
      modifyOfflineStore(this.$adminLang, {
        ...this.offlineStoreData,
        content: this.$refs.offlineStoreTiny.getContent()
      })
        .then((response) => {
          this.loading = false
          this.$message({
            message: '修改成功！',
            type: 'success'
          })
          this.getOfflineStoreApi()
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
.offlineStoreAdmin {
}
</style>