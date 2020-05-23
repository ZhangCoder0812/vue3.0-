import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositiApi from '@vue/composition-api'
// 路由守卫
import './router/premit'


// 引入自定义全局组件
import '@/icons'

Vue.use(VueCompositiApi)
Vue.use(ElementUI);


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
