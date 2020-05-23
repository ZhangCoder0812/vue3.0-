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
                <el-button type="success" @click="handleGetSms()" class=" block">获取验证码</el-button>
             </el-col>
           </el-row>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" @click="handleGoLogin()" class="login-btn block">提交</el-button>
         </el-form-item>

       </el-form>
     </div>
  </div>
</template>

<script >
import sha1 from 'js-sha1'
import {getSms,Login} from "@/api/login";
import { reactive , ref , isRef , onMounted} from '@vue/composition-api'
export default {
    name:'login',
    setup(props,{root}){

      const menuTab=reactive([
        {txt:'登录',current:true},
        {txt:'注册',current:false}
      ])

      const formValue= reactive({
            username: '',
            password: '',
            code: ''
      })


      const toggleMenu=(data)=>{
        menuTab.forEach(elem=>{
          elem.current=false
        })
        data.current=true
      }

      const handleGoLogin=()=> {
        let pwd = sha1(123) // 加密
        Login(formValue).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
        // 跳转后台首页
        root.$router.push({name:'Console'})
      }


      const handleGetSms=()=>{
         getSms({username:formValue.username}).then(res=>{
           console.log(res);
         }).catch(err=>{
           console.log(err);
         })
      }





      return{
         menuTab,
         toggleMenu,
         handleGoLogin,
         formValue,
         handleGetSms
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
