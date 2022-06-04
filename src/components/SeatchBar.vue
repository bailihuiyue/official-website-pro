<template>
  <div class="SeatchBar">
    <h3>{{title[$lang]}}</h3>
    <el-input
      v-model="txt"
      :placeholder="placeholder[$lang]"
      prefix-icon="el-icon-search"
      @change="onSearch"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: '',
      title: {
        cn: '我们能帮什么忙?',
        en: 'How can we help'
      },
      placeholder: {
        cn: '请输入内容',
        en: 'Enter your search item here...'
      }
    }
  },
  methods: {
    onSearch(val) {
      this.$emit('onSearch', val)
    }
  }
}
</script>
<style lang="scss">
.SeatchBar {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  h3 {
    margin: 20px 0;
    color: #fff;
  }
  .el-input {
    max-width: 450px;
    .el-input__inner {
      border-radius: 50px;
    }
  }
}
.mobile {
  .SeatchBar {
    .el-input {
      max-width: 80%;
    }
  }
}
</style>