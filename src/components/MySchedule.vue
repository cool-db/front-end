<template>
  <div id="mySchedule">
    <div id="bar">
      <el-tabs v-model="activeName" @tab-click="handleClick" id="selectLeft">
        <el-tab-pane label="我执行的" name="first">
          <recent-issue-item></recent-issue-item>
          <recent-issue-item></recent-issue-item>
        </el-tab-pane>
        <el-tab-pane label="我创建的" name="second">
          <recent-issue-item></recent-issue-item>
        </el-tab-pane>
        <el-tab-pane label="我参与的" name="third">
          <recent-issue-item></recent-issue-item>
          <recent-issue-item></recent-issue-item>
          <recent-issue-item></recent-issue-item>
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>

</template>

<script>
  import RecentIssueItem from 'COMPONENTS/RecentIssueItem'
  export default {
    data () {
      return {
        displayState: '未完成',
        displaySorting: '按优先级排序'
      }
    },
    components: {
      RecentIssueItem
    }
  }
</script>

<style scoped="">
  #mySchedule{
    margin: 5% auto auto 10%;
    padding-top: 13px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 800px;
    height: 640px;
  }

  #selectLeft{
    margin-left: 32px;
  }

</style>
