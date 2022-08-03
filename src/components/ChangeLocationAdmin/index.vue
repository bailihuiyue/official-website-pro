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
      radio: ''
    }
  },
  created() {
    this.radio =  window.localStorage.getItem('adminLang')||'cn'
  },
  methods: {
    onChangeLocation(val) {
      window.localStorage.setItem('adminLang', val)
      window.location.reload()
      // this.$emit('langChanged', val)
    }
  }
}
</script>
<style lang="scss">
.changeLocationAdmin {
  margin-right: 50px;
}
</style>