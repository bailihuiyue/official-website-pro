module.exports = {
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
  "post /api/upload/uploadImage": { data: 'logo.png' },
  "post /api/upload/uploadfile": { data: 'logo.png' },
  "get /menu/getAll": {
    data: [
      {
        "title": {
          "cn": "方向盘",
          "en": "menu1",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      },
      {
        "title": {
          "cn": "手柄",
          "en": "menu2",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      },
      {
        "title": {
          "cn": "耳机",
          "en": "menu3",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      },
      {
        "title": {
          "cn": "飞行摇杆",
          "en": "menu1",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      },
      {
        "title": {
          "cn": "技术支持",
          "en": "menu2",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      },
      {
        "title": {
          "cn": "关于公司",
          "en": "menu3",
          "href": "/product"
        },
        "children": [
          {
            "cn": "子菜单1",
            "en": "subMenu1",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          },
          {
            "cn": "子菜单2",
            "en": "subMenu2",
            "img": "https://www.huion.com/uploadfile/20220523/g930l-index-icon.png",
            "href": "/product"
          }
        ]
      }
    ]
  },
  "post /menu/update": { data: true },
  "get /logo/get": {
    data: 'logo.png'
  },
  'get /footer/get': {
    data: {
      img: 'http://shkjgw.shkjem.com/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg',
      list: [
        {
          'cn': '企业信息',
          'en': 'q',
          children: [{
            'cn': '发展历程',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '企业文化',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '资质荣誉',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '合作伙伴',
            'en': 'q',
            href: 'https://www.baidu.com'
          }]
        },
        {
          'cn': '新闻资讯',
          'en': 'q',
          children: [{
            'cn': '公司新闻',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '行业动态',
            'en': 'q',
            href: 'https://www.baidu.com'
          }]
        },
        {
          'cn': '产品中心',
          'en': 'q',
          children: [{
            'cn': '介绍视频',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '管理模式',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '平台目标',
            'en': 'q',
            href: 'https://www.baidu.com'
          },
          {
            'cn': '功能模块',
            'en': 'q',
            href: 'https://www.baidu.com'
          }]
        },
        {
          'cn': '联系我们',
          'en': 'q',
          children: [{
            'cn': '邮箱：websitelml@163.com',
            'en': 'q',
          },
          {
            'cn': '电话：021-55802368',
            'en': 'q',
            href: ''
          },
          {
            'cn': '地址：上海市杨浦区翔殷路128号12号楼101',
            'en': 'q',
            href: ''
          }]
        }
      ],
      copyright: 'Copyright © 2020 Shenzhen PXN Electronic Technology Co., Ltd.'
    }
  },
  'post /footer/set': { data: true },
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
      content: '<div>fake html</div>'
    }
  },

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

  'get /bottomImg/getAll': {
    data: [
      {
        "id": "0",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg",
        "href": "/product"
      },
      {
        "id": "1",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg",
        "href": "http://www.shkjem.com/video/kj.mp4"
      },
      {
        "id": "2",
        "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg",
        "href": "/product"
      },
      {
        "id": "3",
        "imgs": [
          {
            "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg",
            "href": "/product"
          },
          {
            "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg",
            "href": "/product"
          },
          {
            "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0A/09/ChMkK2JgwtaIUhjoAA2TYD3keJgAACqPAOgWDQADZN4363.jpg",
            "href": "/product"
          },
          {
            "img": "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg",
            "href": "/product"
          }
        ]
      }
    ]
  },
  "post /bottomImg/add": { data: true },
  "post /bottomImg/modify": { data: true },
  "get /bottomImg/delete": { data: true },

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

  "post /product/list": {
    data: {
      currentPage: 1,
      pageSize: 6,
      total: 7,
      list: [
        {
          id: 0,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's1'
        },
        {
          id: 1,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's2'
        },
        {
          id: 2,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's3'
        },
        {
          id: 3,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's4'
        },
        {
          id: 4,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's5'
        },
        {
          id: 5,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's6'
        },
        {
          id: 6,
          title: 'p20方向盘',
          img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3tWIfdDDABt8TGc1rDYAADuTAMlpqUAG3xk223.jpg',
          sku: 's7'
        }
      ]
    }
  },
  "get /product/getAll": {
    data: {
      id: '1',
      title: 'Redmi 9A',
      productDetail: '<p style="background:red">productDetail</p>',
      productParameter: '<p style="background:yellow">productParameter</p>',
      technicalSupport: '<p style="background:blue">technicalSupport</p>'
    }
  },
  "post /product/add": { data: true },
  "post /product/modify": { data: true },
  "get /product/delete": { data: true },

  "post /configGuide/list": {
    data: {
      currentPage: 1,
      pageSize: 12,
      total: 13,
      list: [
        {
          id: 0,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 1,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 2,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 3,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 4,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 5,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 6,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 7,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 8,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 9,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 10,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 11,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
        {
          id: 12,
          title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程'
        },
      ]
    }
  },
  "get /configGuide/detail": {
    data: {
      id: '0',
      title: '<<欧洲卡车模拟2>> 雷池 方向盘 设置教程',
      video: {
        img: 'https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g7/M00/0B/0A/ChMkLGKO3v2IKhsDAB5rwBc3ulcAADuUAFoJwkAHmvY599.jpg',
        src: 'http://www.shkjem.com/video/kj.mp4'
      },
      content: '<p>13131</p>'
    }
  },
  "post /configGuide/add": { data: true },
  "post /configGuide/modify": { data: true },
  "get /configGuide/delete": { data: true },



  "post /faq/list": {
    data: {
      currentPage: 1,
      pageSize: 8,
      total: 9,
      list: [
        {
          id: 0,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 1,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 2,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 3,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 4,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 5,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 6,
          title: 'How to Install/Uninstall Huion v14 Driver on Mac OS(Video)',
          desc: 'Watch the video below on how to install and uninstall a Version 14 driver on xxxxxxxxxxxxxxxxxxx'
        },
        {
          id: 7,
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

  "get /question/detail": {
    data: {
      "id": "@num()",
      "name": "name",
      "phone": "phone",
      "email": "email",
      "title": "title",
      "productName": "productName",
      "detail": "detail\ndetail\ndetail"
    }
  },
  "get /question/list": {
    data:
      [{
        "id": 0,
        "title": "title1",
        "productName": "productName",
      }, {
        "id": 1,
        "title": "title2",
        "productName": "productName",
      }, {
        "id": 2,
        "title": "title3",
        "productName": "productName",
      }]
  },
  "post /question/add": { data: true },
  "get /question/delete": { data: true }
}