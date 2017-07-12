<template>
  <div class="each-task-main">

      <el-checkbox v-model="checked">
          <span class="font-style-1">{{taskname}}</span>
          <span class="font-style-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{projname}}</span>
        <div class="sub-task">属于任务：{{dadtask}}</div>
      </el-checkbox>


      <span class="font-style-2"><span style="color: #3cc">{{duedate}}</span> 截止</span>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked: true,
        taskname: '这是任务',
        projname: '这是项目',
        duedate: '下周二',
        dadtask: '父任务名称'
      }
    }
  }
</script>

<style>
  .each-task-main{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 10px 0;
    border-left: 10px red solid;
    border-right: 10px #fff solid;
    color: #888;
  }

  .sub-task{
    margin-left: 23px;
    font-size: 14px;
    color: #888;
  }

  .font-style-1{
    font-size: 14px;
    color: #565656;
  }

  .font-style-2{
    color: #888;
    font-size: 12px;
  }
</style>
