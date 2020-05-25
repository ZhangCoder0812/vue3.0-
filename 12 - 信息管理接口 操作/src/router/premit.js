// 路由守卫 路由改变就会触发
import router from "./index";
import {getToken,removeName,removeToken} from '../utils/app'
import store from '../store/index'

// 白名单
const whiteRouter=['/login']


router.beforeEach((to, from, next)=>{

  if(getToken()){
      if(to.path=='/login'){
        // 退出登录 清除缓存，vuex 中的 token和username
        removeToken()
        removeName()
        store.commit('app/SET_TOKEN','')
        store.commit('app/SET_USERNAME','')
      }
    next()
  }else {
    console.log('不存在')
    if(whiteRouter.indexOf(to.path)!==-1){
      next() // 必须要用 否则不会往下执行代码
             // 不带参数默认跳转到to.path 不会触发beforeEach
    }else {
      next('/login') // 带参数 跳转到参数路由 会触发beforeEach
    }
  }




})

/*

1. 直接进入index的时候 触发路由守卫  to为 '/index'  执行beforeEach
2. 然后判断没有token 执行next('/login') 由于带了参数 跳转到 /login
3. 然后又触发了路由守卫 执行beforeEach 判断实在白名单中
4. 执行 next() 不带参数 不会触发路由守卫 最终停在 login 页面 不会再跳转

 */