<template>
  <div id="login"  >
     <div class="login-wrap">
       <ul class="menu-tab">
         <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{item.txt}}</li>
       </ul>
       <el-form :model="ruleForm" class="login-form" size="medium">

         <el-form-item  class="item-form">
           <label  > 邮箱</label>
           <el-input   v-model="ruleForm.username" autocomplete="off"></el-input>
         </el-form-item>

         <el-form-item  class="item-form">
           <label  > 密码</label>
           <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
         </el-form-item>

         <el-form-item   class="item-form">
           <label  > 验证码</label>
           <el-row :gutter="10">
             <el-col :span="15">
                <el-input type="password" v-model="ruleForm.code" autocomplete="off"></el-input></el-col>
             <el-col :span="9">
                <el-button type="success" @click="submitForm('ruleForm')" class=" block">获取验证码</el-button>
             </el-col>
           </el-row>
         </el-form-item>

         <el-form-item   class="item-form">
           <label  > 验证码</label>
           <el-input v-model.number="ruleForm.age"></el-input>
         </el-form-item>

         <el-form-item>
           <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn block">提交</el-button>
         </el-form-item>

       </el-form>
     </div>
  </div>
</template>

<script >

export default {
    name:'login',
    data(){

      return{
        menuTab:[
          {txt:'登录',current:true},
          {txt:'注册',current:false}
        ],
        ruleForm: {
          username: '',
          password: '',
          code: ''
        },
      };
    },
    methods:{
      toggleMenu(data){
        this.menuTab.forEach(elem=>{
          elem.current=false
        })
        data.current=true
      },
      submitForm(formName) {

      },

    }
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
