<template>
  <div class="questionAdmin">
    <!-- <ChangeLocationAdmin /> -->
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="productName" label="产品名称"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-view"
            @click="onShowDetail(scope.$index, scope.row)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="onDelete(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog :close-on-click-modal="false" title="问题详情查看" :visible.sync="dialogFormVisible" width="600px">
      <el-form :model="formData">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <div>{{formData.name}}</div>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <div>{{formData.phone}}</div>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <div>{{formData.email}}</div>
        </el-form-item>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <div>{{formData.title}}</div>
        </el-form-item>
        <el-form-item label="产品名" :label-width="formLabelWidth">
          <div>{{formData.productName}}</div>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth">
          <div style="white-space: pre;">{{formData.detail}}</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel()">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'
import {
  getQuestionDetail,
  deleteQuestionDetail,
  getQuestionList
} from './service'
import { questionTypes } from '@/utils/config'

export default {
  name: 'questionAdmin',
  components: {
    ChangeLocationAdmin
  },
  data() {
    return {
      list: [],
      formData: {
        id: '',
        title: '',
        desc: '',
        content: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: true
    }
  },
  created() {
    this.getQuestionListApi()
  },
  methods: {
    getQuestionListApi() {
      getQuestionList({
        lang: this.$adminLang,
        type: questionTypes.faq
      }).then((res) => {
        this.list = res.list
        this.loading = false
      })
    },
    onShowDetail(index, row) {
      //index:第几行   row:这一行的数据
      getQuestionDetail(row.id).then((res) => {
        this.formData = res
      })
      this.dialogFormVisible = true
    },
    onCancel() {
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
          deleteQuestionDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getQuestionListApi()
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
.questionAdmin {
}
</style>