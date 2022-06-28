<template>
  <div class="productType">
    <el-alert title="SKU表示产品编号,必须唯一,否则系统出错" type="warning" style="margin-bottom:10px" />
    <!-- <ChangeLocationAdmin @langChanged="onLangChanged" /> -->
    <el-button type="primary" @click="openDialog()">新增产品分类</el-button>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="id" width="100"></el-table-column>
      <el-table-column prop="title.cn" label="中文" width="200"></el-table-column>
      <el-table-column prop="title.en" label="英文" width="200"></el-table-column>
      <el-table-column prop="img" label="图片" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="sku" label="SKU"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onEdit(scope.$index, scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--  -->
    <el-dialog :close-on-click-modal="false" title="产品分类编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="中文名" :label-width="formLabelWidth">
          <el-input v-model="formData.title.cn" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文名" :label-width="formLabelWidth">
          <el-input v-model="formData.title.en" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品图" :label-width="formLabelWidth">
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
        <el-form-item label="SKU" :label-width="formLabelWidth">
          <el-input v-model="formData.sku" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getProductType,
  addProductType,
  modifyProductType,
  deleteProductType
} from './service'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'

export default {
  name: 'productTypeAdmin',
  components: {
    ChangeLocationAdmin
  },
  data() {
    return {
      options: {},
      tableData: [],
      formData: {
        sku: '',
        img: '',
        title: {
          cn: '',
          en: ''
        }
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true,
      headers: {
        token: window.sessionStorage.getItem("token")
      }
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onSuccess(response) {
      if (response) {
        this.formData.img = response.data
      } else {
        this.$message({
          message: response.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
    },
    loadData() {
      this.loading = true
      getProductType()
        .then((res) => {
          this.tableData = res
          this.loading = false
        })
        .catch((e) => {
          this.$message({
            message: '网络或程序异常！' + e,
            type: 'error'
          })
        })
    },
    openDialog() {
      // 清除数据
      this.formData.sku = ''
      this.formData.img = ''
      this.formData.title.cn = ''
      this.formData.title.en = ''
      this.dialogFormVisible = true
    },
    onCreateOrModify() {
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addProductType(this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.loadData()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyProductType(this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.loadData()
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
      this.formData = row
      this.dialogFormVisible = true
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
          deleteProductType(row.id, null)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.loadData()
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

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>