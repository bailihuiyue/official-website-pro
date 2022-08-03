<template>
  <div class="horizontalGolbalMenu">
    <el-menu
      :default-active="active"
      :mode="mode"
      background-color="transparent"
      text-color="#fff"
      :active-text-color="themeColor"
    >
      <!-- 返回首页 -->
      <el-menu-item
        class="homeMenu"
        :index="calcActiveMenu('home','/')"
        @click="jumpTo('/')"
      >{{lang.home[$lang]}}</el-menu-item>
      <!-- 产品菜单 -->
      <template v-if="prodMenus.length">
        <el-submenu index="prodMenu" @mouseover.native="onOpenMenu" popper-class="prodMenuPopper">
          <template slot="title">
            <span
              style="padding: 25px 0;"
              @click="jumpTo('/productList','prodMenu')"
            >{{lang.menu[$lang]}}</span>
          </template>
          <el-tabs class="productMenuList" v-model="selectedProdMenu" stretch>
            <el-tab-pane v-for="(item,i1) in prodMenus" :key="item.title.en" :name="'prodMenu'+i1">
              <div slot="label" @mouseover="onHoverProdTabs('prodMenu'+i1)">{{item.title[$lang]}}</div>
              <div style="margin-top:30px">
                <div class="rowItem" v-for="(c,i2) in item.children">
                  <el-menu-item
                    :index="calcActiveMenu('prodMenu'+i1+'-'+i2,c[`href${$lang}`])"
                    @click="jumpTo(c[`href${$lang}`],'prodMenu'+i1+'-'+i2)"
                  >
                    <img class="subThumb" :src="$imgServer+(c[`img${$lang}`]||c.imgcn)" />
                    <div class="subTitle">{{c[$lang]}}</div>
                    <!-- <div class="subDesc">{{c[$lang]}}</div> -->
                  </el-menu-item>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-submenu>
      </template>
      <!-- 技术支持,关于公司等菜单 -->
      <template v-for="(t,i1) in otherMenus">
        <!-- 没有二级菜单的情况 -->
        <el-menu-item
          :index="calcActiveMenu(i1+'',t.title[`href${$lang}`])"
          v-if="!t.children.length"
        >
          <span
            style="padding: 25px 0;"
            @click="jumpTo(t.title[`href${$lang}`],i1+'')"
          >{{t.title[$lang]}}</span>
        </el-menu-item>
        <!-- 有二级菜单 -->
        <el-submenu :index="calcActiveMenu(i1+'',t.title[`href${$lang}`])" v-else>
          <template slot="title">
            <span
              style="padding: 25px 0;"
              @click="jumpTo(t.title[`href${$lang}`],i1+'')"
            >{{t.title[$lang]}}</span>
          </template>
          <el-row style="margin-top:30px">
            <el-col :span="4" v-for="(c,i2) in t.children">
              <el-menu-item
                :index="calcActiveMenu(i1+'-'+i2+'',c[`href${$lang}`])"
                @click="jumpTo(c[`href${$lang}`],i1+'-'+i2+'')"
              >
                <img class="subThumb" :src="$imgServer+(c[`img${$lang}`]||c.imgcn)" />
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
      selectedProdMenu: '',
      prodMenuInit: false,
      prodMenus: [],
      otherMenus: [],
      themeColor,
      active: '/',
      menuTreeKey: {},
      lang: {
        menu: {
          cn: '游戏装备',
          en: 'Game Equipment'
        },
        home: {
          cn: '首页',
          en: 'Home'
        }
      }
    }
  },
  watch: {
    '$route.path': {
      handler: function (val) {
        if (val === '/') {
          // TODO:bug不知道为什么active设置为'/'不可以
          this.active = new Date() + ''
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
      let prodMenus = []
      let otherMenus = []
      if (res.length) {
        res.forEach((item) => {
          if (
            item.title[this.$lang] &&
            item.title[this.$lang] !== 'placeholder'
          ) {
            if (item.title.isProduct === '1') {
              prodMenus.push(item)
            } else {
              otherMenus.push(item)
            }
          }
        })
        this.prodMenus = prodMenus
        this.otherMenus = otherMenus
      }
    })
  },
  methods: {
    jumpTo(href) {
      if (href) {
        if (href.indexOf('//') > 0) {
          window.open(href)
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
    },
    // TODO:tab标签页无法选中的情况是因为鼠标移入时,tab页面还没显示出来,但是hover了,就设置值了,
    // 解决方法:tab展示出来才设置值
    // 原理,menu出现时,是把菜单本身的标签移入到body最下面,这时候判断还有tab的菜单(.prodMenuPopper)的父级是否是body就知道菜单是否显示出来了
    onOpenMenu() {
      if (!this.prodMenuInit) {
        setTimeout(() => {
          const prodMenuPopperParent =
            document.querySelector('.prodMenuPopper').parentElement
          // this.$nextTick(() => {
          if (prodMenuPopperParent.tagName.toLowerCase() === 'body') {
            this.selectedProdMenu = 'prodMenu0'
            this.prodMenuInit = true
          }
          // })
        }, 400)
      }
    },
    onHoverProdTabs(name) {
      // this.selectedProdMenu = name
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/color.scss';

.horizontalGolbalMenu {
  margin-top: 15px;
  flex: 1 0 auto;
  text-align: center;
  .el-menu.el-menu--horizontal {
    border: none !important;
    display: inline-block;
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
  .el-submenu__title,
  .el-menu-item {
    padding: 0 30px;
  }
  .homeMenu {
    color: #fff !important;
    border-bottom-color: transparent !important;
    background-color: transparent !important;
    padding-left: 0;
  }
}
.productMenuList {
  &.el-tabs.el-tabs--top {
    .el-tabs__active-bar.is-top {
      background-color: $themeColor;
    }
    .el-tabs__nav-wrap.is-top {
      // left: 25%;
    }
    // .el-tabs__header.is-top {
    //   border-top: 1px solid #e0e0e0;
    //   border-bottom: 1px solid #e0e0e0;
    //   box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
    //   height: 63px;
    //   margin-bottom: 0;
    // }
    .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
    .el-tabs__nav-scroll {
      width: 100% !important;
      margin: auto;
      .el-tabs__nav.is-top {
        // float: right;
        width: 100%;
        margin-top: 24px;
      }
      .is-active {
        // color: $themeColor;
        color: #fff;
      }
      .el-tabs__item {
        color: #fff;
        padding: 0 10px;
      }
      .el-tabs__item.is-active {
        // color: $themeColor;
        color: #fff;
      }
      .el-tabs__item:hover {
        // color: $themeColor;
        color: #fff;
      }
    }
  }
}
.tablet {
  div.el-menu--horizontal{
    & > ul {
      width: 90%;
    }
  }
}
div.el-menu--horizontal {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  left: 0 !important;
  top: 92px !important;
  .productMenuList {
    margin-bottom: 100px;
  }
  .rowItem {
    margin-bottom: 20px;
    display: inline-block;
    width: 20%;
  }
  .el-col-4 {
    margin-bottom: 20px;
  }
  & > ul {
    margin-bottom: 100px;
    width: 60%;
    margin-top: 0;
    // display: flex;
    // flex-direction: row;
    padding: 0 10%;
    background-color: transparent;
    padding-top: 30px;
    li.el-menu-item {
      height: 130px !important;
      width: 150px;
      &:hover {
        background-color: transparent !important;
        color: $themeColor !important;
      }
      .subThumb {
        width: 100px;
        // margin-left: 10px;
      }
      .subTitle {
        // margin-top: 5px;
        width: 100px;
      }
      .subTitle {
        text-align: center;
        font-size: 13px;
      }
    }
  }
}
div.prodMenuPopper {
  ul {
    padding: 0;
    margin: auto;
    width: 80%;
  }
}
.tablet {
  .horizontalGolbalMenu {
    .el-submenu__title,
    .el-menu-item {
      padding: 0 10px;
    }
  }
}
</style>