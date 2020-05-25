<template>
    <el-dialog title="新增" :visible.sync="dialog_info_flag" @close="close">
        <el-form :model="form">
            <el-form-item label="类别" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
  import {ref,reactive,watch} from '@vue/composition-api'
  export default {
    name: "info",
    props:{
      flag:{
        type:Boolean,
        default:false
      }
    },
    setup(props,root){
       const dialog_info_flag=ref(false)
       const form=reactive({
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: ''
       })
       const formLabelWidth=ref('70px')

      const  close=()=>{
        // 使用修饰器来改变父组件中的值 这样只能改变属性
        // 不能再写其他的逻辑代码
        dialog_info_flag.value=props.false
        root.emit('update:flag',false)
      }

      watch(()=>{
        dialog_info_flag.value=props.flag
      })


      return{
        dialog_info_flag,
        form,
        formLabelWidth,
        close,
      }
    },

  };
</script>

<style scoped>

</style>
