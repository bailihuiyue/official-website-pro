module.exports = {
  "get /menu/getAll": {
    data: [
      {
        'cn': '菜单1',
        'en': 'menu1',
        'href': '/product'
      },
      {
        'cn': '菜单2',
        'en': 'menu2',
        'children': [{
          'cn': '子菜单1',
          'en': 'subMenu1',
          'href': 'https://www.baidu.com'
        },
        {
          'cn': '子菜单2',
          'en': 'subMenu2',
          'href': 'https://www.baidu.com'
        }
        ]
      },
      {
        'cn': '菜单3',
        'en': 'menu3',
        'href': '/product'
      },
    ]
  },
  "post /menu/set": { data: true },
  "get /logo/get": {
    data: 'imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg'
  },
  'get /footer/get': {
    data: {
      img: 'http://shkjgw.shkjem.com/imagestore/2020/0605/439332ec-11c0-440c-8800-d94b0479c22c.jpg',
      list: [
        {
          title: '企业信息',
          children: [{
            title: '发展历程',
            href: 'https://www.baidu.com'
          },
          {
            title: '企业文化',
            href: 'https://www.baidu.com'
          },
          {
            title: '资质荣誉',
            href: 'https://www.baidu.com'
          },
          {
            title: '合作伙伴',
            href: 'https://www.baidu.com'
          }]
        },
        {
          title: '新闻资讯',
          children: [{
            title: '公司新闻',
            href: 'https://www.baidu.com'
          },
          {
            title: '行业动态',
            href: 'https://www.baidu.com'
          }]
        },
        {
          title: '产品中心',
          children: [{
            title: '介绍视频',
            href: 'https://www.baidu.com'
          },
          {
            title: '管理模式',
            href: 'https://www.baidu.com'
          },
          {
            title: '平台目标',
            href: 'https://www.baidu.com'
          },
          {
            title: '功能模块',
            href: 'https://www.baidu.com'
          }]
        },
        {
          title: '联系我们',
          children: [{
            title: '邮箱：websitelml@163.com'
          },
          {
            title: '电话：021-55802368',
            href: ''
          },
          {
            title: '地址：上海市杨浦区翔殷路128号12号楼101',
            href: ''
          }]
        }
      ],
      copyright: 'Copyright © 2020 Shenzhen PXN Electronic Technology Co., Ltd.'
    }
  },
  'post /footer/set': { data: true }
}