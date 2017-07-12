<template>
  <div class="main">
    <div class="main-box">

      <div class="head-bar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我执行的" name="first">
            <each-task></each-task>
          </el-tab-pane>
          <el-tab-pane label="我创建的" name="second">
            <each-task></each-task><each-task></each-task><each-task></each-task>
          </el-tab-pane>
          <el-tab-pane label="我参与的" name="third">
            <each-task></each-task><each-task></each-task>
          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
  </div>
</template>

<script>
  import EachTask from '@/components/My/EachTask.vue'
  export default {
    components: {EachTask},
    data () {
      return {
        activeName: 'first',
        taskcount: 5
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
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
</style>
