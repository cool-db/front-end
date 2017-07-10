<template>
  <div id="recentIssueItem">
    <div id="left"></div>
    <el-checkbox v-model="checked" id="checkbox"></el-checkbox>
    <div id="body">
      <div id="row1">
        <div id="taskName">{{taskName}}</div>
        <div id="projectName">{{projectName}}</div>
        <div id="deadline">{{deadline}}</div>
        <div id="cutOff">截止</div>
      </div>
      <div id="fatherTask">{{fatherTask}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        taskName: '任务名称',
        projectName: '项目名称',
        deadline: '下周二',
        fatherTask: '属于任务：' + '父任务名称'
      }
    }
  }
</script>

<style>
  #recentIssueItem{
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 800px;
  }
  
  #body{
    display: flex;
    flex-direction: column;
  }
  #row1{
    display: flex;
    flex-direction: row;
  }
  
  #left{
    display: flex;
    flex-direction: row;
    height: auto;
    width: 10px;
    background-color: #FF4949;
  }
  
  #checkbox{
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    margin-top: 10px;
  }
  
  #taskName{
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #565656;
    font-family: PingFangSC-Regular;
    margin-top: 10px;
    margin-left: 50px;
  }
  
  #projectName{
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: #888888;
    margin-top: 12.5px;
    margin-left: 15px;
    font-family: PingFangSC-Medium;
  }
  
  #deadline{
    display: flex;
    flex-direction: row;
    color: #33CCCC;
    font-size: 12px;
    font-family: PingFangSC-Medium;
    margin-left: 300px;
    margin-top: 12.5px;
  }
  
  #cutOff{
    display: flex;
    flex-direction: row;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #3A3A3A;
    margin-left: 5px;
    margin-top: 12.5px;
  }
  
  #fatherTask{
    display: flex;
    flex-direction: column;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #888888;
    margin-top: 5px;
    margin-left: 50px;
  }
  
  
</style>
