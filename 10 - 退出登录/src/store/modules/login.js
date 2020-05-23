
import {Login} from "@/api/login";
import {setToken,setUserName,removeName,removeToken} from "@/utils/app";
import {getUserName} from "@/utils/app";
import store from "../index";

const state = {

  to_ken:'',
  username:getUserName() || ''
}

const  mutations= {
  SET_TOKEN(state,value){
    state.to_ken=value
  },
  SET_USERNAME(state,value){
    state.username=value
  },
}

const actions= { // 可以异步 可以回调处理
                 // 处理异步
  login(content, requestData) {
    return new Promise((reslove, reject) => {
      Login(requestData).then((res) => {
        reslove(res)
      }).catch(err => {
        let token='测试token-13456789'
        let username='测试用户名-admin'
        content.commit('SET_TOKEN',token)
        content.commit('SET_USERNAME',username)
        setToken(token)
        setUserName(username)
        reject(err)
      })
    })
  },
  // 退出登陆
  exit(content){
    return new Promise((resolve,reject)=>{
      removeToken()
      removeName()
      content.commit('SET_TOKEN','')
      content.commit('SET_USERNAME','')
      resolve()
    })
  }

}



export default {
  namespaced:true, // 命名空间
  state,
  mutations,
  actions,
}