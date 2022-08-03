module.exports = {
  // 后台用户管理
  "post /user/login": { data: { bRes: true, Ticket: "abc" } },
  "get /user/getUserAll": {
    data: [
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
      {
        id: "@uuid()",
        LoginName: "@cstr(2,6)",
        Password: "@str(6,18)",
        IsAction: "true",
        createTime: "@time()",
      },
    ],
  },
  "post /user/createUser": { data: true },
  "post /user/modifiedUser": { data: true },
  "get /user/deleteUser": { data: true },
  // 图片上传
  "post /api/upload/uploadImage": { data: 'logo.png' },
  // 视频,pdf等文件上传
  "post /api/upload/uploadfile": { data: 'logo.png' },
  // 菜单
  "get /menu/getAll": {
    "code": 200,
    "msg": "成功",
    "data": [
      {
        "children": [
          {
            "id": 2,
            "pid": 1,
            "cn": "方向盘2",
            "en": "subMenu1",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 3,
            "pid": 1,
            "cn": "方向盘2",
            "en": "subMenu2",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 1,
          "pid": 0,
          "cn": "方向盘",
          "en": "Racing Wheel",
          "hrefcn": "/productList",
          "hrefen": "/productList",
          "imgcn": null,
          "children": null,
          "title": null,
          "isProduct": "1"
        }
      },
      {
        "children": [
          {
            "id": 5,
            "pid": 4,
            "cn": "手柄1",
            "en": "subMenu1",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 6,
            "pid": 4,
            "cn": "手柄2",
            "en": "subMenu2",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 4,
          "pid": 0,
          "cn": "手柄",
          "en": "Game Controller",
          "hrefcn": "/productList",
          "hrefen": "/productList",
          "img": null,
          "children": null,
          "title": null,
          "isProduct": "1"
        }
      },
      {
        "children": [
          {
            "id": 8,
            "pid": 7,
            "cn": "耳机1",
            "en": "subMenu1",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 9,
            "pid": 7,
            "cn": "耳机2",
            "en": "subMenu2",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 7,
          "pid": 0,
          "cn": "耳机",
          "en": "Gaming Headset",
          "hrefcn": "/productList",
          "hrefen": "/productList",
          "img": null,
          "children": null,
          "title": null,
          "isProduct": "1"
        }
      },
      {
        "children": [
          {
            "id": 11,
            "pid": 10,
            "cn": "飞行摇杆2",
            "en": "subMenu1",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 12,
            "pid": 10,
            "cn": "飞行摇杆1",
            "en": "subMenu2",
            "hrefcn": "/productList",
            "hrefen": "/productList",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 10,
          "pid": 0,
          "cn": "飞行摇杆",
          "en": "Arcade Stick",
          "hrefcn": "/productList",
          "hrefen": "/productList",
          "img": null,
          "children": null,
          "title": null,
          "isProduct": "1"
        }
      }, 
      {
        "children": [],
        "title": {
          "id": 17,
          "pid": 0,
          "cn": "placeholder",
          "en": "placeholder",
          "hrefcn": "",
          "hrefen": "",
          "img": null,
          "children": null,
          "title": null
        }
      },
      {
        "children": [
          {
            "id": 14,
            "pid": 13,
            "cn": "驱动下载",
            "en": "Drivers",
            "hrefcn": "/driver",
            "hrefen": "/driver",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 15,
            "pid": 13,
            "cn": "设置教程",
            "en": "Config Guide",
            "hrefcn": "/configGuide",
            "hrefen": "/configGuide",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 16,
            "pid": 13,
            "cn": "常见问题",
            "en": "FAQ",
            "hrefcn": "/faq",
            "hrefen": "/faq",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 17,
            "pid": 13,
            "cn": "APP下载",
            "en": "APP Download",
            "hrefcn": "/appDownload",
            "hrefen": "/appDownload",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 18,
            "pid": 13,
            "cn": "联系我们",
            "en": "Contact Us",
            "hrefcn": "/contactUs",
            "hrefen": "/contactUs",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 13,
          "pid": 0,
          "cn": "技术支持",
          "en": "Support",
          "hrefcn": "/contactUs",
          "hrefen": "/contactUs",
          "img": null,
          "children": null,
          "title": null
        }
      },
      {
        "children": [
          {
            "id": 16,
            "pid": 16,
            "cn": "关于公司",
            "en": "About Company",
            "hrefcn": "/aboutCompany",
            "hrefen": "/aboutCompany",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 17,
            "pid": 16,
            "cn": "荣誉勋章",
            "en": "Company Honor",
            "hrefcn": "/companyHonor",
            "hrefen": "/companyHonor",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 18,
            "pid": 16,
            "cn": "公司动态",
            "en": "Company News",
            "hrefcn": "/companyState",
            "hrefen": "/companyState",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 19,
            "pid": 16,
            "cn": "招纳精英",
            "en": "Recruitment",
            "hrefcn": "/recruitment",
            "hrefen": "/recruitment",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          },
          {
            "id": 20,
            "pid": 16,
            "cn": "线下体验店",
            "en": "Offline Store",
            "hrefcn": "/offlineStore",
            "hrefen": "/offlineStore",
            "imgcn": "logo.png",
            "imgen": "logo.png",
            "children": null,
            "title": null
          }
        ],
        "title": {
          "id": 16,
          "pid": 0,
          "cn": "关于公司",
          "en": "About us",
          "hrefcn": "/productList",
          "hrefen": "/productList",
          "img": null,
          "children": null,
          "title": null
        }
      },
    ]
  },
  "post /menu/add": { data: true },
  "post /menu/modify": { data: true },
  "post /menu/delete": { data: true },
  // Logo
  "get /logo/get": {
    data: 'logo.png'
  },
  "post /logo/modify": {
    data: { data: true }
  },
  // 底部
  'get /footer/get': {
    data: {
      img: `{"en":[{"img":"logo.png","href":"https://www.baidu.com","txt":"Facebook"},{"img":"logo.png","href":"https://www.baidu.com","txt":"Instagram"},{"img":"logo.png","href":"https://twitter.com/jiucaigame","txt":"Twinteer"},{"img":"logo.png","href":"https://www.baidu.com","txt":"Youtube"},{"img":"logo.png","href":"https://www.baidu.com","txt":"Shop"}],"cn":[{"img":"logo.png","href":"https://www.baidu.com","txt":"微博"},{"img":"logo.png","href":"https://www.baidu.com","txt":"bilbil"},{"img":"logo.png","href":"https://www.baidu.com","txt":"贴吧"},{"img":"logo.png","href":"https://www.baidu.com","txt":"京东旗舰店"},{"img":"logo.png","href":"https://www.baidu.com","txt":"天猫旗舰店"}]}`,
      list: `[{"cn":"产品","en":"Products","children":[{"cn":"方向盘","en":"Racing Wheel","hrefcn":"/productDetail?id=17","hrefen":"/productDetail?id=17"},{"cn":"游戏手柄","en":"Game Controller","hrefcn":"/productDetail?id=16","hrefen":"/productDetail?id=16"},{"cn":"jiucai耳机","en":"Gaming Headset","hrefcn":"/productDetail?id=23","hrefen":"/productDetail?id=23"},{"cn":"飞行摇杆","en":"Arcade Stick","hrefcn":"/productDetail?id=22","hrefen":"/productDetail?id=22"},{"cn":"格斗摇杆","en":"Fighting Stick","hrefcn":"/productDetail?id=22","hrefen":"/productDetail?id=22"}]},{"cn":"技术支持","en":"Technical Support","children":[{"cn":"驱动下载","en":"Driver Download","hrefcn":"/driver","hrefen":"/driver"},{"cn":"设置教程","en":"Config Guide","hrefcn":"/configGuide","hrefen":"/configGuide"},{"cn":"FAQ","en":"FAQ","hrefcn":"/faq","hrefen":"/faq"},{"cn":"APP下载","en":"APP Download","hrefcn":"/appDownload","hrefen":"/appDownload"},{"cn":"联系我们","en":"Contact Us","hrefcn":"/contactUs","hrefen":"/contactUs"}]},{"cn":"韭菜","en":"About us","children":[{"cn":"关于公司","en":"About Company","hrefcn":"/aboutCompany","hrefen":"/aboutCompany"},{"cn":"荣誉勋章","en":"Company Honor","hrefcn":"/companyHonor","hrefen":"/companyHonor"},{"cn":"公司动态","en":"Company State","hrefcn":"/companyState","hrefen":"/companyState"},{"cn":"招纳精英","en":"Recruitment","hrefcn":"/recruitment","hrefen":"/recruitment"}]}]`,
      copyright: 'Copyright © 2020 Shenzhen jiucai Electronic Technology Co., Ltd.'
    }
  },
  'post /footer/set': { data: true },
  // 轮播图
  'get /carousel/getAll': {
    data: [
      {
        id: '0',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg', href: '/product'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg', href: '/product'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4WIM169AABbUcjr_00AANGKwHs7dsAAFtp764.jpg', href: '/product'
      },
      {
        id: '3',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWV27z4eIdWNHAACByDKsCqwAANGKwIB5esAAIHg473.jpg', href: '/product'
      },
      {
        id: '4',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg', href: '/product'
      }
    ]
  },
  "post /carousel/add": { data: true },
  "post /carousel/modify": { data: true },
  "get /carousel/delete": { data: true },
  // 产品大图
  'get /productImgs/getAll': {
    data: [
      {
        id: '0',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg', href: '/product'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg', href: '/product'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4WIM169AABbUcjr_00AANGKwHs7dsAAFtp764.jpg', href: '/product'
      },
      {
        id: '3',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWV27z4eIdWNHAACByDKsCqwAANGKwIB5esAAIHg473.jpg', href: '/product'
      },
      {
        id: '4',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg', href: '/product'
      }
    ]
  },
  "post /productImgs/add": { data: true },
  "post /productImgs/modify": { data: true },
  "get /productImgs/delete": { data: true },
  // 底部四图
  'get /bottomImg/getAll': {
    "code": 200,
    "msg": "成功",
    "data": [{
      "href": "/product",
      "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg",
      "id": 10000
    }, {
      "href": "http://www.shkjem.com/video/kj.mp4",
      "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg",
      "id": 10001
    }, {
      "href": "/product",
      "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4WIM169AABbUcjr_00AANGKwHs7dsAAFtp764.jpg",
      "id": 10002
    }, {
      "imgs": [{
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWV27z4eIdWNHAACByDKsCqwAANGKwIB5esAAIHg473.jpg",
        "id": 10003
      }, {
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg",
        "id": 10004
      }, {
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg",
        "id": 10006
      }],
      "id": 4
    }]
  },
  "post /bottomImg/add": { data: true },
  "post /bottomImg/modify": { data: true },
  "get /bottomImg/delete": { data: true },
  // 产品类型
  'get /product/type/getAll': {
    data: [
      {
        id: '0',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg',
        title: {
          en: 'shoubing',
          cn: '手柄',
        },
        sku: 'sb'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg',
        title: {
          en: 'fangxiangpan',
          cn: '方向盘',
        },
        sku: 'fxp'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4WIM169AABbUcjr_00AANGKwHs7dsAAFtp764.jpg',
        title: {
          en: 'erji',
          cn: '耳机',
        },
        sku: 'ej'
      },
    ]
  },
  "post /productType/add": { data: true },
  "post /productType/modify": { data: true },
  "get /productType/delete": { data: true },
  // 产品管理
  "post /product/list": {
    data: {
      currentPage: 1,
      pageSize: 6,
      total: 7,
      "list|8": [
        {
          id: "@num()",
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg',
          sku: 's1'
        }
      ]
    }
  },
  "get /product/getAll": {
    data: {
      id: '1',
      title: 'Redmi 9A',
      productDetail: `<video class="tinyVideo" src="http://www.shkjem.com/video/kj.mp4" controls="controls">
      您的浏览器不支持 video 标签。
      </video>
      <a href=\"http://localhost:9999/logo.png\" target=\"_blank\" rel=\"noopener\">点击下载</a>
      <p style="background:red">productDetail</p>`,
      productParameter: '<p style="background:yellow">productParameter</p>',
      technicalSupport: `<video class="tinyVideo" src="http://www.shkjem.com/video/kj.mp4" controls="controls">
      您的浏览器不支持 video 标签。
      </video>
      <a href=\"http://localhost:9999/logo.png\" target=\"_blank\" rel=\"noopener\">点击下载</a><p style="background:blue">technicalSupport</p>`
    }
  },
  'get /product/search': {
    data: [
      { value: '1', id: 'a' },
      { value: '2', id: 'b' },
      { value: '3', id: 'c' }
    ]
  },
  'get /product/detail': {
    data: {
      id: "1",
      content: `<div>fake html</div>
      <video class="tinyVideo" src="http://www.shkjem.com/video/kj.mp4" controls="controls">
      您的浏览器不支持 video 标签。
      </video>`
    }
  },
  "post /product/add": { data: true },
  "post /product/modify": { data: true },
  "get /product/delete": { data: true },
  // 设置教程
  "post /configGuide/list": {
    data: {
      currentPage: 1,
      pageSize: 12,
      total: 13,
      "list|12": [
        {
          id: "@num()",
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        }
      ]
    }
  },
  "get /configGuide/detail": {
    data: {
      id: '0',
      title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程',
      img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg',
      video: 'http://www.shkjem.com/video/kj.mp4',
      content: '<p>13131</p>'
    }
  },
  "post /configGuide/add": { data: true },
  "post /configGuide/modify": { data: true },
  "get /configGuide/delete": { data: true },
  // 常见问题
  "post /faq/list": {
    data: {
      currentPage: 1,
      pageSize: 8,
      total: 9,
      "list|8": [
        {
          id: "@num()",
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        }
      ]
    }
  },
  "get /faq/detail": {
    data: {
      id: '@num()',
      title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
      desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx',
      content: '<p>常见问题</p>'
    }
  },
  "post /faq/add": { data: true },
  "post /faq/modify": { data: true },
  "get /faq/delete": { data: true },
  // 留言反馈(用户提问表单)
  "get /question/detail": {
    data: {
      "id": "@num()",
      "name": "name",
      "phone": "phone",
      "email": "email",
      "title": "title",             //xx
      "productName": "productName", //xx
      "detail": "detail\ndetail\ndetail",
      "companyAddress": "1",
      "companyName": "1",
    }
  },
  "get /question/list": {
    data: {
      "list|4": [{
        "id": "@num()",
        "title": "title1",
        "productName": "productName",
        "companyName": 'companyName',
        "phone": "phone"
      }]
    }
  },
  "post /question/add": { data: true },
  "get /question/delete": { data: true },
  // 驱动
  "post /driver/list": {
    data: {
      currentPage: 1,
      pageSize: 10,
      total: 11,
      "list|10": [
        {
          id: "@num()",
          title: '韭菜灵动3 PRO jiucai-9613 游戏手柄驱动',
          desc: '运行环境 XP/Vista/Win7/Win8/Win10',
          driverUrl: 'test.exe',
          pdfUrl: 'test.exe'
        }
      ]
    }
  },
  "get /driver/detail": {
    data: {
      id: '@num()',
      title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
      desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx',
      driverUrl: 'test.exe',
      pdfUrl: 'test.exe'
    }
  },
  "post /driver/add": { data: true },
  "post /driver/modify": { data: true },
  "get /driver/delete": { data: true },
  // app 下载
  "post /appDownload/list": {
    data: {
      currentPage: 1,
      pageSize: 10,
      total: 11,
      "list|10": [
        {
          id: "@num()",
          title: '智玩社区 app_android'
        }
      ]
    }
  },
  "get /appDownload/detail": {
    data: {
      id: "@num()",
      title: '智玩社区 app_android',
      content: '<p>appDownload</p>',
      appUrl: 'test.exe'
    }
  },
  "post /appDownload/add": { data: true },
  "post /appDownload/modify": { data: true },
  "get /appDownload/delete": { data: true },
  // 关于公司
  "get /aboutCompany/getAll": {
    data: {
      aboutUs: '<p>aboutUs</p>',
      investmentPolicy: '<p>investmentPolicy</p>',
      teamPresence: '<p>teamPresence</p>'
    }
  },
  "post /aboutCompany/modify": { data: true },
  // 公司荣誉
  "get /companyHonor/getAll": {
    data: {
      'medalOfHonour': [
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg', href: '/product'
        },
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg', href: '/product'
        }
      ],
      'honorEvents': [
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWV27z4eIdWNHAACByDKsCqwAANGKwIB5esAAIHg473.jpg', href: '/product'
        },
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg', href: '/product'
        }
      ],
    }
  },
  "post /companyHonor/modify": { data: true },
  "post /companyHonor/add": { data: true },
  "get /companyHonor/delete": { data: true },
  // 新闻
  "post /companyState/list": {
    data: {
      currentPage: 1,
      pageSize: 6,
      total: 7,
      "list|6": [
        {
          id: "@num()",
          img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg',
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        }
      ]
    }
  },
  "get /companyState/detail": {
    data: {
      id: '@num()',
      img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4OIWOJCAAB_bX6eGswAANGKwHaSg4AAH-F600.jpg',
      title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
      desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx',
      content: '<p>companyState</p>'
    }
  },
  "post /companyState/add": { data: true },
  "post /companyState/modify": { data: true },
  "get /companyState/delete": { data: true },
  // 招聘
  "get /recruitment/getAll": {
    data: {
      id: '@num()',
      content: '<p>ecommerceManager</p>'
    }
  },
  "post /recruitment/modify": { data: true },
  // 分类管理:1.驱动2.设置教程3.app 4.常见问题
  'get /classify/getAll': {
    data: [
      {
        id: '0',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g4/M09/00/0A/ChMlzF27z4GIUDxGAABgVSIskdUAAYQ2gCq2B4AAGBt917.jpg',
        title: {
          en: 'shoubing',
          cn: '手柄',
        },
        typeNo: '0'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl270OqIJh4dAABflRY2JtIAANGLAPa0U8AAF-t089.jpg',
        title: {
          en: 'fangxiangpan',
          cn: '方向盘',
        },
        typeNo: '1'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g2/M00/04/02/ChMlWl27z4WIM169AABbUcjr_00AANGKwHs7dsAAFtp764.jpg',
        title: {
          en: 'erji',
          cn: '耳机',
        },
        typeNo: '2'
      },
    ]
  },
  "post /classify/add": { data: true },
  "post /classify/modify": { data: true },
  "get /classify/delete": { data: true },
  // 视频墙
  "get /videoBackground/getAll": {
    data: {
      id: '@num()',
      title: 'MOZA Mini MX',
      desc: '简易拍 拍易剪',
      videoBg: 'https://www.gudsen.com/home_en/img/img_cn/PromotionVideo.mp4?v1',
      videoPop: 'https://www.gudsen.com/home_en/img/img_cn/PromotionVideo.mp4?v1'
    }
  },
  "post /videoBackground/modify": { data: true },
  // 体验店
  "get /offlineStore/detail": {
    data: {
      id: '@num()',
      content: '<p style="font-size:16px">@cstr(2000,5000)</p>'
    }
  },
  "post /offlineStore/modify": { data: true },
}