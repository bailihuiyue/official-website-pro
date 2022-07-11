<template>
  <div class="horizontalGolbalMenu">
    <el-menu
      :default-active="active"
      :mode="mode"
      background-color="transparent"
      text-color="#fff"
      :active-text-color="themeColor"
    >
      <template v-for="(t,i1) in menus">
        <el-menu-item
          :index="calcActiveMenu(i1+'',t.title[`href${$lang}`])"
          v-if="!t.children.length&&t.title[$lang]!=='placeholder'"
        >
          <span
            style="padding: 25px 0;"
            @click="jumpTo(t.title[`href${$lang}`],i1+'')"
          >{{t.title[$lang]}}</span>
        </el-menu-item>
        <el-submenu
          :index="calcActiveMenu(i1+'',t.title[`href${$lang}`])"
          v-else-if="t.title[$lang]&&t.title[$lang]!=='placeholder'"
        >
          <template slot="title">
            <span
              style="padding: 25px 0;"
              @click="jumpTo(t.title[`href${$lang}`],i1+'')"
            >{{t.title[$lang]}}</span>
          </template>
          <el-row style="margin-top:30px">
            <el-col :span="6" v-for="(c,i2) in t.children">
              <el-menu-item
                :index="calcActiveMenu(i1+'-'+i2+'',c[`href${$lang}`])"
                @click="jumpTo(c[`href${$lang}`],i1+'-'+i2+'')"
              >
                <img class="subThumb" :src="$imgServer+c.img" />
                <div class="subTitle">{{c[$lang]}}</div>
                <!-- <div class="subDesc">{{c[$lang]}}</div> -->
              </el-menu-item>
            </el-col>
          </el-row>
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
    '$route.path': {
      handler: function (val) {
        if (val === '/') {
          // TODO:bug不知道为什么active设置为'/'不可以
          this.active = new Date()+''
        }
      }
    }
  },
  // watch: {
  //   // 对应第一次进入页面时如果不是首页,菜单没有选中状态,
  //   // 但是每个菜单设置的key必须唯一
  //   '$route.path': {
  //     handler: function (val) {
  //       setTimeout(() => {
  //         // if (!window._calcMenu) {
  //         const id = this.$route.query.id
  //         let key = val
  //         if (id) {
  //           key = `${val}?id=${id}`
  //         }
  //         this.active = this.menuTreeKey[key] || '/'
  //         // window._calcMenu = true
  //         // }
  //       },200)
  //     }
  //   }
  // },
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

.horizontalGolbalMenu {
  margin-top: 15px;
  flex: 1 0 auto;
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

  @media screen and (max-width: 1366px) {
    // flex: 0 0 auto;
    .el-submenu__title {
      padding: 0 10px;
    }
  }
}
</style>