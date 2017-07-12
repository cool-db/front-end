<template>

  <el-card class="box-card">
  <div class="accountPassword">
      <div class="bar">
        <img class="picture" :src="preference">
        <div>
          账号密码
        </div>
      </div>

      <div class="mailSection">
        <div class="mail">
          <div class="text">
            邮箱账号
          </div>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>

        <div class="mail1">
          <div class="text1">
            此行隐形
          </div>
          <el-button class="button" type="primary">添加主邮箱</el-button>
        </div>

      </div>


      <div class="line">
      </div>


      <div class="phoneSection">
        <div class="phone">
          <div class="text">
            手机账号
          </div>

          <div class="text2">
            12345678910
          </div>
        </div>

        <div class="phone1">
          <div class="text1">
            此行隐形
          </div>
          <el-button class="unbind">解绑</el-button>
        </div>

        <div class="phone2">
          <div class="text1">
            此行隐形
          </div>
          <el-button class="button" type="primary">修改密码</el-button>
        </div>


      </div>

  </div>
  </el-card>
</template>

<script>

  import project from '@/assets/icons/nav_bar/project.png'
  import preference from '@/assets/icons/nav_bar/preferences.png'

  export default {
    data () {
      return {
        project,
        preference,
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

  .picture {
    height: 27px;
    width: 27px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 20px;
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
