<template>
  <div class="each-task-main">


    <span class="font-style-1">{{taskname}}</span>
    <span class="font-style-2">{{projname}}</span>



    <span class="font-style-2"><span style="color: #3cc">{{duedate}}</span> 截止</span>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        taskname: '这是任务',
        projname: '这是项目',
        duedate: '下周二'
      }
    }
  }
</script>

<style scoped>
  .each-task-main{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;
    height: 30px;

    color: #888;
    cursor: pointer;
  }

  .each-task-main:hover{
    background-color: #e7fef0;
  }

  .font-style-1{
    color: #565656;
    font-size: 16px;
  }
  .font-style-2{
    color: #888;
    font-size: 14px;
  }
</style>
