<template>
  <div class="menuAdmin" v-loading="loading">
    <div>
      <span style="margin-right:20px">请选择要编辑的菜单:</span>
      <el-radio-group v-model="menuIndex">
        <el-radio :label="0">方向盘</el-radio>
        <el-radio :label="1">手柄</el-radio>
        <el-radio :label="2">耳机</el-radio>
        <el-radio :label="3">飞行摇杆</el-radio>
        <el-radio :label="4">技术支持</el-radio>
        <el-radio :label="5">关于公司</el-radio>
      </el-radio-group>
    </div>
    <!-- <ChangeLocationAdmin @langChanged="onLangChanged" /> -->
    <!-- 一级菜单 -->
    <div style="margin:20px 0 5px 0">一级菜单</div>
    <el-table :data="[tableData.title]" border style="width: 100%">
      <el-table-column prop="cn" label="中文" width="180"></el-table-column>
      <el-table-column prop="en" label="英文" width="180"></el-table-column>
      <el-table-column prop="href" label="跳转链接"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="onOpenEditModal(scope.$index, scope.row,'l1')"
          ></el-button>
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
      <el-table-column prop="en" label="英文" width="180"></el-table-column>
      <el-table-column prop="img" label="图片" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgserver + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="href" label="跳转链接"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="onOpenEditModal(scope.$index, scope.row,'l2')"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="onDelete(scope.$index, scope.row,'l2')"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--  -->
    <el-dialog title="菜单编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="中文名" :label-width="formLabelWidth">
          <el-input v-model="formData.cn" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文名" :label-width="formLabelWidth">
          <el-input v-model="formData.en" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="跳转链接" :label-width="formLabelWidth">
          <el-input v-model="formData.href" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="菜单图片" :label-width="formLabelWidth" v-if="menuType==='l2'">
          <el-upload
            class="avatar-uploader"
            :action="`${$baseURL}api/upload/uploadImage`"
            :show-file-list="false"
            :on-success="onSaveImgSuccess"
            :headers="{token:$token}"
          >
            <img v-if="formData.img" :src="$imgserver+formData.img" class="avatar" />
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
import { getMenu, updateMenu } from './service'

export default {
  name: 'menuAdmin',
  components: {},
  data() {
    return {
      menuIndex: 0,
      options: {},
      tableData: [],
      totalData: [],
      selectedL2Index: 0,
      menuType: '',
      formData: {
        href: '',
        img: '',
        cn: '',
        en: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true
    }
  },
  watch: {
    menuIndex(val) {
      this.tableData = this.totalData[val]
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onSaveImgSuccess(response) {
      if (response) {
        if (this.selectedL2Index === -1) {
          this.formData.img = response.data
        } else {
          this.totalData[this.menuIndex]['children'][this.selectedL2Index][
            'img'
          ] = response.data
        }
      } else {
        this.$message({
          message: response.resultMsg || '上传图片失败,请重试!',
          type: 'error'
        })
      }
    },
    loadData() {
      this.loading = true
      getMenu()
        .then((res) => {
          res = JSON.parse(res)
          this.tableData = res[this.menuIndex]
          this.totalData = res
          this.loading = false
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
      this.formData.href = ''
      this.formData.img = ''
      this.dialogFormVisible = true
      this.selectedL2Index = -1
      this.menuType = 'l2'
    },
    onCreateOrModify() {
      // -1表示新增
      if (this.selectedL2Index === -1) {
        this.totalData[this.menuIndex]['children'].push(this.formData)
      } else if (this.menuType === 'l1') {
        this.totalData[this.menuIndex]['title'] = this.formData
      } else if (this.menuType === 'l2') {
        this.totalData[this.menuIndex]['children'][this.selectedL2Index] =
          this.formData
      }
      updateMenu(JSON.stringify(this.totalData))
        .then((response) => {
          this.loading = false
          this.$message({
            message: '创建成功！',
            type: 'success'
          })
          this.dialogFormVisible = false
          this.loadData(this.$adminLang)
        })
        .catch((e) => {
          this.$message({
            message: '网络或程序异常！' + e,
            type: 'error'
          })
        })
    },
    //编辑
    onOpenEditModal(selectedL2Index, row, menuType) {
      this.menuType = menuType
      this.selectedL2Index = selectedL2Index
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
          if (!this.menuType === 'l1') {
            this.$message.error('系统错误,请刷新页面重试!')
            return false
          }
          this.totalData[this.menuIndex]['children'].splice(
            this.selectedL2Index,
            1
          )
          updateMenu(JSON.stringify(this.totalData))
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