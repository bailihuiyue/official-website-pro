import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home/index.vue')
    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: () => import('./views/News.vue'),
    // },
    // {
    //   path: '/newsdetails/:id',
    //   name: 'newsdetails',
    //   component: () => import('./views/NewsDetails.vue'),
    // },
    {
      path: '/productList',
      name: 'productList',
      component: () => import('./views/Product/ProductList.vue'),
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: () => import('./views/Product/ProductDetail.vue'),
    },
    {
      path: '/configGuide',
      name: 'configGuide',
      component: () => import('./views/ConfigGuide/index.vue'),
    },
    {
      path: '/configGuideDetail',
      name: 'configGuideDetail',
      component: () => import('./views/ConfigGuide/ConfigGuideDetail.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('./views/FAQ/index.vue'),
    },
    {
      path: '/faqDetail',
      name: 'faqDetail',
      component: () => import('./views/FAQ/FAQDetail.vue'),
    },
    {
      path: '/driver',
      name: 'driver',
      component: () => import('./views/Driver/index.vue'),
    },
    {
      path: '/appDownload',
      name: 'appDownload',
      component: () => import('./views/AppDownload/index.vue'),
    },
    {
      path: '/appDownloadDetail',
      name: 'appDownloadDetail',
      component: () => import('./views/AppDownload/AppDownloadDetail.vue'),
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('./views/ContactUs/index.vue'),
    },
    // {
    //   path: '/case',
    //   name: 'case',
    //   component: () => import('./views/Case.vue')
    // },
    // {
    //   path: '/casedetails/:id',
    //   name: 'casedetails',
    //   component: () => import('./views/CaseDetails.vue')
    // },
    // {
    //   path: '/goin',
    //   name: 'goin',
    //   component: () => import('./views/GoIn.vue')
    // },
    // {
    //   path: '/download',
    //   name: 'download',
    //   component: () => import('./views/Download.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/index.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      redirect:'/admin/user',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/Admin.vue'),
      children: [{
          path: '/admin/user',
          name: 'adminUser',
          component: () => import('./views/Admin/User/index.vue')
        },
        {
          path: '/admin/menu',
          name: 'adminMenu',
          component: () => import('./views/Admin/Menu/index.vue')
        },
        {
          path: '/admin/logo',
          name: 'adminLogo',
          component: () => import('./views/Admin/Logo/index.vue')
        },
        {
          path: '/admin/footer',
          name: 'adminFooter',
          component: () => import('./views/Admin/Footer/index.vue')
        },
        {
          path: '/admin/carousel',
          name: 'adminCarousel',
          component: () => import('./views/Admin/Carousel/index.vue')
        },
        {
          path: '/admin/productImgs',
          name: 'adminProductImgs',
          component: () => import('./views/Admin/ProductImgs/index.vue')
        },
        {
          path: '/admin/bottomSection',
          name: 'adminBottomSection',
          component: () => import('./views/Admin/BottomSection/index.vue')
        },
        {
          path: '/admin/productType',
          name: 'adminProductType',
          component: () => import('./views/Admin/Product/ProductType.vue')
        },
        {
          path: '/admin/productDetail',
          name: 'adminProductDetail',
          component: () => import('./views/Admin/Product/ProductDetail.vue')
        },
        {
          path: '/admin/configGuideDetail',
          name: 'adminConfigGuideDetail',
          component: () => import('./views/Admin/ConfigGuideDetail/index.vue'),
        },
        {
          path: '/admin/faq',
          name: 'adminFaq',
          component: () => import('./views/Admin/FAQ/FAQ.vue'),
        },
        {
          path: '/admin/question',
          name: 'adminQuestion',
          component: () => import('./views/Admin/FAQ/Question.vue'),
        },
        {
          path: '/admin/driver',
          name: 'adminDriver',
          component: () => import('./views/Admin/Driver/index.vue'),
        },
        {
          path: '/admin/appDownload',
          name: 'adminAppDownload',
          component: () => import('./views/Admin/AppDownload/index.vue'),
        },
        {
          path: '/admin/contactUs',
          name: 'adminContactUs',
          component: () => import('./views/Admin/ContactUs/Feedback.vue'),
        },
        // {
        //   path: '/admin/news',
        //   name: 'new',
        //   component: () => import('./views/Admin/News.vue')
        // },
        // {
        //   path: '/admin/cases',
        //   name: 'cases',
        //   component: () => import('./views/Admin/Cases.vue')
        // },
        // {
        //   path: '/admin/team',
        //   name: 'team',
        //   component: () => import('./views/Admin/Team.vue')
        // },
        // {
        //   path: '/admin/course',
        //   name: 'course',
        //   component: () => import('./views/Admin/Course.vue')
        // },
        // {
        //   path: '/admin/enterprise',
        //   name: 'enterprise',
        //   component: () => import('./views/Admin/Enterprise.vue')
        // },
        // {
        //   path: '/admin/honor',
        //   name: 'honor',
        //   component: () => import('./views/Admin/Honor.vue')
        // },
        // {
        //   path: '/admin/dictionary',
        //   name: 'dictionary',
        //   component: () => import('./views/Admin/Dictionary.vue')
        // }
      ]
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (localStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router