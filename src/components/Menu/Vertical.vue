<template>
  <div class="verticalGlobalMenu">
    <el-menu
      default-active="/"
      :mode="mode"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff"
    >
      <template v-for="(t,i1) in menus">
        <!-- 没有二级菜单的情况 -->
        <el-menu-item
          :index="i1+''"
          v-if="!t.children.length&&t.title[$lang]&&t.title[$lang]!=='placeholder'"
          @click="jumpTo(t.title[`href${$lang}`])"
        >
          <span style="padding: 25px 0;">{{t.title[$lang]}}</span>
        </el-menu-item>
        <!-- 有二级菜单 -->
        <el-submenu :index="i1+''" v-else-if="t.title[$lang]&&t.title[$lang]!=='placeholder'">
          <template slot="title">{{t.title[$lang]}}</template>
          <el-menu-item
            :index="i1+'-'+i2+''"
            v-for="(c,i2) in t.children"
            @click="jumpTo(c[`href${$lang}`])"
          >
            <!-- <img class="subThumb" :src="c.img" /> -->
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
      this.$emit('closeMenu')
    }
  }
}
</script>

<style lang="scss">
.verticalGlobalMenu {
  ul {
    width: 100%;
  }
}
</style>