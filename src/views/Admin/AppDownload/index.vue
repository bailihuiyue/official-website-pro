<template>
  <div class="AppDownloadDetailAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的APP类型:</span>
      <el-radio-group v-model="selectedAppDownloadType">
        <el-radio
          :label="a.typeNo"
          v-for="a in appDownloadTypes"
          :key="a.typeNo"
        >{{a.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="addAppDownloadDetail()" style="margin:10px 0">新增APP</el-button>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog
      :close-on-click-modal="false"
      title="APP详情编辑"
      :visible.sync="dialogFormVisible"
      width="80%"
    >
      <el-form :model="formData">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="APP上传" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            style="display:inline-block"
            :action="`${$baseURL}api/upload/uploadfile`"
            :show-file-list="false"
            :on-success="onUploadFileSuccess"
            :headers="{token:$token}"
            :before-upload="onBeginUpload"
          >
            <el-button :loading="loading" size="small" type="primary">点击上传</el-button>
          </el-upload>
          <a
            style="margin-left:30px"
            target="_blank"
            :href="$baseURL+formData.appUrl"
            v-if="formData.appUrl"
          >点击查看</a>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <Tinymce :content="formData.content" :height="500" :menubar="false" ref="downloadTiny" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancelEdit()">取 消</el-button>
        <el-button type="primary" @click="onCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import Tinymce from '@/components/Tinymce'
import {
  getAppDownloadDetail,
  addAppDownloadDetail,
  modifyAppDownloadDetail,
  deleteAppDownloadDetail,
  getAppDownloadList
} from './service'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'appDownloadAdmin',
  components: {
    ChangeLocationAdmin,
    Tinymce
  },
  data() {
    return {
      appDownloadTypes: [],
      selectedAppDownloadType: 0,
      appDownload: {},
      list: [],
      formData: {
        id: undefined,
        title: undefined,
        content: undefined,
        appUrl: undefined
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: false
    }
  },
  created() {
    getClassify(classifyTypesEnum.app).then((res) => {
      this.appDownloadTypes = res
      this.selectedAppDownloadType = res[0].typeNo
      this.getAppDownloadListApi(res[0].typeNo)
    })
  },
  watch: {
    selectedAppDownloadType(val) {
      this.getAppDownloadListApi()
    }
  },
  methods: {
    getAppDownloadListApi(typeNo) {
      getAppDownloadList({
        lang: this.$adminLang,
        currentPage: 1,
        pageSize: 9999,
        type: typeNo || this.selectedAppDownloadType
      }).then((res) => {
        this.list = res.list
        this.loading = false
      })
    },
    onUploadFileSuccess(response) {
      if (response) {
        this.formData.appUrl = response.data
        this.$message.success('上传成功!')
      } else {
        this.$message({
          message: response.resultMsg || '上传文件失败,请重试!',
          type: 'error'
        })
      }
      this.loading = false
    },
    onBeginUpload() {
      this.loading = true
      return true
    },
    addAppDownloadDetail() {
      // 清除数据
      setTimeout(() => this.$refs.downloadTiny.setContent(''), 100)
      this.formData.id = undefined
      this.formData.title = undefined
      this.formData.content = undefined
      this.formData.appUrl = undefined
      this.dialogFormVisible = true
    },
    onCreateOrModify() {
      this.formData.content = this.$refs.downloadTiny.getContent()
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addAppDownloadDetail(this.$adminLang, {
          ...this.formData,
          type: this.selectedAppDownloadType
        })
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.$refs.downloadTiny.setContent('')
            this.dialogFormVisible = false
            this.getAppDownloadListApi()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyAppDownloadDetail(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getAppDownloadListApi()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      }
    },
    //编辑
    onEdit(index, row) {
      //index:第几行   row:这一行的数据
      getAppDownloadDetail(this.$adminLang, row.id).then((res) => {
        this.formData.id = res.id
        this.formData.title = res.title
        this.formData.content = res.content
        this.formData.appUrl = res.appUrl
        this.$refs.downloadTiny.setContent(res.content)
      })
      this.dialogFormVisible = true
    },
    onCancelEdit() {
      this.dialogFormVisible = false
      this.$refs.downloadTiny.setContent('')
    },
    onDelete(index, row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 已确认删除
          // 调接口删除
          this.loading = true
          deleteAppDownloadDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getAppDownloadListApi()
            })
            .catch((e) => {
              this.$message({
                message: '网络或程序异常！' + e,
                type: 'error'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
<style lang="scss">
.AppDownloadDetailAdmin {
}
</style>