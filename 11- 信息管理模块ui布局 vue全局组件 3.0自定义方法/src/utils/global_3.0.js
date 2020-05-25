

// 3.0 导出自定义方法

import { MessageBox } from 'element-ui';
import {ref,reactive} from '@vue/composition-api'

export function global() {

  const str=ref('123')
  const confirm=(parmas)=>{
    MessageBox.confirm(parmas.content, parmas.tip || '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: parmas.type||'warning',
      center:true
    }).then(() => {
      str.value='str改变了'
      console.log(str.value);
      parmas.fn && parmas.fn()
    })
  }

  return {
    str,
    confirm,
  }

}

/*
  使用

  import {global} from "@/utils/global_3.0";
  const { str:aaa ,  confirm} = global()
  confirm()
  console.log(aaa) // 将str重命名为aaa ，方法同样写可以重命名

  还可以监听变化
  watch(()=>{
     console.log(aaa)
  })


 */
