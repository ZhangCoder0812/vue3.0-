<template>
    <div id="category">
        <el-button type="danger" @click="addFirst">添加一级分类</el-button>
        <hr />
        <div>
            <el-row :gutter="30">
                     <el-col :span="8">
                         <div class="category-wrap">
                             <div class="category" v-for="firstItem in category.item " :key="firstItem.id">
                                 <h4>
                                     <svg-icon iconClass="plus" className="item.meta.icon"/>
                                     {{firstItem.category_name}}
                                     <div class="button-group">
                                         <el-button type="danger"  size="mini" round>编辑</el-button>
                                         <el-button type="success" size="mini" round>添加子级</el-button>
                                         <el-button size="mini" round @click="deleteCategoryConfirm">删除</el-button>
                                     </div>
                                 </h4>
                                 <ul >
                                     <li v-for="childrenItem in firstItem.children">
                                         {{childrenItem.category_name}}
                                         <div class="button-group">
                                             <el-button type="danger"  size="mini" round>编辑</el-button>
                                             <el-button size="mini" round>删除</el-button>
                                         </div>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </el-col>
                     <el-col :span="16">
                          <h4 class="menu-title">
                             一级分类编辑
                          </h4>
                         <el-form label-width="142px" :model="formLabelAlign" class="w410">
                             <el-form-item label="一级分类名称" v-if="category_first_input">
                                 <el-input v-model="formLabelAlign.categoryName"></el-input>
                             </el-form-item>
                             <el-form-item label="二级分类名称" v-if="category_children_input">
                                 <el-input v-model="formLabelAlign.secCategoryName"></el-input>
                             </el-form-item>
                             <el-form-item >
                                 <el-button type="danger" @click="submit">确定</el-button>
                             </el-form-item>
                         </el-form>
                     </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import {AddFirstCategory,GetCategory,} from "../../api/news";
    import {ref,reactive,watch,onMounted} from '@vue/composition-api'
    import {global} from "../../utils/global_3.0";
    import {common} from "../../api/common";

    export default {
    name: "index",
    setup(props,{root}){

      const {getInfoCategory,categoryInfo} =common()
      const {confirm} =global()
      const category_first_input=ref(true)
      const category_children_input=ref(true)

      const category=reactive({  // 这里写成对象形式 是为了下面修改 直接放数组修改不了
        item:[]
      })

      const formLabelAlign= reactive({
          categoryName: '',
          secCategoryName: '',
        })

      const submit=()=>{
        if(!formLabelAlign.categoryName){
          root.$message({
            type:'error',
            message:'一级分类不能为空'
          })
          return
        }
        let data={categoryName:formLabelAlign.categoryName}
        AddFirstCategory(data).then(res=>{

        }).catch(err=>{
          root.$message({
            type:'success',
            message:'添加成功'
          })
        })
      }

      const getCategory=()=>{
        getInfoCategory()
      }


      const addFirst=()=>{
        category_first_input.value=true
        category_children_input.value=false
      }

      const deleteCategoryConfirm=()=>{
           confirm({
              content:"确认删除此信息？",
              tip:'警告',
              catchFn:()=>{
                console.log('取消')
              }
            })
      }

      // 监听
      watch(()=>categoryInfo.item,(value)=>{
        category.item=value
      })

      onMounted(()=>{
        getCategory()
        /*
         --- vuex 方式
                root.$store.dispatch('common/getInfoCategory').then(res=>{
                  console.log(res);
                }).catch(err=>{
                  console.log('vvv')
                })
        */
      })

       return{
         formLabelAlign,
         category,
         category_first_input,
         category_children_input,
         submit,
         addFirst,
         deleteCategoryConfirm,
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
      li, h4{
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
