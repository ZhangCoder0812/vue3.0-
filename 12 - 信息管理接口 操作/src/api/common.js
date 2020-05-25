

// 3.0 导出自定义方法

import {GetCategory} from "./news";
import {ref,reactive} from '@vue/composition-api'

export function common() {

  const categoryInfo = reactive({
    item:[]

  })

  const getInfoCategory=()=>{
    GetCategory().then(res=>{

    }).catch(err=>{
      categoryInfo.item=[
        {
          id:1,
          category_name:'国际信息',
          children:[
            {
              id:11,
              category_name:'乔治',
            }
          ]
        },
        {
          id:2,
          category_name:'行业信息',
          children:[
            {
              id:21,
              category_name:'库里'
            }
          ]
        }
      ]
    })
  }



  return {
    categoryInfo,
    getInfoCategory,

  }

}


