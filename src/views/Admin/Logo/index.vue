<template>
  <div class="logoAdmin">
    <el-alert title="请上传Logo图片" type="info" style="margin-bottom:10px" />
    <el-upload
      class="avatar-uploader"
      :action="`${$imgserver}api/upload/uploadImage`"
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
  },
  methods: {
    handleSuccess(res) {
      if (res) {
        this.logo = res
        this.$message.success('上传成功,请刷新页面!')
      } else {
        this.$message.error(res.resultMsg || '上传图片失败,请重试!')
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