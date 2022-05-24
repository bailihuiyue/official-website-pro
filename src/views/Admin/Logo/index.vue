<template>
  <div class="logoAdmin">
    <el-alert title="请上传Logo图片" type="info" style="margin-bottom:10px" />
    <el-upload
      class="avatar-uploader"
      :action="`${$imgserver}api/Upload/UploadImage`"
      :show-file-list="false"
      :on-success="handleSuccess"
      :headers="{token:$token}"
    >
      <div class="avatar">
        <img v-if="logo" :src="$imgserver+logo" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </el-upload>
  </div>
</template>
<script>
import { getLogo } from './service'

export default {
  props: ['isMobile', 'handleDisplayDrawer'],
  data() {
    return {
      logo: ''
    }
  },
  created() {
    getLogo().then((res) => (this.logo = res))
    console.log(this.$token)
  },
  methods: {
    handleSuccess(res) {
      if (res) {
        this.logo = res
      } else {
        this.$message({
          message: res.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
    }
  }
}
</script>
<style lang="scss">
.logoAdmin {
  .avatar-uploader {
    .avatar {
      display: flex;
      align-items: center;
      width: 500px;
      height: 500px;
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>