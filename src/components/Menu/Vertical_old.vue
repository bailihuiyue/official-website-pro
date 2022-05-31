<template>
  <div class="verticalGlobalMenu">
    <el-menu
      default-active="/"
      :mode="mode"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff"
    >
      <template v-for="(m,i1) in menus">
        <el-submenu :index="i1+''" v-if="m.children">
          <template slot="title">{{m[$lang]}}</template>
          <el-menu-item-group :index="i1+'-'+i2+''" v-for="(c,i2) in m.children">
            <template slot="title">{{c[$lang]}}</template>
            <el-menu-item v-for="m in c.menuItems">
              <div @click="jumpTo(m.href)">{{m[$lang]}}</div>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="i1+''" v-else @click="jumpTo(m.href)">{{m[$lang]}}</el-menu-item>
      </template>
    </el-menu>
  </div>
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

<style lang="scss">
.verticalGlobalMenu {
}
</style>