项目架构介绍
1.vue2+element
2.组件或者页面按照功能划分,每一个页面或者组件,包含自己的接口(service.js)和vue页面,不再统一一个services.js文件,除了通用js功能放在utils,其他都是各文件夹独自管理
3.由于没有后端代码,目前使用mock,请使用在vscode中安装EasyMock,点击键盘f1启动,一般端口为9999,徐国请求接口时浏览器报错,可能是因为EasyMock没加token的字段,自己配置下或者百度就好
4.多语言使用,前台的话右上角有语言切换按钮,点完了存到本地并且刷页面,this.$lang可以获取
5.后台admin写组件在每个页面别忘加上ChangeLocationAdmin组件,后台页面用$adminLang表示admin要操作的语言环境,别混了,切换完了调接口时就会给接口传数据,?lang=xxx,这时再读接口,接口就会返回指定语言的内容,做到了国际化,没用i18n,
6.已完成的功能:首页菜单,轮播图,footer,logo,多语言,以及他们的admin,主要样式参考https://www.huion.com
7.图片地址是imgserver+接口返回拼接成的

8.todo:未完成的功能,按照https://www.huion.com网站的样子,
一.还需要轮播图下面上传三个大图,当然可以更多(最多5个吧),加上一个4宫格的图,这俩的admin可以参考轮播图的,添加完了再前台显示就好了
二.产品详情页的编写,详情页也是双语的,中文录一份,英文录一份,需要录入以下信息
   a.产品名称(搜索用)
   b.产品详情(富文本,参照人家给的例子,能插入锚点)
   c.注意兼容性(pc,手机)
   d.在产品列表中显示保存后生成的id,用来链接菜单等跳转到这里
   e.获取产品详情时也要传给后端$lang,用来返回中文或者英文的内容


<div>
<img src="https://gitee.com/Onces/images/raw/master/money.png" width=200>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://gitee.com/Onces/images/raw/master/zhifubaohongbao.jpg" width=200>
<div>觉得不错,请我喝杯奶茶吧~~
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
扫个红包,支持我一下</div>   
</div>
