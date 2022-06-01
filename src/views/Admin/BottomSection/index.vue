<template>
  <div class="menuAdmin" v-loading="loading">
    <ChangeLocationAdmin />
    <!-- 三个图片 -->
    <div style="margin:20px 0 5px 0">三个图片</div>
    <el-alert title="请注意,'三个图片'区域中,1,3两行为静态图片,第2行请上传视频" type="warning" style="margin:10px 0" />
    <el-table :data="[totalData[0],totalData[1],totalData[2]]" border style="width: 100%">
      <el-table-column type="index" width="50" label="行号"></el-table-column>
      <el-table-column prop="img" label="图片/视频封面" width="220">
        <template slot-scope="scope">
          <img style="width:200px" :src="$imgserver + scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column prop="href" label="跳转链接/视频地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="onOpenEditModal(scope.$index, scope.row,'threeData')"
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
            @click="onOpenEditModal(scope.$index, scope.row,'miniCarouselData')"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="onDelete(scope.$index, scope.row,'miniCarouselData')"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹出框 -->
    <el-dialog title="底部图片编辑" :visible.sync="dialogFormVisible">
      <el-form :model="formData">
        <el-form-item label="图片/视频封面" :label-width="formLabelWidth">
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
        <el-form-item label="跳转链接/视频" :label-width="formLabelWidth">
          <el-input v-model="formData.href" autocomplete="off"></el-input>
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
import { getBottomImgs, updateBottomImgs } from './service'
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
      menuType: '',
      formData: {
        href: '',
        img: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    onSaveImgSuccess(response) {
      if (response) {
        if (this.miniCarouselIndex === -1) {
          this.formData.img = response.data
        } else {
          this.totalData['children'][this.miniCarouselIndex]['img'] =
            response.data
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
      getBottomImgs(this.$adminLang)
        .then((res) => {
          this.totalData =JSON.parse(res)
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
      this.formData.href = ''
      this.formData.img = ''
      this.dialogFormVisible = true
      this.miniCarouselIndex = -1
      this.menuType = 'miniCarouselData'
    },
    onCreateOrModify() {
      // -1表示新增
      if (this.miniCarouselIndex === -1) {
        this.totalData[3]['imgs'].push(this.formData)
      } else if (this.menuType === 'threeData') {
        this.totalData[this.currentIndex] = this.formData
      } else if (this.menuType === 'miniCarouselData') {
        this.totalData[3]['imgs'][this.miniCarouselIndex] = this.formData
      }
      updateBottomImgs(this.$adminLang, JSON.stringify(this.totalData))
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
    onOpenEditModal(currentIndex, row, menuType) {
      this.menuType = menuType
      this.currentIndex = currentIndex
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
          if (!this.menuType === 'threeData') {
            this.$message.error('系统错误,请刷新页面重试!')
            return false
          }
          this.totalData[3]['imgs'].splice(this.miniCarouselIndex, 1)
          updateBottomImgs(this.$adminLang, JSON.stringify(this.totalData))
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