<template>
  <div>
    <el-alert
      title="菜单编辑功能,请写入正确的json,如果存在children,则表示有二级菜单,如果href包含//,则表示是http开头的外部链接,直接跳转到外部网站"
      type="warning"
    ></el-alert>
    <el-button @click="updateMenu" style="margin:20px 0;" type="primary">保存</el-button>
    <br />
    <div>
      <div style="float:left;width:500px">
        <div>当前已保存的内容:</div>
        <div style="margin-top:5px;font-size:14px;white-space: pre;">
          <code>{{JSON.stringify(currentTxt , '', 2)}}</code>
        </div>
      </div>
      <div style="float:left">
        <div style="margin-bottom:5px;">请输入新的内容:</div>
        <el-input
          style="width:500px"
          type="textarea"
          :rows="20"
          placeholder="请输入内容"
          v-model="menuTxt"
        ></el-input>
      </div>
    </div>
  </div>
</template>
<script>
import { getMenu, setMenu } from './service'

export default {
  data() {
    return {
      menuTxt: '',
      currentTxt: ''
    }
  },
  created() {
    this.getMenuFun()
  },
  methods: {
    getMenuFun() {
      getMenu().then((res) => (this.currentTxt = res))
    },
    updateMenu() {
      try {
        JSON.parse(this.menuTxt)
      } catch (error) {
        this.$message.error('请输入正确的JSON格式!')
        return false
      }
      
      if (!Array.isArray(JSON.parse(this.menuTxt))) {
        this.$message.error('最外层少了[],请查看!')
        return false
      }

      setMenu(this.menuTxt).then((res) => {
        if (res) {
          this.$message.success('保存成功!')
          this.getMenuFun()
        }
      })
    }
  }
}
</script>
<style lang="scss">
</style>