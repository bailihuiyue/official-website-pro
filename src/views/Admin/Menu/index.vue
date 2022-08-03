<template>
  <div class="menuAdmin" v-loading="loading">
    <div>
      <el-alert
        title="一级菜单名称(包括中英文)为'placeholder'的时候菜单不显示,是为了以后扩展菜单而留空的"
        type="warning"
        style="margin-bottom:10px"
      />
      <span style="margin-right:20px">请选择要编辑的菜单:</span>
      <!-- <el-radio-group v-model="menuId" v-if="productTypes.length">
        <el-radio
          :label="t.id"
          v-for="(t,i) in productTypes"
          :key="t.id"
        >{{t.title[$lang]}}</el-radio>
      </el-radio-group>-->
      <el-radio-group v-model="menuId" v-if="totalData.length">
        <el-radio
          :label="t.title.id"
          v-for="(t,i) in totalData"
          :key="t.title.id"
        >{{t.title['cn']==='placeholder'?'空':t.title['cn']}}</el-radio>
      </el-radio-group>
    </div>
    <!-- <ChangeLocationAdmin @langChanged="onLangChanged" /> -->
    <!-- 一级菜单 -->
    <div style="margin:20px 0 5px 0">一级菜单</div>
    <el-table :data="[tableData.title]" border style="width: 100%">
      <el-table-column prop="cn" label="中文" width="180"></el-table-column>
      <el-table-column prop="hrefcn" label="中文跳转链接"></el-table-column>
      <el-table-column prop="en" label="英文" width="180"></el-table-column>
      <el-table-column prop="hrefen" label="英文跳转链接"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onOpenEditModal(scope.row,'l1')"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 二级菜单 -->
    <div style="margin:20px 0 5px 0">
      二级菜单
      <el-button type="primary" @click="onAddL2Menu()" style="margin:15px 0">新增</el-button>
    </div>
    <el-table :data="tableData.children" border style="width: 100%">
      <el-table-column prop="cn" label="中文" width="180"></el-table-column>
      <el-table-column prop="hrefcn" label="中文跳转链接"></el-table-column>
      <el-table-column prop="en" label="英文" width="180"></el-table-column>
      <el-table-column prop="hrefen" label="英文跳转链接"></el-table-column>
      <el-table-column prop="imgcn" label="图片" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.imgcn" alt />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="onOpenEditModal(scope.row,'l2')"></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog :close-on-click-modal="false" title="菜单编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="中文名" :label-width="formLabelWidth">
          <el-input v-model="formData.cn" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文跳转链接" :label-width="formLabelWidth">
          <el-input v-model="formData.hrefcn" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文名" :label-width="formLabelWidth">
          <el-input v-model="formData.en" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文跳转链接" :label-width="formLabelWidth">
          <el-input v-model="formData.hrefen" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="产品菜单" :label-width="formLabelWidth" v-if="menuType==='l1'">
          <el-radio-group v-model="formData.isProduct">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="菜单图片" :label-width="formLabelWidth" v-if="menuType==='l2'">
          <el-upload
            class="avatar-uploader"
            :action="`${$baseURL}api/upload/uploadImage`"
            :show-file-list="false"
            :on-success="onSaveImgSuccess"
            :headers="{token:$token}"
          >
            <img v-if="formData.imgcn" :src="$imgServer+formData.imgcn" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
  getMenu,
  updateMenu,
  addMenu,
  deleteMenu,
  getProductType
} from './service'

export default {
  name: 'menuAdmin',
  components: {},
  data() {
    return {
      menuId: 0,
      options: {},
      tableData: [],
      totalData: [],
      menuType: '',
      formData: {
        id: undefined,
        hrefcn: undefined,
        hrefen: undefined,
        imgcn: undefined,
        cn: undefined,
        en: undefined,
        isProduct: undefined
      },
      productTypes: [],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true
    }
  },
  watch: {
    menuId(val) {
      for (let i = 0; i < this.totalData.length; i++) {
        if (this.totalData[i].title.id === val) {
          this.tableData = this.totalData[i]
          return
        }
      }
    }
  },
  mounted() {
    // getProductType().then((res) => {
    //   this.productTypes = res
    // })
    this.loadData(true)
  },
  methods: {
    onSaveImgSuccess(response) {
      if (response) {
        this.formData.imgcn = response.data
      } else {
        this.$message({
          message: response.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
    },
    loadData(isInit) {
      this.loading = true
      getMenu()
        .then((res) => {
          this.totalData = res
          this.loading = false
          if (isInit) {
            this.tableData = res[0]
            this.menuId = res[0].title.id
          } else {
            const id = this.menuId
            this.menuId = -1
            this.$nextTick(() => {
              this.menuId = id
            })
          }
        })
        .catch((e) => {
          this.$message({
            message: '网络或程序异常！' + e,
            type: 'error'
          })
        })
    },
    onAddL2Menu() {
      // 清除数据
      this.formData.hrefcn = undefined
      this.formData.hrefen = undefined
      this.formData.id = undefined
      this.formData.imgcn = undefined
      this.formData.cn = undefined
      this.formData.en = undefined
      this.dialogFormVisible = true
      this.menuType = 'l2'
      this.isProduct = undefined
    },
    onCreateOrModify() {
      this.loading = true
      if (this.formData.id === undefined) {
        addMenu({ ...this.formData, pid: this.menuId })
          .then((res) => {
            this.loading = false
            this.$message({
              message: '添加成功！',
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
        updateMenu(this.formData)
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
    onOpenEditModal(row, menuType) {
      this.menuType = menuType
      this.formData = row
      this.dialogFormVisible = true
    },
    onDelete(row) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 已确认删除
          // 调接口删除
          this.loading = true
          if (!this.menuType === 'l1') {
            this.$message.error('系统错误,请刷新页面重试!')
            return false
          }
          deleteMenu(row)
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