import Vue from "vue";

import SvgIcon from './SvgIcon.vue'
// 自定义全局组件
Vue.component('svg-icon',SvgIcon)


/*
解析 svg 图标
 require.context 读取指定目录所有文件
  第一个参数：目录
  第二个参数：是否遍历自己目录
  第三个参数：定义遍历文件规则
*/

const req = require.context('./svg',false,/\.svg$/)
const requireAll = requireContext=>{
  console.log(requireContext.keys().map(requireContext));
  return requireContext.keys().map(requireContext)
}
requireAll(req)
