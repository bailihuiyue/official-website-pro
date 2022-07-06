<template>
  <div class="FAQAdmin">
    <ChangeLocationAdmin />
    <div style="margin:15px 0">
      <span style="margin-right:20px">请选择要编辑的问题类型:</span>
      <el-radio-group v-model="selectedFAQType">
        <el-radio :label="f.typeNo" v-for="f in faqTypes" :key="f.typeNo">{{f.title[$adminLang]}}</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" @click="addFAQDetail()" style="margin:10px 0">新增问题</el-button>
    <el-table :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
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
    <el-dialog :close-on-click-modal="false" title="问题详情编辑" :visible.sync="dialogFormVisible" width="80%">
      <el-form :model="formData">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input v-model="formData.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth">
          <Tinymce :content="formData.content" :height="500" :menubar="false" ref="FAQDetailTiny" />
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
  getFAQDetail,
  addFAQDetail,
  modifyFAQDetail,
  deleteFAQDetail,
  getFAQList
} from './service'
import { classifyTypesEnum } from '@/utils/config'
import { getClassify } from '@/services'

export default {
  name: 'FAQAdmin',
  components: {
    ChangeLocationAdmin,
    Tinymce
  },
  data() {
    return {
      faqTypes: [],
      selectedFAQType: 0,
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
    getClassify(classifyTypesEnum.faq).then((res) => {
      this.faqTypes = res
      this.selectedFAQType = res[0].typeNo
      this.getFAQListApi(res[0].typeNo)
    })
  },
  watch: {
    selectedFAQType(val) {
      this.getFAQListApi()
    }
  },
  methods: {
    getFAQListApi(typeNo) {
      getFAQList({
        lang: this.$adminLang,
        currentPage: 1,
        pageSize: 9999,
        type: typeNo || this.selectedFAQType
      }).then((res) => {
        this.list = res.list
        this.loading = false
      })
    },
    addFAQDetail() {
      // 清除数据
      this.formData.id = undefined
      this.formData.title = ''
      this.formData.content = ''
      this.formData.desc = ''
      this.dialogFormVisible = true
    },
    onCreateOrModify() {
      this.formData.content = this.$refs.FAQDetailTiny.getContent()
      if (
        this.formData.id === null ||
        this.formData.id === undefined ||
        this.formData.id === ''
      ) {
        this.loading = true
        addFAQDetail(this.$adminLang, this.formData, this.selectedFAQType)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '创建成功！',
              type: 'success'
            })
            this.$refs.FAQDetailTiny.setContent('')
            this.dialogFormVisible = false
            this.getFAQListApi()
          })
          .catch((e) => {
            this.$message({
              message: '网络或程序异常！' + e,
              type: 'error'
            })
          })
      } else {
        this.loading = true
        modifyFAQDetail(this.$adminLang, this.formData)
          .then((response) => {
            this.loading = false
            this.$message({
              message: '修改成功！',
              type: 'success'
            })
            this.dialogFormVisible = false
            this.getFAQListApi()
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
      getFAQDetail(this.$adminLang, row.id).then((res) => {
        this.formData.title = res.title
        this.formData.desc = res.desc
        this.formData.id = res.id
        this.$refs.FAQDetailTiny.setContent(res.content)
      })
      this.dialogFormVisible = true
    },
    onCancelEdit() {
      this.dialogFormVisible = false
      this.$refs.FAQDetailTiny.setContent('')
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
          deleteFAQDetail(this.$adminLang, row.id)
            .then((response) => {
              this.loading = false
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getFAQListApi()
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
.FAQAdmin {
}
</style>