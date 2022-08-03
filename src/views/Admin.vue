<template>
  <div class="admin">
    <el-container style="height: calc(100vh - 90px);">
      <el-aside width="220px">
        <el-menu :default-active="currentRouter" class="el-menu-vertical-demo" router>
          <el-menu-item index="/admin/user">
            <i class="el-icon-user-solid"></i>
            <span slot="title">后台用户管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/menu">
            <i class="el-icon-s-grid"></i>
            <span slot="title">菜单管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/logo">
            <i class="el-icon-picture-outline-round"></i>
            <span slot="title">Logo管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/footer">
            <i class="el-icon-bottom"></i>
            <span slot="title">底部管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/carousel">
            <i class="el-icon-postcard"></i>
            <span slot="title">轮播图管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/videoBackground">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">视频墙管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/productImgs">
            <i class="el-icon-coordinate"></i>
            <span slot="title">产品大图管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/bottomSection">
            <i class="el-icon-menu"></i>
            <span slot="title">底部四图管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/classify">
            <i class="el-icon-files"></i>
            <span slot="title">分类管理</span>
          </el-menu-item>
          <el-submenu index="/adminp">
            <template slot="title">
              <i class="el-icon-truck"></i>
              产品管理
            </template>
            <el-menu-item index="/admin/productType">产品分类</el-menu-item>
            <el-menu-item index="/admin/productDetail">产品详情</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/driver">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">驱动管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/configGuideDetail">
            <i class="el-icon-s-tools"></i>
            <span slot="title">设置教程管理</span>
          </el-menu-item>
          <el-submenu index="/adminf">
            <template slot="title">
              <i class="el-icon-question"></i>
              常见问题管理
            </template>
            <el-menu-item index="/admin/faq">编辑常见问题</el-menu-item>
            <el-menu-item index="/admin/question">用户提问管理</el-menu-item>
          </el-submenu>
          <el-menu-item index="/admin/appDownload">
            <i class="el-icon-s-goods"></i>
            <span slot="title">APP管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/contactUs">
            <i class="el-icon-chat-line-round"></i>
            <span slot="title">留言反馈管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/aboutCompany">
            <i class="el-icon-office-building"></i>
            <span slot="title">关于公司管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/companyHonor">
            <i class="el-icon-trophy-1"></i>
            <span slot="title">公司荣誉管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/companyState">
            <i class="el-icon-document-copy"></i>
            <span slot="title">新闻管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/adminRecruitment">
            <i class="el-icon-goblet-square-full"></i>
            <span slot="title">招纳精英管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/offlineStore">
            <i class="el-icon-school"></i>
            <span slot="title">体验店管理</span>
          </el-menu-item>
          <!-- <el-menu-item index="/admin/news">
            <i class="el-icon-news"></i>
            <span slot="title">新闻咨询管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/cases">
            <i class="el-icon-location-outline"></i>
            <span slot="title">案例信息管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/team">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">团队风采管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/course">
            <i class="el-icon-time"></i>
            <span slot="title">发展历程管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/enterprise">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">合作企业管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/honor">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">荣誉墙管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/dictionary">
            <i class="el-icon-setting"></i>
            <span slot="title">数据字典管理</span>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div class="base-padding">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data() {
    return {
      currentRouter: '/admin/user'
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.currentRouter = val.path
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" soped>
.admin {
  border-top: 1px solid rgb(238, 238, 238);
  background-color: #fff;
  .el-menu-vertical-demo.el-menu {
    // height: calc(100vh - 63px);
  }
}

.base-padding {
  padding: 20px;
  margin-bottom: 80px;
}

.el-footer {
  line-height: 60px;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>