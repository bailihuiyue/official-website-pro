<template>
  <div class="golbalMenu">
    <el-menu
      :default-active="active"
      :mode="mode"
      background-color="transparent"
      text-color="#fff"
      :active-text-color="themeColor"
    >
      <template v-for="(t,i1) in menus">
        <el-submenu
          :index="calcActiveMenu(i1+'',t.title[`href${$lang}`])"
          v-if="t.title[$lang]&&t.title[$lang]!=='placeholder'"
        >
          <template slot="title">
            <span @click="jumpTo(t.title[`href${$lang}`],i1+'')">{{t.title[$lang]}}</span>
          </template>
          <el-menu-item
            :index="calcActiveMenu(i1+'-'+i2+'',c[`href${$lang}`])"
            v-for="(c,i2) in t.children"
            @click="jumpTo(c[`href${$lang}`],i1+'-'+i2+'')"
          >
            <img class="subThumb" :src="$imgServer+c.img" />
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
      themeColor,
      active: '/',
      menuTreeKey: {}
    }
  },
  watch: {
    // 对应第一次进入页面时如果不是首页,菜单没有选中状态,
    // 但是每个菜单设置的key必须唯一
    '$route.path': {
      handler: function (val) {
        // if (!window._calcMenu) {
        const id = this.$route.query.id
        let key = val
        if (id) {
          key = `${val}?id=${id}`
        }
        this.active = this.menuTreeKey[key] || '/'
        // window._calcMenu = true
        // }
      }
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
          // window.location.href = window.location.origin + '#' + href
          // window.location.reload()
          this.$router.push(href)
        }
      }
    },
    // 对应第一次进入页面时如果不是首页,菜单没有选中状态,
    // 但是每个菜单设置的key必须唯一
    calcActiveMenu(key, path) {
      if (path) {
        this.menuTreeKey[path] = key
      }
      return key
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