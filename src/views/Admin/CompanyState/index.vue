<template>
  <div class="CompanyStateAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的新闻类型:</span>
      <el-radio-group v-model="selectedCompanyStateType">
        <el-radio :label="f.id" v-for="f in companyStateTypes" :key="f.id">{{f.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="addCompanyStateDetail()" style="margin:10px 0">新增新闻</el-button>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="img" label="封面" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="desc" label="简介"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog title="新闻详情编辑" :visible.sync="dialogFormVisible" width="80%">
      <el-form :model="formData">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input v-model="formData.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="封面" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action="`${$baseURL}api/upload/uploadImage`"
            :show-file-list="false"
            :on-success="onSuccess"
            :headers="{token:$token}"
          >
            <img v-if="formData.img" :src="$imgServer+formData.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth">
          <Tinymce
            :content="formData.content"
            :height="500"
            :menubar="false"
            ref="CompanyStateDetailTiny"
          />
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
  getCompanyStateDetail,
  addCompanyStateDetail,
  modifyCompanyStateDetail,
  deleteCompanyStateDetail,
  getCompanyStateList
} from './service'
import { companyStateTypes } from '@/utils/config'

export default {
  name: 'CompanyStateAdmin',
  components: {
    ChangeLocationAdmin,
    Tinymce
  },
  data() {
    return {
      companyStateTypes,
      selectedCompanyStateType: companyStateTypes[0].id,
      list: [],
      formData: {
        id: '',
        title: '',
        desc: '',
        content: '',
        img: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true
    }
  },
  created() {
    this.getCompanyStateListApi()
  },
  watch: {
    selectedCompanyStateType(val) {
      this.getCompanyStateListApi()
    }
  },
  methods: {
    getCompanyStateListApi() {
      getCompanyStateList({
        lang: this.$adminLang,
        currentPage: 1,
        pageSize: 9999,
        type: this.selectedCompanyStateType
      }).then((res) => {
        this.list = res.list
        this.loading = false
      })
    },
    addCompanyStateDetail() {
      // 清除数据
      this.formData.id = undefined
      this.formData.title = ''
      this.formData.content = ''
      this.formData.desc = ''
      this.formData.img = ''
      this.dialogFormVisible = true
      setTimeout(()=>{
        this.$refs.CompanyStateDetailTiny.setContent('')
      })
    },
    onCreateOrModify() {
      this.formData.content = this.$refs.CompanyStateDetailTiny.getContent()
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addCompanyStateDetail(
          this.$adminLang,
          this.formData,
          this.selectedCompanyStateType
        )
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.$refs.CompanyStateDetailTiny.setContent('')
            this.dialogFormVisible = false
            this.getCompanyStateListApi()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyCompanyStateDetail(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getCompanyStateListApi()
            this.$refs.CompanyStateDetailTiny.setContent('')
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
      getCompanyStateDetail(this.$adminLang, row.id).then((res) => {
        this.formData.title = res.title
        this.formData.desc = res.desc
        this.formData.id = res.id
        this.formData.img = res.img
        this.$refs.CompanyStateDetailTiny.setContent(res.content)
      })
      this.dialogFormVisible = true
    },
    onCancelEdit() {
      this.dialogFormVisible = false
      this.$refs.CompanyStateDetailTiny.setContent('')
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
          deleteCompanyStateDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getCompanyStateListApi()
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
    },
    onSuccess(response) {
      if (response) {
        this.formData.img = response.data
      } else {
        this.$message({
          message: response.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
    }
  }
}
</script>
<style lang="scss">
.CompanyStateAdmin {
}
</style>