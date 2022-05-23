<template>
  <el-menu default-active="/" :mode="mode">
    <template v-for="(m,i1) in menus">
      <el-submenu :index="i1+''" v-if="m.children">
        <template slot="title">{{m[$lang]}}</template>
        <el-menu-item
          :index="i1+'-'+i2+''"
          v-for="(c,i2) in m.children"
          @click="jumpTo(c.href)"
        >{{c[$lang]}}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="i1+''" v-else @click="jumpTo(m.href)">{{m[$lang]}}</el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { getMenu } from './service'

export default {
  props: {
    mode: {
      type: String
    },
    handleSelect: {
      type: Function
    }
  },
  data() {
    return {
      menus: []
    }
  },
  created() {
    getMenu().then((res) => {
      this.menus = res
    })
  },
  methods: {
    jumpTo(href) {
      if (href.indexOf('//') > 0) {
        window.location.href = href
      } else {
        this.$router.push(href)
      }
    }
  }
}
</script>

<style>
</style>