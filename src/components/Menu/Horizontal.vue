<template>
  <div class="golbalMenu">
    <el-menu
      default-active="/"
      :mode="mode"
      background-color="transparent"
      text-color="#fff"
      :active-text-color="themeColor"
    >
      <template v-for="(t,i1) in menus">
        <el-submenu :index="i1+''">
          <template slot="title">
            <span @click="jumpTo(t.href)">{{t.title[$lang]}}</span>
          </template>
          <el-menu-item :index="i1+'-'+i2+''" v-for="(c,i2) in t.children" @click="jumpTo(c.href)">
            <img class="subThumb" :src="c.img" />
            <div class="subTitle">{{c[$lang]}}</div>
            <!-- <div class="subDesc">{{c[$lang]}}</div> -->
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { getMenu } from './service'
import { themeColor } from '@/styles/color'

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