<template>
  <div class="main">
    <div class="main-box">

      <div class="head-bar">
        <div class="head-title">
          <span class="title-content">最近5天的事</span>
          <badge>{{taskCount}}</badge>
        </div>
      </div>

      <div style="border: 0.5px #888 solid"></div>

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
  import EachTask from '@/components/My/EachTask.vue'
  import Badge from '@/components/Badge.vue'
  export default {
    components: {EachTask, Badge},
    data () {
      return {
        taskCount: 5
      }
    }
  }
</script>

<style scoped>
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
    color: #888;
  }
  .title-content{
    margin-right: 10px;
    font-size: 18px;
  }
</style>
