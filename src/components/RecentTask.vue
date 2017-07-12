<template>
  <div class="main">
    <div class="main-box">

      <div class="head-bar">
        <div class="head-title">
          <span class="title-content">最近5天的事</span>
          <el-tag color="#ff4949">&nbsp;&nbsp;{{taskcount}}&nbsp;&nbsp;</el-tag>
        </div>
      </div>

      <div class="task-area">
        <each-task></each-task>
        <each-task></each-task>
        <each-task></each-task>
        <each-task></each-task>
        <each-task></each-task>
      </div>

    </div>
  </div>
</template>

<script>
  import EachTask from '@/components/EachTask.vue'
  export default {
    components: {EachTask},
    data () {
      return {
        taskcount: 5
      }
    }
  }
</script>

<style>
  .main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .main-box{
    width: 800px;
  }

  .head-bar{
    margin: 20px 30px 0 30px;
    padding-bottom: 10px;
    border-bottom: 1px #888 solid;
    color: #888;
  }

  .title-content{
    margin-right: 10px;
  }
</style>
