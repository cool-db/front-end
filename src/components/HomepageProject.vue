<template>
    <el-card class="box-card" id="project">
      <img class="projectPicture" :src="logo">
      <div class="Text">
        <div class="projectName">{{projectName}}</div>
        <div class="introduction">{{projectIntroduction}}</div>
      </div>
    </el-card>
</template>

<script>
  import logo from '@/assets/logo.png'
  export default {
    data () {
      return {
        logo,
        projectName: '项目名称',
        projectIntroduction: '点击这里，开始新的工作方式(建议超过两行用省略号)'
      }
    }
  }
</script>

<style>
  #project{
    width: 240px;
    height: 120px;
    position: relative;
    z-index: -2;
  }
  .projectPicture{
    margin-top: -20px;
    margin-left: -20px;
    width: 240px;
    height: 120px;
    position: relative;
    z-index: -1;
  }
  .Text{
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: #FFFFFF;
    text-shadow:1px 1px 1px #000;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80px;
  }
  
</style>
