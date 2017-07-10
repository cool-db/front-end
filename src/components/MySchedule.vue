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
      
      <div id="selectRight">
        <div>
          <el-dropdown id="selectFinished">
        <span class="el-dropdown-link">
          {{displayState}}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>未完成</el-dropdown-item>
              <el-dropdown-item>已完成</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
       
        <div>
          <el-dropdown id="selectSorting">
        <span class="el-dropdown-link">
          {{displaySorting}}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>按优先级排序</el-dropdown-item>
              <el-dropdown-item>按截止时间排序</el-dropdown-item>
              <el-dropdown-item>按创建时间最近排序</el-dropdown-item>
              <el-dropdown-item>按项目名称排序</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </div>
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

<style>
  #mySchedule{
    margin: 5% auto auto 10%;
    padding-top: 13px;
    display: flex;
    flex-direction: column;
    background: #E7F1F0;  /*为了展示大小*/
    border-radius: 6px;
    width: 800px;
    height: 640px;
  }
  
  #selectLeft{
    margin-left: 32px;
  }
  
  #selectRight{
    display: flex;
    flex-direction: row;
    margin-top: 12px;
    margin-right: 25px;
  }
  
  #bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  #selectFinished{
    margin-right: 50px;
  }
  
</style>
