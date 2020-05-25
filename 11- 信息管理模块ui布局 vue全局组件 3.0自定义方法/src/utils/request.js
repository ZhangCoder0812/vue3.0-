import axios from 'axios'
import { Message } from 'element-ui';
// 全大写表示不能修改
const BASEURL=process.env.NODE_ENV === 'production' ? '' : '/devApi'

const service = axios.create({
  baseURL: BASEURL,  // http://192.168.0.106:8080/devApi =>  http://www.web-jshtml.cn/productapi
  timeout: 15000, //超时时间
})

// 获取自定义环境变量值 console.log(process.env.VUE_APP_ABC)


// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 添加token
  config.headers['Token']='111111'
  return config;
}, function (error) {

  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {

  let data = response.data
  if(data.resCode!==0){
    Message.error('请求结果有问题');
    return Promise.reject(data) // 将错误信息返回给前台 执行前台请求的 .catch回调
  }else {
    return response  // 正常向下执行
  }
}, function (error) {

  return Promise.reject(error);
});





export default service
