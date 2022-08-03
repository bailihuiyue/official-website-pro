<template>
  <div class="footerAdmin">
    <ChangeLocationAdmin />
    <br />
    <el-button @click="updateFooter" style="margin:20px 0;" type="primary">保存</el-button>
    <el-tabs value="img">
      <el-tab-pane label="关注我们" name="img">
        <el-alert title="点击上传最右边图片" type="warning" />
        <div class="uploadMiniPic">
          <el-upload
            style="margin-top:20px"
            class="avatar-uploader"
            :action="`${$imgServer}api/upload/uploadImage`"
            :show-file-list="false"
            :on-success="handleSuccess"
            :headers="{token:$token}"
          >
            <el-button size="small" type="primary">点击上传小图标</el-button>
          </el-upload>
          <span>已上传的地址: {{uploadImg&&($imgServer+uploadImg)}}</span>
        </div>
        <div style="float:left;width:500px">
          <div>当前已保存的内容:</div>
          <div style="margin-top:5px;font-size:14px;white-space: pre;">
            <code>{{img}}</code>
          </div>
        </div>
        <div style="float:left">
          <div style="margin-bottom:5px;">请输入新的内容:</div>
          <el-input
            style="width:500px"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 100 }"
            placeholder="请输入内容"
            v-model="img"
          ></el-input>
        </div>
      </el-tab-pane>
      <el-tab-pane label="版权" name="copyright">
        <el-alert title="版权信息维护" type="warning" />
        <el-input style="margin-top:20px" v-model="copyright" placeholder="请输入最底部版权信息" />
      </el-tab-pane>
      <el-tab-pane label="底部菜单" name="footerList">
        <el-alert
          title="底部编辑功能,请写入正确的json,如果存在children,则表示有二级内容,如果包含href,则表示是可以跳转的链接,否则就是普通文字"
          type="warning"
        ></el-alert>
        <br />
        <div>
          <div style="float:left;width:500px">
            <div>当前已保存的内容:</div>
            <div style="margin-top:5px;font-size:14px;white-space: pre;">
              <code>{{footerList}}</code>
            </div>
          </div>
          <div style="float:left">
            <div style="margin-bottom:5px;">请输入新的内容:</div>
            <el-input
              style="width:500px"
              type="textarea"
              :autosize="{ minRows: 5, maxRows: 200 }"
              placeholder="请输入内容"
              v-model="footerList"
            ></el-input>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getFooter, setFooter } from './service'
import ChangeLocationAdmin from '@/components/ChangeLocationAdmin'

export default {
  components: { ChangeLocationAdmin },
  data() {
    return {
      footerList: '',
      copyright: '',
      img: '',
      id: '',
      uploadImg: ''
    }
  },
  created() {
    this.getFooterFun()
  },
  methods: {
    getFooterFun() {
      getFooter(this.$adminLang).then((res) => {
        this.footerList = res.list
        this.copyright = res.copyright
        this.img = res.img
        this.id = res.id
      })
    },
    updateFooter() {
      try {
        JSON.parse(this.footerList)
      } catch (error) {
        this.$message.error('底部菜单:请输入正确的JSON格式!')
        return false
      }

      if (!Array.isArray(JSON.parse(this.footerList))) {
        this.$message.error('底部菜单:最外层少了[],请查看!')
        return false
      }

      try {
        JSON.parse(this.img)
      } catch (error) {
        this.$message.error('关注我们:请输入正确的JSON格式!')
        return false
      }

      if (!this.copyright) {
        this.$message.error('请输入版权信息')
        return false
      }

      const data = {
        img: this.img,
        list: this.footerList,
        copyright: this.copyright,
        id: this.id
      }

      setFooter(this.$adminLang, data).then((res) => {
        if (res) {
          this.$message.success('保存成功!')
          this.getFooterFun()
        }
      })
    },
    handleSuccess(res) {
      if (res) {
        this.uploadImg = res.data
        this.$message.success('上传成功,请刷新页面!')
      } else {
        this.$message.error(res.resultMsg || '上传图片失败,请重试!')
      }
    }
  }
}
</script>
<style lang="scss">
.footerAdmin {
  .uploadMiniPic {
    margin-bottom: 25px;
  }
}
</style>