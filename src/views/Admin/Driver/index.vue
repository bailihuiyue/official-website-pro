<template>
  <div class="DriverDetailAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的驱动类型:</span>
      <el-radio-group v-model="selectedDriverType">
        <el-radio :label="d.typeNo" v-for="d in driverTypes" :key="d.typeNo">{{d.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="addDriverDetail()" style="margin:10px 0">新增驱动</el-button>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog title="驱动编辑" :visible.sync="dialogFormVisible" width="50%">
      <el-form :model="formData">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="formData.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="驱动文件上传" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            style="display:inline-block"
            :action="`${$baseURL}api/upload/uploadfile`"
            :show-file-list="false"
            :on-success="(response, file, fileList) => onUploadFileSuccess(response, file, fileList, 'driverUrl')"
            :headers="{token:$token}"
            :before-upload="onBeginUpload"
          >
            <el-button :loading="loading" size="small" type="primary">点击上传</el-button>
          </el-upload>
          <a
            style="margin-left:30px"
            target="_blank"
            :href="$baseURL+formData.driverUrl"
            v-if="formData.driverUrl"
          >点击查看</a>
        </el-form-item>
        <el-form-item label="PDF上传" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            style="display:inline-block"
            :action="`${$baseURL}api/upload/uploadfile`"
            :show-file-list="false"
            :on-success="(response, file, fileList) => onUploadFileSuccess(response, file, fileList, 'pdfUrl')"
            :headers="{token:$token}"
            :before-upload="onBeginUpload"
          >
            <el-button :loading="loading" size="small" type="primary">点击上传</el-button>
          </el-upload>
          <a
            style="margin-left:30px"
            target="_blank"
            :href="$baseURL+formData.pdfUrl"
            v-if="formData.pdfUrl"
          >点击查看</a>
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
import {
  getDriverDetail,
  addDriverDetail,
  modifyDriverDetail,
  deleteDriverDetail,
  getDriverList
} from './service'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'driverAdmin',
  components: {
    ChangeLocationAdmin
  },
  data() {
    return {
      driverTypes: [],
      selectedDriverType: 0,
      driverDetail: {},
      list: [],
      formData: {
        id: undefined,
        title: undefined,
        desc: undefined,
        driverUrl: undefined,
        pdfUrl: undefined
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: false
    }
  },
  created() {
    getClassify(classifyTypesEnum.driver).then((res) => {
      this.driverTypes = res
      this.selectedDriverType = res[0].typeNo
      this.getDriverListApi(res[0].typeNo)
    })
  },
  watch: {
    selectedDriverType(val) {
      this.getDriverListApi()
    }
  },
  methods: {
    getDriverListApi(typeNo) {
      getDriverList({
        lang: this.$adminLang,
        currentPage: 1,
        pageSize: 9999,
        type: typeNo || this.selectedDriverType
      }).then((res) => {
        this.list = res.list
        this.loading = false
      })
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
    onBeginUpload() {
      this.loading = true
      return true
    },
    addDriverDetail() {
      // 清除数据
      this.formData.id = undefined
      this.formData.driverUrl = undefined
      this.formData.pdfUrl = undefined
      this.formData.title = undefined
      this.formData.desc = undefined
      this.dialogFormVisible = true
    },
    onCreateOrModify() {
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addDriverDetail(this.$adminLang, {
          ...this.formData,
          type: this.selectedDriverType
        })
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getDriverListApi()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyDriverDetail(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getDriverListApi()
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
      getDriverDetail(this.$adminLang, row.id).then((res) => {
        this.formData.title = res.title
        this.formData.desc = res.desc
        this.formData.driverUrl = res.driverUrl
        this.formData.pdfUrl = res.pdfUrl
        this.formData.id = res.id
      })
      this.dialogFormVisible = true
    },
    onCancelEdit() {
      this.dialogFormVisible = false
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
          deleteDriverDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getDriverListApi()
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
.DriverDetailAdmin {
}
</style>