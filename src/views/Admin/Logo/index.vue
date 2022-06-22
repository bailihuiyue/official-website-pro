<template>
  <div class="logoAdmin">
    <el-alert title="请上传Logo图片" type="info" style="margin-bottom:10px" />
    <el-button style="margin:15px 0" type="primary" @click="onSaveLogo">保存</el-button>
    <el-upload
      class="avatar-uploader"
      :action="`${$baseURL}api/upload/uploadImage`"
      :show-file-list="false"
      :on-success="handleSuccess"
      :headers="{token:$token}"
    >
      <div class="avatar">
        <img v-if="logo.img" :src="$imgServer+logo.img" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </el-upload>
  </div>
</template>
<script>
import { getLogo, updateLogo } from './service'

export default {
  props: ['isMobile', 'handleDisplayDrawer'],
  data() {
    return {
      logo: {
        img: ''
      }
    }
  },
  created() {
    getLogo().then((res) => (this.logo.img = res))
  },
  methods: {
    handleSuccess(res) {
      if (res) {
        this.logo.img = res.data
        this.$message.success('上传成功')
      } else {
        this.$message.error(res.resultMsg || '上传图片失败,请重试!')
      }
    },
    onSaveLogo() {
      updateLogo(this.logo).then((res) => {
        if (res) {
          this.$message.success('保存成功')
        }
      })
    }
  }
}
</script>
<style lang="scss">
.logoAdmin {
  .avatar-uploader {
    .avatar {
      display: flex;
      // align-items: center;
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