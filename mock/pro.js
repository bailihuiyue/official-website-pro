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
  "post /api/upload/uploadImage": () => "imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg",
  "get /menu/getAll": {
    data: '[{"title":{"cn":"方向盘","en":"menu1","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]},{"title":{"cn":"手柄","en":"menu2","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]},{"title":{"cn":"耳机","en":"menu3","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]},{"title":{"cn":"飞行摇杆","en":"menu1","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]},{"title":{"cn":"技术支持","en":"menu2","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]},{"title":{"cn":"关于公司","en":"menu3","href":"/product"},"children":[{"cn":"子菜单1","en":"subMenu1","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"},{"cn":"子菜单2","en":"subMenu2","img":"https://www.huion.com/uploadfile/20220523/g930l-index-icon.png","href":"/product"}]}]'
  },
  "post /menu/update": { data: true },
  "get /logo/get": {
    data: 'imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg'
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
}