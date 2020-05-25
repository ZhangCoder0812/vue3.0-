<template>
    <el-dialog title="新增" :visible.sync="data.dialog_info_flag" @close="close">
        <el-form :model="data.form">
            <el-form-item label="类别" :label-width="data.formLabelWidth">
                <el-select v-model="data.form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题" :label-width="data.formLabelWidth">
                <el-input v-model="data.form.name" autocomplete="off"></el-input>
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

      // 数据较多时 可考虑放入一个数据中
      const data=reactive({
        dialog_info_flag:false,
        formLabelWidth:'70px',
        form:{
          name: '',
          region: '',
        }
      })


      const  close=()=>{
        // 使用修饰器来改变父组件中的值 这样只能改变属性
        // 不能再写其他的逻辑代码
        data.dialog_info_flag=props.false
        root.emit('update:flag',false)
      }

      watch(()=>{
        data.dialog_info_flag=props.flag
      })


      return{
        data,
        close,
      }
    },

  };
</script>

<style scoped>

</style>
