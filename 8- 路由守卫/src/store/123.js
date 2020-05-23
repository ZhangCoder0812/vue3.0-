import Vue from "vue";
import Vuex from "vuex";
import Cookie from 'cookie_js'
import {Login} from "@/api/login";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
             // 取值
    isCollapse:JSON.parse(Cookie.get('isCollapse'))||false,
    count:10
  },
  getters:{ // 类似于计算属性 取到到state数据操作一下在使用
    count:state=>state.count+10
  },
  mutations: { // 修改state中数据 同步 没有回调处理
    SET_COLLAPSE(state){
      state.isCollapse=!state.isCollapse
      //　使用cookie持久化state数据
      Cookie.set('isCollapse',JSON.stringify(state.isCollapse))
    },
    SET_COUNT(state,value){
       state.count=value
    }

  },
  actions: { // 可以异步 可以回调处理
    setMenuStatus(content , data){
      // console.log(content)
      // content 中有 state，getters，commit
      content.commit('SET_COLLAPSE') // 触发mutations 修改数据
    },

    // 处理异步
    login(content , requestData){
       return new Promise((reslove,reject)=>{
         Login(requestData).then((res)=>{
            reslove(res)
          }).catch(err=>{
            reject(err)
          })
       })
    }

  },
  modules: {}
});

/*

取值方式：
  1.  this.$store.state.count    10
  2.  this.$store.getters.count  20

修改值：
   this.$store.commit('SET_COUNT',30)

 */