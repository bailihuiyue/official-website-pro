<template>
  <span class="changeLocationAdmin">
    <span>存储为: </span>
    <el-radio-group v-model="radio" @change="onChangeLocation">
      <el-radio label="cn">中文</el-radio>
      <el-radio label="en">English</el-radio>
    </el-radio-group>
  </span>
</template>
<script>
export default {
  data() {
    return {
      radio: 'cn'
    }
  },
  methods: {
    onChangeLocation(val) {
      window.localStorage.setItem('adminLang', val)
      this.$emit('langChanged', val)
    }
  }
}
</script>
<style lang="scss">
.changeLocationAdmin {
  margin-right: 50px;
}
</style>