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
}