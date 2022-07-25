<template>
  <div class="SeatchBar">
    <h3>{{title[$lang]}}</h3>
    <el-input
      v-model="txt"
      :placeholder="placeholder[$lang]"
      prefix-icon="el-icon-search"
      @change="onSearch"
      clearable
    />
  </div>
</template>
<script>
export default {
  props: ['defaultSearchTxt'],
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
  created() {
    const searchTxt = this.$route.query.searchTxt
    if (searchTxt) {
      this.txt = searchTxt
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
@import '~@/styles/color.scss';

.SeatchBar {
  width: 100%;
  text-align: center;
  margin-top: 20px;
  h3 {
    margin: 20px 0;
    // color: #fff;
  }
  .el-input {
    max-width: 450px;
    .el-input__inner {
      border-radius: 50px;
      // background-color: $blackBackgroundColor;
      // border-color: $blackBorderColor;
      // color: $blackFontColor;
    }
  }
}
.mobile {
  .SeatchBar {
    .el-input {
      max-width: 90%;
    }
  }
}
</style>