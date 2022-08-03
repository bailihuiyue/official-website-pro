<template>
  <div class="menuAdmin">
    <ChangeLocationAdmin />
    <!-- 三个图片 -->
    <div style="margin:20px 0 5px 0">三个图片</div>
    <el-alert
      title="请注意,'三个图片'区域中,1,3两行为静态图片,第2行请上传视频, *并且上传的所有图片尺寸必须一致,否则页面错乱,切记切记!!!"
      type="warning"
      style="margin:10px 0"
    />
    <el-upload
      class="upload-demo"
      style="display:inline-block"
      :action="`${$baseURL}api/upload/uploadfile`"
      :show-file-list="false"
      :on-success="onUploadFileSuccess"
      :headers="{token:$token}"
      :before-upload="onBeginUpload"
    >
      <el-button size="small" type="primary" :loading="loading">上传第2行的视频</el-button>
    </el-upload>
    <el-table :data="[totalData[0],totalData[1],totalData[2]]" border style="width: 100%">
      <el-table-column prop="id" width="50" label="id"></el-table-column>
      <el-table-column width="100" label="类型">
        <template slot-scope="scope">
          <span
            :style="{color:(scope.$index+1===2)?'#E6A23C':'black'}"
          >{{(scope.$index+1===2)?'视频':'图片'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="img" label="图片/视频封面" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="href" label="跳转链接/视频地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="onOpenEditModal(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 迷你轮播图 -->
    <div style="margin:20px 0 5px 0">
      迷你轮播图
      <el-button type="primary" @click="onAddMiniCarousel()" style="margin:15px 0">新增</el-button>
    </div>
    <el-table :data="totalData[3].imgs" border style="width: 100%">
      <el-table-column prop="id" width="100" label="id"></el-table-column>
      <el-table-column prop="img" label="图片" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgServer + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="href" label="跳转链接"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="onOpenEditModal(scope.$index, scope.row)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹出框 -->
    <el-dialog :loading="loading" :close-on-click-modal="false" title="底部图片编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="图片/视频封面" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            :action="`${$baseURL}api/upload/uploadImage`"
            :show-file-list="false"
            :on-success="onSaveImgSuccess"
            :headers="{token:$token}"
          >
            <img v-if="formData.img" :src="$imgServer+formData.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="跳转链接/视频" :label-width="formLabelWidth">
          <el-input v-model="formData.href" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" :loading="loading" @click="onCreateOrModify()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getBottomImgs,
  updateBottomImgs,
  addBottomImgs,
  deleteBottomImgs
} from './service'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'

export default {
  name: 'menuAdmin',
  components: {
    ChangeLocationAdmin
  },
  data() {
    return {
      options: {},
      totalData: [{}, {}, {}, {}],
      currentIndex: 0,
      formData: {
        href: '',
        img: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: false
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onSaveImgSuccess(response) {
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
      getBottomImgs(this.$adminLang)
        .then((res) => {
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
    onAddMiniCarousel() {
      // 清除数据
      this.formData.id = undefined
      this.formData.href = ''
      this.formData.img = ''
      this.dialogFormVisible = true
    },
    resetData() {
      this.formData.id = undefined
      this.formData.href = ''
      this.formData.img = ''
    },
    onCreateOrModify() {
      this.loading = true
      if (this.formData.id === undefined) {
        addBottomImgs(this.$adminLang, this.formData)
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
      } else {
        updateBottomImgs(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
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
      }
    },
    //编辑
    onOpenEditModal(currentIndex, row) {
      this.currentIndex = currentIndex
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
          this.loading = true
          deleteBottomImgs(this.$adminLang, row.id)
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
    },
    onUploadFileSuccess(response) {
      if (response) {
        const data = this.totalData[1]
        data.href = this.$videoURL + response.data
        updateBottomImgs(this.$adminLang, data).then((response) => {
          this.loading = false
          this.$message.success('修改成功！')
          this.loadData(this.$adminLang)
        })
      } else {
        this.$message({
          message: response.resultMsg || '上传文件失败,请重试!',
          type: 'error'
        })
        this.loading = false
      }
    },
    onBeginUpload() {
      this.loading = true
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>