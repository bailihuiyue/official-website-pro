import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { imgServer, getLang, getToken, getAdminLang, baseURL, videoURL } from "@/utils/utils";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";
// Vue.use(VueAwesomeSwiper);

// import VideoPlayer from "vue-video-player";
// import "video.js/dist/video-js.css";
// import "vue-video-player/src/custom-theme.css";
// Vue.use(VideoPlayer);

// import VueLazyload from "vue-lazyload";
// Vue.use(VueLazyload, {
//   //完全显示的时候加载
//   preLoad: 1,
//   //失败时显示的图片
//   error: require("./assets/img/error.png"),
//   //加载时显示的GIF图
//   loading: require("./assets/img/loading.gif"),
//   //尝试加载几次
//   attempt: 2,
// });

Vue.config.productionTip = false;

// if (new Date().getMonth() >= 7) {
//   alert('系统已过期')
//   throw new Error()
// }

// 图片服务器地址
Vue.prototype.$imgServer = imgServer;
Vue.prototype.$baseURL = baseURL;
Vue.prototype.$videoURL = videoURL;

Vue.prototype.$lang = getLang();
Vue.prototype.$adminLang = getAdminLang();
Vue.prototype.$token = getToken();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

document.title = getLang() === 'en' ?
  'Shenzhen PXN Electronic Technology Co., Ltd | PXN Racing Wheel, Game Controller, Arcade Stick for Xbox One, PS4 Switch, PC' : '莱仕达－专业游戏外设品牌|游戏方向盘|手柄|摇杆|安卓手柄|PS4|Xbox One|苹果手柄'