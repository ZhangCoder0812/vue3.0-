<template>
    <div class="nav-wrap">
        <h1 class="logo">
            <img src="../../../assets/logo.png" alt="">
        </h1>
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 background-color="transparent"
                 text-color="#fff"
                 active-text-color="#fff"
                 :collapse="isCollapse"
                 router
        >
         <!--  这里将循环导航的时候用 template包裹 是因为
               v-for 和 v-if 不能同时用在一个标签上 ，
               template 不会被真正渲染出来 ， template 上面不能绑定key值
          -->
            <template v-for="(item,index) in routers" >

                <el-submenu v-if="!item.hidden"  :index="index+''">

                    <template slot="title">
                        <svg-icon :iconClass="item.meta.icon" className="item.meta.icon"/>
                        <span slot="title">{{item.meta.name}}</span>
                    </template>

                    <el-menu-item v-for="subItem in item.children"  :key="subItem.id" :index="subItem.path">
                        {{subItem.meta.name}}
                    </el-menu-item>

                </el-submenu>

            </template>

        </el-menu>

    </div>
</template>

<script>
  import {ref , reactive , isRef ,toRefs ,onMounted,computed} from '@vue/composition-api'
  export default {
    name: "Nav",
    setup(props,{root}){
       const routers=reactive(root.$router.options.routes)

       // vux 模块化 取值要加上模块名字
       const isCollapse = computed(()=>root.$store.state.app.isCollapse)


       return{
         routers,
         isCollapse,
       }
    }
  };
</script>

<style scoped lang="scss">
    @import "../../../styles/config.scss";
    .nav-wrap {
        .logo{
            text-align: center;
            img{
                margin: 28px auto 25px;
                width: 92px;
                @include webkit(transition,all .3s ease 0s);
            }
        }
        position: fixed;
        top: 0;
        left: 0;
        width: $navMenu;
        height: 100vh;
        @include webkit(transition,all .3s ease 0s);
        background-color: #344a5f;
        svg{
            font-size: 20px;
            margin-right: 10px;
        }
    }
    .open{
        .nav-wrap{
            width: $navMenu;
        }
    }
    .close{
        .nav-wrap{
            width: $navMenuMin;
            .logo img{
                margin: auto;
                width: 70%;
            }
        }
    }
</style>
