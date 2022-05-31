<template>
  <div class="golbalMenu">
    <el-menu
      default-active="/"
      :mode="mode"
      background-color="transparent"
      text-color="#fff"
      :active-text-color="themeColor"
    >
      <template v-for="(m,i1) in menus">
        <el-submenu :index="i1+''" v-if="m.children">
          <template slot="title">{{m[$lang]}}</template>
          <el-menu-item-group
            :index="i1+'-'+i2+''"
            v-for="(c,i2) in m.children"
            @click="jumpTo(c.href)"
          >
            <template slot="title">
              <div class="subTitle">{{c[$lang]}}</div>
              <img class="subThumb" :src="c.img" />
            </template>
            <el-menu-item v-for="m in c.menuItems">
              <span class="subContent" @click="jumpTo(m.href)">{{m[$lang]}}</span>
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
import { themeColor } from '@/styles/color'
console.log(themeColor)
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
      menus: [],
      themeColor
    }
  },
  created() {
    getMenu().then((res) => {
      this.menus = res
    })
  },
  methods: {
    jumpTo(href) {
      if (href) {
        if (href.indexOf('//') > 0) {
          window.location.href = href
        } else {
          this.$router.push(href)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/color.scss';

.golbalMenu {
  flex: 1;
  .el-menu.el-menu--horizontal {
    border: none !important;
    .el-submenu__title,
    .el-menu-item {
      background-color: transparent !important;
    }
    .el-submenu__title:hover,
    .el-menu-item:hover {
      color: $themeColor !important;
    }
  }
}
</style>