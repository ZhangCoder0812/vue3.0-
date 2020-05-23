<template>
   <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
  import {computed} from '@vue/composition-api'
  export default {
    name: "SvgIcon",
    props:{
      iconClass:{
        type:String,
        default:''
      },
      className:{
        type:String,
        default:''
      }
    },
    setup(props){
      // 计算属性
      const svgClass = computed(()=>{
        if(props.svgClass){
          return `svg-icon ${props.className}`
        }else {
          return `svg-icon`
        }
      })
      const iconName = computed(()=>`#icon-${props.iconClass}`)

      return{
        svgClass,
        iconName,
      }
    }
  };
</script>

<style scoped lang="scss">
 .svg-icon{
     width: 1em;
     height: 1em;
     font-size: 20px;


 }
</style>
