<template>
    <div>
        <el-row :gutter="14">
                <el-col :span="4">
                    <div class="label-wrap category">
                        <label for="">类型：</label>
                        <div class="wrap-content">
                            <el-select v-model="category_value" placeholder="请选择" >
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div class="label-wrap date">
                        <label for="">日期：</label>
                        <div class="wrap-content ">
                            <el-date-picker
                                    v-model="date_value"
                                    type="datetimerange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"
                                    :default-time="['12:00:00']">
                            </el-date-picker>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="label-wrap key-word">
                        <label for="">关键字：</label>
                        <div class="wrap-content ">
                            <el-select v-model="search_key" placeholder="请选择" style="width: 80px" >
                                <el-option
                                        v-for="item in search_option"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3">
                    <el-input v-model="search_keyWord" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="danger">搜索</el-button>
                </el-col>
                <el-col :span="2">
                    <el-button type="danger" @click="dialog_info=true">新增</el-button>
                </el-col>
            </el-row>
        <div class="black-space-30"></div>
        <el-table
                :data="table_data"
                border
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="45">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="830">
            </el-table-column>
            <el-table-column
                    prop="category"
                    label="类别"
                    width="130">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="237"
            >
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="管理员"
                    width="115"
            >
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" size="small" @click="deleteItem">删除 </el-button>
                    <el-button type="success" size="small">编辑 </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="black-space-30"></div>
        <el-row>
            <el-col :span="12">
                <el-button type="primary" @click="deleteAll">批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <el-pagination
                        class="pull-right"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="1000">
                </el-pagination>
            </el-col>
        </el-row>
        <DialogInfo :flag.sync="dialog_info"/>
    </div>
</template>

<script>
  import DialogInfo from './dialog/info.vue'
  import {ref,reactive,watch} from '@vue/composition-api'
  import {global} from "@/utils/global_3.0";
  export default {
    name: "index",
    components:{DialogInfo},
    setup(props,{root}){
      // 使用3.0自定义方法
      const { str:aaa ,  confirm} = global()
      watch(()=>{
        console.log(aaa)
      })

      const category_value=ref('')
      const search_key=ref('id')
      const date_value=ref('')
      const search_keyWord=ref('')
      const dialog_info=ref(false)

      const options=reactive([
       {
        value: '1',
        label: '国际信息'
      },
       {
        value: '2',
        label: '国内信息'
      },
       {
         value: '3',
         label: '行业信息'
       }
      ])
      const search_option=reactive([
        {
          value: 'id',
          label: 'ID'
        },
        {
          value: 'title',
          label: '标题'
        }
      ])
      const table_data= reactive([
      {
      title: '2016-05-02',
      category: '王小虎',
      date: '上海市普陀区金沙江路 1518 弄',
      user: '789',
    },
      ])


      const handleSizeChange=(val)=>{
        console.log(val);
      }
      const handleCurrentChange=(val)=>{
        console.log(val);
      }
      const deleteItem=(val)=>{
        // 调用3.0自定义全局方法
        confirm({
          content:"确认删除此信息？",
          tip:'警告',
          fn:confirmDelete
        })
         /*
                 调用vue自定义全局方法
                 root.confirm({
                   content:"确认删除此信息？",
                   tip:'警告',
                   fn:confirmDelete
                 })
         */
      }
      const deleteAll=(val)=>{
        confirm({
          content:"确认删除选中数据？",
          type:'success',
          fn:confirmDelete
        })
      }

      const confirmDelete=()=>{
         console.log('执行确认删除')
      }

      return{
        category_value,
        date_value,
        search_keyWord,
        search_key,
        dialog_info,

        options,
        search_option,

        table_data,

        handleSizeChange,
        handleCurrentChange,
        deleteItem,
        deleteAll,

      }
    }
  };
</script>

<style scoped lang="scss">
    .label-wrap{
        &.category{
            @include labelDom(left,60,40);
        };
        &.date{
            @include labelDom(right,93,40)
        }
        &.key-word{
            @include labelDom(right,99,40)
        }
    }
</style>
