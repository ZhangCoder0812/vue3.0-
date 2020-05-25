<template>
    <div id="category">
        <el-button type="danger">添加一级分类</el-button>
        <hr />
        <div>
            <el-row :gutter="30">
                     <el-col :span="8">
                         <div class="category-wrap">
                             <div class="category">
                                 <h4>
                                     <svg-icon iconClass="plus" className="item.meta.icon"/>
                                     新闻
                                     <div class="button-group">
                                         <el-button type="danger"  size="mini" round>编辑</el-button>
                                         <el-button type="success" size="mini" round>添加子级</el-button>
                                         <el-button size="mini" round>删除</el-button>
                                     </div>
                                 </h4>
                                 <ul>
                                     <li>国内</li>
                                     <li>国内</li>
                                     <li>国内</li>
                                     <li>国内</li>
                                 </ul>
                             </div>
                         </div>
                     </el-col>
                     <el-col :span="16">
                          <h4 class="menu-title">
                             一级分类编辑
                          </h4>
                         <el-form label-width="142px" :model="formLabelAlign" class="w410">
                             <el-form-item label="一级分类名称">
                                 <el-input v-model="formLabelAlign.name"></el-input>
                             </el-form-item>
                             <el-form-item label="二级分类名称">
                                 <el-input v-model="formLabelAlign.name"></el-input>
                             </el-form-item>
                             <el-form-item >
                                 <el-button type="danger">确定</el-button>
                             </el-form-item>
                         </el-form>
                     </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import {ref,reactive,watch} from '@vue/composition-api'
  export default {
    name: "index",
    setup(props,root){
        const formLabelAlign= ({
          name: '',
          region: '',
          type: ''
        })

       return{
         formLabelAlign
       }
    }
  };
</script>

<style scoped lang="scss">
  .category-wrap{
      div:first-child{
          &:before{
              top:20px
          }
      }
      div:last-child{
          &:before{
              bottom:21px
          }
      }
  }
  .menu-title{
      line-height: 44px;
      background-color: #f3f3f3;
      padding-left: 22px;
  }
  .category{
      line-height: 44px;
      position: relative;
      cursor: pointer;
      &:before{
          content: '';
          position: absolute;
          left: 22px;
          top:0;
          bottom:0;
          width: 32px;
          border-left: 1px dotted #000;
      }
      h4{
          padding-left: 40px;
          position: relative;
      }
      svg{
          position: absolute;
          left: 14px;
          top:15px;
          background-color:#fff ;
          font-size: 17px;
      }
      li{
          position: relative;
          padding-left: 40px;
          margin-left: 20px;
          &:before{
             content: '';
             position: absolute;
             left: 0;
             top:22px;
             width: 32px;
             border-bottom: 1px dotted #000;
          }
      }
      li , h4{
          &:hover{
              @include webkit(transition , all .5s ease 0s);
              background-color: #f3f3f3;
              .button-group{
                  display: block;
              }
          }
      }
  }
  .button-group{
       display: none;
       position: absolute;
       z-index: 2;
       right: 11px;
       top:-1px;
       button{
           font-size: 12px;
       }
    }
    .w410{
        width: 410px;
    }
</style>
