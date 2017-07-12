<template>
  
  <el-card class="box-card">
    <div class="avatar1">
      <img class="picture1" >
      <div class="text">Taylor Swift</div>
    </div>
  </el-card>
</template>

<script>
  
  import project from '@/assets/icons/nav_bar/project.png'
  
  export default {
    data () {
      return {
        project,
        input: ''
      }
    }
  }
</script>


<style scoped>
  .box-card{
    height:150px;
    width:300px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .avatar1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  
  .picture1 {
    height: 95px;
    width: 95px;
    background-color: #33CCCC;
    border-radius:50%;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 20px;
  }
  
  .text{
    font-size:18px;
    color:#A1BDBF;
    height:64px;
    width:117px;
    margin-top:20px;
  }

</style>
