<template>
    <div class="header-wrap">
        <div class="pull-left header-icon" @click="navMenuState">
            <svg-icon  iconClass="menu" className="menu"/>
        </div>
        <div class="pull-right ">
            <div class="user-info pull-left">
               {{username}}
            </div>
            <div  class="header-icon pull-left" @click="exit()" >
                <svg-icon iconClass="exit" className="exit"/>
            </div>
        </div>
    </div>
</template>

<script>
  import {computed} from '@vue/composition-api'
  export default {
    name: "Header",
    setup(props,{root}){
      const username=computed(()=>root.$store.state.login.username)
      const navMenuState =()=>{
        // 命名空间 模块化 所以要加上 app/
        root.$store.commit('app/SET_COLLAPSE')
      }

      const exit=()=>{
         root.$store.dispatch('login/exit').then(()=>{
           root.$router.push({name:'Login'})
         })
      }
      return{
        navMenuState,
        username,
        exit
      }

    }
  };
</script>

<style scoped lang="scss">
    @import "../../../styles/config.scss";
    .header-wrap{
        position: fixed;
        top:0;
        right: 0;
        left:$navMenu;
        height: 75px;
        line-height: 75px;
        background-color: #fff;
        @include webkit(transition,all .3s ease 0s);
        box-shadow: 0 3px  16px 0 rgba(0,0,0,.1);
        .pull-left{
            float: left;
        }
        .pull-right{
            float: right;
        }
    }
    open{
        .header-wrap{
            left: $navMenu;
        }
    }
    .close{
        .header-wrap{
             left: $navMenuMin;
        }
    }
    .header-icon{
        padding: 0 32px;
        svg{
            margin-bottom: -8px;
            font-size: 25px;
            cursor: pointer;
        }
    }
    .user-info{
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #ededed;
        + .header-icon{
            padding: 0 28px;
        }
    }
</style>
