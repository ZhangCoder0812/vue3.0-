import Cookie from 'cookie_js'

const state = {
  isCollapse: Cookie.get('isCollapse') ? JSON.parse(Cookie.get('isCollapse') ): false,
}

const  mutations= {
  SET_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse
    Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
  }
}

const actions= {

}



export default {
  namespaced:true, // 命名空间
  state,
  mutations,
  actions,
}