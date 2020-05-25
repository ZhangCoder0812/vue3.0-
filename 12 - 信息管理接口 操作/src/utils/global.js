

// vue 定义全局方法

import { MessageBox } from 'element-ui';
export default {

   install(Vue,options){
      Vue.prototype.confirm=(parmas) =>{
        MessageBox.confirm(parmas.content, parmas.tip || '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: parmas.type||'warning',
          center:true
        }).then(() => {
          parmas.fn && parmas.fn()
        })
      }
   }


}
