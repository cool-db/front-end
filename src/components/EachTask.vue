<template>
  <div class="each-task-main">

    <el-checkbox v-model="checked">
        {{taskname}} {{projname}}
        <div class="sub-task">属于任务：{{dadtask}}</div>
    </el-checkbox>

    <span><span style="color: #3cc">{{duedate}}</span> 截止</span>


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
    padding: 10px 20px;
    border-left: 10px red solid;
    border-right: 10px #fff solid;
    color: #888;
  }

  .sub-task{
    margin-left: 26px;
  }
</style>
