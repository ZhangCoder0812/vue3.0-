<template>
  <div id="login"  >
     <div class="login-wrap">
       <ul class="menu-tab">
         <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
       </ul>
       <el-form class="login-form" size="medium">

         <el-form-item  class="item-form">
           <label  > 邮箱</label>
           <el-input   v-model="formValue.username" autocomplete="off"></el-input>
         </el-form-item>

         <el-form-item  class="item-form">
           <label  > 密码</label>
           <el-input type="password" v-model="formValue.password" autocomplete="off"></el-input>
         </el-form-item>

         <el-form-item   class="item-form">
           <label  > 验证码</label>
           <el-row :gutter="10">
             <el-col :span="15">
                <el-input type="password" v-model="formValue.code" autocomplete="off"></el-input></el-col>
             <el-col :span="9">
                <el-button type="success" @click="submitForm()" class=" block">获取验证码</el-button>
             </el-col>
           </el-row>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" @click="submitForm()" class="login-btn block">提交</el-button>
         </el-form-item>

       </el-form>
     </div>
  </div>
</template>

<script >
import { reactive , ref , isRef , onMounted} from '@vue/composition-api'
export default {
    name:'login',
    setup(props,context){
// 这里面放的是data数据，生命周期，自定义函数

// 声明数据是对象类型使用 reactive
      const menuTab=reactive([
        {txt:'登录',current:true},
        {txt:'注册',current:false}
      ])
      // 取值
      console.log(menuTab)

      const formValue= reactive({
            username: '',
            password: '',
            code: ''
      })


      // 声明数据是基础类型时使用 ref
      const a = ref('haha')
      // 取值使用 .value
      console.log(a.value)
      // 改变值
      a.value='wade'

// 判断是不是ref对象(基础类型)
      console.log(isRef(a));

//生命周期前面加 on
      onMounted(()=>{

      })

// 自定义函数 直接书写 不用写在methods里面
      const toggleMenu=(data)=>{
        menuTab.forEach(elem=>{
          elem.current=false
        })
        data.current=true
      }
      const submitForm=()=> {
         console.log(formValue)
      }


// 必须要把定义的东西 return 出去才能使用

      return{
         menuTab,
         toggleMenu,
         submitForm,
         formValue
      }


    },


}

</script>

<style scoped lang="scss">
  #login{
    height: 100vh;
    background-color: #344a5f;
  }
  .login-wrap{
    width: 330px;
    margin: auto;
  }
  .menu-tab{
    text-align: center;
    li{
      display: inline-block;
      width: 88px;
      line-height: 36px;
      font-size: 14px;
      color: #fff;
      border-radius: 2px;
      cursor: pointer;
    }
    .current{
      background-color: rgba(0,0,0,.1);
    }
  }
  .login-form{
     label{
       display: inline-block;
       margin-bottom: 3px;
       font-size: 14px;
       color: #fff;
     }
     .item-form{
       margin-bottom: 13px;
     }
     .block{
       display: block;
       width: 100%;
     }
     .login-btn{

     }
  }
</style>
