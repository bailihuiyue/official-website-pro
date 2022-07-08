<template>
  <div class="adminVideoBackground">
    <ChangeLocationAdmin />
    <br />
    <br />
    <br />
    <el-form :model="formData" :loding="loading">
      <el-form-item label="标题" :label-width="formLabelWidth">
        <el-input v-model="formData.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input v-model="formData.desc" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="视频墙视频上传" :label-width="formLabelWidth">
        <el-upload
          class="upload-demo"
          style="display:inline-block"
          :action="`${$baseURL}api/upload/uploadfile`"
          :show-file-list="false"
          :on-success="(response, file, fileList) => onUploadFileSuccess(response, file, fileList, 'videoBg')"
          :headers="{token:$token}"
          :before-upload="onBeginUpload"
        >
          <el-button :loading="loading" size="small" type="primary">点击上传</el-button>
        </el-upload>
        <a
          style="margin-left:30px"
          target="_blank"
          :href="$videoURL+formData.videoBg"
          v-if="formData.videoBg"
        >点击查看</a>
        <span style="margin-left:30px">文件名: {{formData.videoBg}}</span>
      </el-form-item>
      <el-form-item label="弹出视频内容上传" :label-width="formLabelWidth">
        <el-upload
          class="upload-demo"
          style="display:inline-block"
          :action="`${$baseURL}api/upload/uploadfile`"
          :show-file-list="false"
          :on-success="(response, file, fileList) => onUploadFileSuccess(response, file, fileList, 'videoPop')"
          :before-upload="onBeginUpload"
          :headers="{token:$token}"
        >
          <el-button :loading="loading" size="small" type="primary">点击上传</el-button>
        </el-upload>
        <a
          style="margin-left:30px"
          target="_blank"
          :href="$videoURL+formData.videoPop"
          v-if="formData.videoPop"
        >点击查看</a>
        <span style="margin-left:30px">文件名: {{formData.videoPop}}</span>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth">
        <br />
        <el-button type="primary" @click="onModify()">保 存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getVideoBackground, modifyVideoBackground } from './service'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'

export default {
  name: 'adminVideoBackground',
  components: {
    ChangeLocationAdmin
  },
  data() {
    return {
      formData: {
        id: undefined,
        title: undefined,
        desc: undefined,
        videoBg: undefined,
        videoPop: undefined
      },
      formLabelWidth: '160px',
      loading: false
    }
  },
  created() {
    this.getVideoBackgroundApi()
  },
  methods: {
    getVideoBackgroundApi() {
      this.loading = true
      getVideoBackground().then((res) => {
        if (res) {
          this.formData = res
        }
        this.loading = false
      })
    },
    onBeginUpload() {
      this.loading = true
      return true
    },
    onUploadFileSuccess(response, file, fileList, type) {
      if (response) {
        this.formData[type] = response.data
        this.$message.success('上传成功!')
      } else {
        this.$message({
          message: response.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
      this.loading = false
    },
    onModify() {
      modifyVideoBackground(this.formData).then((res) => {
        if (res) {
          this.$message.success('保存成功!')
        }
      })
    }
  }
}
</script>
<style lang="scss">
.adminVideoBackground {
}
</style>