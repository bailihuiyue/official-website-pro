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
            "img": "logo.png",
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
            "img": "logo.png",
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
          "img": null,
          "children": null,
          "title": null
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
            "img": "logo.png",
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
            "img": "logo.png",
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
          "title": null
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
            "img": "logo.png",
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
            "img": "logo.png",
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
          "title": null
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
            "img": "logo.png",
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
      }
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
      img: `[{
        "img":"http://118.190.209.120:8085/pms/20220627101406.png",
        "href":"https://www.baidu.com"
        },
        {
        "img":"http://118.190.209.120:8085/pms/20220627101432.png",
        "href":"https://www.baidu.com"
        },
        {
        "img":"http://118.190.209.120:8085/pms/20220627101441.png",
        "href":"https://www.baidu.com"
        },
        {
        "img":"http://118.190.209.120:8085/pms/20220627101450.png",
        "href":"https://www.baidu.com"
        },
        {
        "img":"http://118.190.209.120:8085/pms/20220627101459.png",
        "href":"https://www.baidu.com"
        }]`,
      list: `[{"cn":"产品","en":"Products","children":[{"cn":"方向盘","en":"Racing Wheel","hrefcn":"/productDetail?id=17","hrefen":"/productDetail?id=17"},{"cn":"游戏手柄","en":"Game Controller","hrefcn":"/productDetail?id=16","hrefen":"/productDetail?id=16"},{"cn":"PXN耳机","en":"Gaming Headset","hrefcn":"/productDetail?id=23","hrefen":"/productDetail?id=23"},{"cn":"飞行摇杆","en":"Arcade Stick","hrefcn":"/productDetail?id=22","hrefen":"/productDetail?id=22"},{"cn":"格斗摇杆","en":"Fighting Stick","hrefcn":"/productDetail?id=22","hrefen":"/productDetail?id=22"}]},{"cn":"技术支持","en":"Technical Support","children":[{"cn":"驱动下载","en":"Driver Download","hrefcn":"/driver","hrefen":"/driver"},{"cn":"设置教程","en":"Config Guide","hrefcn":"/configGuide","hrefen":"/configGuide"},{"cn":"FAQ","en":"FAQ","hrefcn":"/faq","hrefen":"/faq"},{"cn":"APP下载","en":"APP Download","hrefcn":"/appDownload","hrefen":"/appDownload"},{"cn":"联系我们","en":"Contact Us","hrefcn":"/contactUs","hrefen":"/contactUs"}]},{"cn":"莱仕达","en":"About us","children":[{"cn":"关于公司","en":"About Company","hrefcn":"/aboutCompany","hrefen":"/aboutCompany"},{"cn":"荣誉勋章","en":"Company Honor","hrefcn":"/companyHonor","hrefen":"/companyHonor"},{"cn":"公司动态","en":"Company State","hrefcn":"/companyState","hrefen":"/companyState"},{"cn":"招纳精英","en":"Recruitment","hrefcn":"/recruitment","hrefen":"/recruitment"}]}]`,
      copyright: 'Copyright © 2020 Shenzhen PXN Electronic Technology Co., Ltd.'
    }
  },
  'post /footer/set': { data: true },
  // 轮播图
  'get /carousel/getAll': {
    data: [
      {
        id: '0',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg', href: '/product'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg', href: '/product'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg', href: '/product'
      },
      {
        id: '3',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQDeIdHtWAAVBMqa_elsAADFBQJ_sG0ABUFK945.jpg', href: '/product'
      },
      {
        id: '4',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg', href: '/product'
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
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg', href: '/product'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg', href: '/product'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg', href: '/product'
      },
      {
        id: '3',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQDeIdHtWAAVBMqa_elsAADFBQJ_sG0ABUFK945.jpg', href: '/product'
      },
      {
        id: '4',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg', href: '/product'
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
      "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg",
      "id": 10000
    }, {
      "href": "http://www.shkjem.com/video/kj.mp4",
      "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg",
      "id": 10001
    }, {
      "href": "/product",
      "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg",
      "id": 10002
    }, {
      "imgs": [{
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQDeIdHtWAAVBMqa_elsAADFBQJ_sG0ABUFK945.jpg",
        "id": 10003
      }, {
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg",
        "id": 10004
      }, {
        "href": "/product",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg",
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
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
        title: {
          en: 'shoubing',
          cn: '手柄',
        },
        sku: 'sb'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg',
        title: {
          en: 'fangxiangpan',
          cn: '方向盘',
        },
        sku: 'fxp'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg',
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
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
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
      img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg',
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
          title: '莱仕达灵动3 PRO PXN-9613 游戏手柄驱动',
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
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg', href: '/product'
        },
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg', href: '/product'
        }
      ],
      'honorEvents': [
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQDeIdHtWAAVBMqa_elsAADFBQJ_sG0ABUFK945.jpg', href: '/product'
        },
        {
          id: '@num()',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg', href: '/product'
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
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg',
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        }
      ]
    }
  },
  "get /companyState/detail": {
    data: {
      id: '@num()',
      img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/01/04/ChMkK2JzQFKIP4aoADgRK9wwHkkAADFBwF2LX4AOBFD704.jpg',
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
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
        title: {
          en: 'shoubing',
          cn: '手柄',
        },
        typeNo: '0'
      },
      {
        id: '1',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg',
        title: {
          en: 'fangxiangpan',
          cn: '方向盘',
        },
        typeNo: '1'
      },
      {
        id: '2',
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg',
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
}