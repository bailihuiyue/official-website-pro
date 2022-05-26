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
          'img': 'https://www.huion.com/uploadfile/20220523/g930l-index-icon.png',
          'menuItems': [
            {
              'cn': '标题1',
              'en': 'title1',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题2',
              'en': 'title2',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题3',
              'en': 'title3',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题4',
              'en': 'title4',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题5',
              'en': 'title5',
              'href': 'https://www.baidu.com'
            }
          ],
        },
        {
          'cn': '子菜单2',
          'en': 'subMenu2',
          'img': 'https://www.huion.com/uploadfile/20220523/g930l-index-icon.png',
          'menuItems': [
            {
              'cn': '标题1',
              'en': 'title1',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题2',
              'en': 'title2',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题3',
              'en': 'title3',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题4',
              'en': 'title4',
              'href': 'https://www.baidu.com'
            },
            {
              'cn': '标题5',
              'en': 'title5',
              'href': 'https://www.baidu.com'
            }
          ],
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
  }
}