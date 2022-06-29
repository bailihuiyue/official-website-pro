<template>
  <div class="changeLocation">
    <el-dropdown placement="bottom" :visible-arrow="false">
      <img style="width:20px" src="/lang.svg" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="onChangeLocation('cn')">中文</el-dropdown-item>
        <el-dropdown-item @click.native="onChangeLocation('en')">English</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  methods: {
    onChangeLocation(lang) {
      window.localStorage.setItem('lang', lang)
      window.location.reload()
    }
  }
}
</script>
<style lang="scss">
.changeLocation {
  // margin-top: 18px;
  height: 20px;
  cursor: pointer;
}
.el-dropdown-menu.el-popper {
  // background-color: #000;
  .popper__arrow {
    display: none !important;
  }
  li:hover {
    // background-color: #202020 !important;
    // color: #606266;
  }
}
</style>