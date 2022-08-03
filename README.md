项目架构介绍
1.vue2+element
2.组件或者页面按照功能划分,每一个页面或者组件,包含自己的接口(service.js)和vue页面,不再统一一个services.js文件,除了通用js功能放在utils,其他都是各文件夹独自管理
3.由于没有后端代码,目前使用mock,请使用在vscode中安装EasyMock,点击键盘f1启动,一般端口为9999,如果请求接口时浏览器报错,可能是因为EasyMock没加token的字段,自己配置下或者百度就好
4.多语言使用,前台的话右上角有语言切换按钮,点完了存到本地并且刷页面,this.$lang可以获取
5.后台admin写组件在每个页面别忘加上ChangeLocationAdmin组件,后台页面用$adminLang表示admin要操作的语言环境,别混了,切换完了调接口时就会给接口传数据,?lang=xxx,这时再读接口,接口就会返回指定语言的内容,做到了国际化,没用i18n,
6.已完成的功能:首页菜单,轮播图,footer,logo,多语言,以及他们的admin
7.图片地址是imgServer+接口返回拼接成的
8.ButtonGroup的默认选中状态靠数据的id判断,各种list(product.,app等)的分类搜索条件靠sku或者typeNo区分
<div>
<img src="https://gitee.com/Onces/images/raw/master/money.png" width=200>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://gitee.com/Onces/images/raw/master/zhifubaohongbao.jpg" width=200>
<div>觉得不错,请我喝杯奶茶吧~~
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
扫个红包,支持我一下</div>   
</div>
