

import {GetCategory} from "../../api/news";

const actions= {
  getInfoCategory(content, requestData) {
    return new Promise((reslove, reject) => {
      GetCategory(requestData).then((res) => {
        reslove(res)
      }).catch(err => {
       console.log('-=-=-=')
        reject(err)
      })
    })
  },


}



export default {
  namespaced:true,
  actions,
}
