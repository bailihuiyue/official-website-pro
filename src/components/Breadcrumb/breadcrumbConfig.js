const home = {
  path: '/',
  title: {
    cn: '首页',
    en: 'Home'
  }
}

const productList = {
  path: '/productList',
  title: {
    cn: '产品列表',
    en: 'Product List'
  }
}

const productDetail = {
  title: {
    cn: '产品详情',
    en: 'Detail'
  }
}

const driver = {
  path: '/driver',
  title: {
    cn: '驱动下载',
    en: 'Driver Download'
  }
}

const configGuide = {
  path: '/configGuide',
  title: {
    cn: '设置教程',
    en: 'Config Guide'
  }
}

const configGuideDetail = {
  path: '/configGuideDetail',
  title: {
    cn: '设置教程详情',
    en: 'Detail'
  }
}

const faq = {
  path: '/faq',
  title: {
    cn: '常见问题',
    en: 'FAQ'
  }
}

const faqDetail = {
  path: '/faqDetail',
  title: {
    cn: '常见问题详情',
    en: 'FAQ Detail'
  }
}

const appDownload = {
  path: '/appDownload',
  title: {
    cn: 'APP 下载',
    en: 'APP Download'
  }
}

const appDownloadDetail = {
  path: '/appDownloadDetail',
  title: {
    cn: 'APP 详情',
    en: 'Detail'
  }
}

const contactUs = {
  path: '/contactUs',
  title: {
    cn: '联系我们',
    en: 'Contact Us'
  }
}

const aboutCompany = {
  path: '/contactUs',
  title: {
    cn: '关于公司',
    en: 'About Company'
  }
}

const companyHonor = {
  path: '/companyHonor',
  title: {
    cn: '荣誉勋章',
    en: 'Medal Of Honour'
  }
}

const companyState = {
  path: '/companyState',
  title: {
    cn: '公司动态',
    en: 'Company Status'
  }
}

const companyStateDetail = {
  path: '/companyStateDetail',
  title: {
    cn: '公司动态详情',
    en: 'Detail'
  }
}

const recruitment = {
  path: '/recruitment',
  title: {
    cn: '招纳精英',
    en: 'Recruitment'
  }
}

const offlineStore = {
  path: '/offlineStore',
  title: {
    cn: '体验店',
    en: 'Offline Store'
  }
}


export const breadcrumbList = {
  '/productList': [home, productList],
  '/productDetail': [home, productList, productDetail],
  '/driver': [home, driver],
  '/configGuide': [home, configGuide],
  '/configGuideDetail': [home, configGuide, configGuideDetail],
  '/faq': [home, faq],
  '/faqDetail': [home, faq, faqDetail],
  '/appDownload': [home, appDownload],
  '/appDownloadDetail': [home, appDownload, appDownloadDetail],
  '/contactUs': [home, contactUs],
  '/aboutCompany': [home, aboutCompany],
  '/companyHonor': [home, companyHonor],
  '/companyState': [home, companyState],
  '/companyStateDetail': [home, companyState, companyStateDetail],
  '/recruitment': [home, recruitment],
  '/offlineStore': [home, offlineStore],
}