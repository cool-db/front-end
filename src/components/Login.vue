<template>

  <div class="login">
    <img class="picture" :src="project">

    <el-input v-model="input" placeholder="邮箱／手机号"></el-input>

    <el-input v-model="input" placeholder="密码"></el-input>

    <el-button class="button" type="primary">登录</el-button>

    <div class="line">
    </div>

    <div class="textButton">
      <el-button type="text">还没有账号？</el-button>
      <el-button type="text">注册新账号</el-button>
    </div>

  </div>

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
    height:410px;
    width:430px;
  }

  .picture {
    height: 78px;
    width: 280px;
    /*margin-top: 5px;*/
    /*margin-bottom: 5px;*/
    /*margin-right: 10px;*/
    /*margin-left: 20px;*/
  }

  .accountPassword {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
  }

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:-20px;
    margin-left:-20px;
    width: 430px;
    height: 65px;
    font-size: 18px;
    color:#3E5568;
    background-color: #E7F1F0;
  }

  .mail {
    display: flex;
    flex-direction: row;
    /*margin-bottom:10px;*/
  }

  .mail1{
    display:flex;
    flex-direction:row;
  }



  .mailSection {
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    /*height: 150px;*/
    justify-content: space-between;
    margin-top:10px;
  }

  .text{
    font-size:16px;
    color:#A1BDBF;
    margin-top:20px;
  }

  .text1{
    color:transparent;
  }

  .text2{
    font-size:16px;
    color:#A1BDBF;
    margin-left:50px;
    margin-top:20px;
  }
  .input{
    width:180px;
    height:40px;
    margin-left:50px;
    margin-top:20px;
  }
  .button{
    width:180px;
    height:40px;
    margin-left:50px;
    margin-top:20px;
  }
  .line {
    width: 430px;
    height: 1px;
    margin-top: 25px;
    margin-left:-20px;
    background-color: #C0C0C0;
  }

  .phoneSection {
    display: flex;
    flex-direction: column;
    /*height: 165px;*/
    justify-content: space-between;
    margin-top:10px;
    /*align-items: center;*/
  }

  .phone {
    display: flex;
    flex-direction: row;
  }

  .phone1{
    display:flex;
    flex-direction:row;
    /*margin-top:20px;*/
  }

  .phone2{
    display:flex;
    flex-direction:row;
    /*margin-top:20px;*/
    align-items: center;
  }

  .unbind{
    width:180px;
    height:40px;
    color:#A1BDBF;
    margin-left:50px;
    margin-top:20px;
  }
</style>
