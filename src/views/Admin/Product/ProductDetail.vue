<template>
  <div class="productDetailAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的产品类型:</span>
      <el-radio-group v-model="selectedProductType">
        <el-radio :label="t.id" v-for="t in productType" :key="t.id">{{t.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="addProductdeatil()">新增产品</el-button>
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="img" label="图片" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="sku" label="SKU" />
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
      title="产品详情编辑"
      :visible.sync="dialogFormVisible"
      width="80%"
    >
      <el-form :model="formData">
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
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="SKU" :label-width="formLabelWidth">
          <el-input v-model="formData.sku" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 详情管理 -->
        <el-tabs v-model="activeTab">
          <el-tab-pane label="产品详情" name="productDetail">
            <Tinymce
              :content="formData.productDetail"
              :height="500"
              :menubar="false"
              ref="productDetailTiny"
            />
          </el-tab-pane>
          <el-tab-pane label="产品参数" name="productParameter">
            <Tinymce
              :content="formData.productParameter"
              :height="500"
              :menubar="false"
              ref="productParameterTiny"
            />
          </el-tab-pane>
          <el-tab-pane label="技术支持" name="technicalSupport">
            <Tinymce
              :content="formData.technicalSupport"
              :height="500"
              :menubar="false"
              ref="technicalSupportTiny"
            />
          </el-tab-pane>
        </el-tabs>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancelEdit()">取 消</el-button>
        <el-button type="primary" @click="onCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getProductDetail,
  addProductDetail,
  modifyProductDetail,
  deleteProductDetail,
  getProductType,
  getProductList
} from './service'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import Tinymce from '@/components/Tinymce'

export default {
  name: 'productDetailAdmin',
  components: {
    ChangeLocationAdmin,
    Tinymce
  },
  data() {
    return {
      productType: [],
      selectedProductType: '',
      productDetail: {},
      options: {},
      tableData: [],
      formData: {
        id: null,
        title: '',
        img: '',
        sku: '',
        productDetail: '',
        productParameter: '',
        technicalSupport: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true,
      headers: {
        token: window.sessionStorage.getItem('token')
      },
      activeTab: 'productDetail'
    }
  },
  created() {
    getProductType().then((res) => {
      this.productType = res
      this.selectedProductType = res[0].id
      this.getProductListApi()
    })
  },
  watch: {
    selectedProductType(val) {
      this.getProductListApi()
    }
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
    getProductListApi() {
      this.loading = true
      getProductList({
        lang: this.$adminLang,
        currentPage: 1,
        pageSize: 99999,
        type: this.selectedProductType
      })
        .then((res) => {
          this.tableData = res.list
          this.loading = false
        })
        .catch((e) => {
          this.$message({
            message: '网络或程序异常！' + e,
            type: 'error'
          })
        })
    },
    addProductdeatil() {
      // 清除数据
      this.formData.id = null
      this.formData.img = ''
      this.formData.title = ''
      this.formData.sku = ''
      this.formData.productDetail = ''
      this.formData.productParameter = ''
      this.formData.technicalSupport = ''
      this.dialogFormVisible = true
      this.activeTab = 'productDetail'
      this.$nextTick(() => {
        this.$refs.productDetailTiny.setContent('')
        this.$refs.productParameterTiny.setContent('')
        this.$refs.technicalSupportTiny.setContent('')
      })
    },
    onCreateOrModify() {
      this.formData.productDetail = this.$refs.productDetailTiny.getContent()
      this.formData.productParameter =
        this.$refs.productParameterTiny.getContent()
      this.formData.technicalSupport =
        this.$refs.technicalSupportTiny.getContent()
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addProductDetail(this.$adminLang, {
          ...this.formData,
          type: this.selectedProductType
        })
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.$refs.productDetailTiny.setContent('')
            this.$refs.productParameterTiny.setContent('')
            this.$refs.technicalSupportTiny.setContent('')
            this.dialogFormVisible = false
            this.getProductListApi(this.$adminLang)
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyProductDetail(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.$refs.productDetailTiny.setContent('')
            this.$refs.productParameterTiny.setContent('')
            this.$refs.technicalSupportTiny.setContent('')
            this.dialogFormVisible = false
            this.getProductListApi()
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
      this.activeTab = 'productDetail'
      //index:第几行   row:这一行的数据
      getProductDetail(this.$adminLang, row.id).then((res) => {
        this.formData.title = row.title
        this.formData.img = row.img
        this.formData.sku = row.sku
        this.formData.id = row.id
        this.$refs.productDetailTiny.setContent(res.productDetail || '')
        this.$refs.productParameterTiny.setContent(res.productParameter || '')
        this.$refs.technicalSupportTiny.setContent(res.technicalSupport || '')
      })
      this.dialogFormVisible = true
    },
    onCancelEdit() {
      this.dialogFormVisible = false
      this.$refs.productDetailTiny.setContent('')
      this.$refs.productParameterTiny.setContent('')
      this.$refs.technicalSupportTiny.setContent('')
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
          deleteProductDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getProductListApi()
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
    onLangChanged(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>