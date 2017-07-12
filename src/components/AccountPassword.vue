<template>

  <div>
    <div class="accountPassword">
      <div class="bar">
        <img class="picture" :src="project">
        <div>
          账号密码
        </div>
      </div>

      <div class="mail-section">
        <div class="input-bar">
          <div class="text">邮箱账号</div>
          <div>
            <el-input class="mail-input" v-model="email" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="btn-bar">
          <el-button type="primary">保存修改</el-button>
          <el-button>清空内容</el-button>
        </div>

      </div>


      <div class="line"></div>

      <div class="tel-section">
        <div class="input-bar">
          <div class="text">手机号码</div>
          <div>
            <el-input class="mail-input" :disabled="true" v-model="tel" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="btn-bar">
          <el-button type="primary">解绑手机</el-button>
          <el-button>修改密码</el-button>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  import project from '@/assets/icons/nav_bar/project.png'

  export default {
    data () {
      return {
        project,
        input: '',
        email: '',
        tel: '1333'
      }
    }
  }
</script>


<style scoped>
  .accountPassword {
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    padding-bottom: 35px;
  }

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: -20px;
    margin-left: -20px;
    width: 430px;
    height: 65px;
    font-size: 18px;
    color: #3E5568;
    background-color: #E7F1F0;
    margin-bottom: 20px;
  }

  .input-bar {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .btn-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
  }

  .submit-btn {
    margin-top: 20px;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }

  .mail-input {
    width: 290px;
  }

  .text {
    font-size: 16px;
    color: #A1BDBF;
  }

  .mail {
    display: flex;
    flex-direction: row;
    /*margin-bottom:10px;*/
  }

  .mail1 {
    display: flex;
    flex-direction: row;
  }

  .picture {
    height: 23px;
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
    margin-top: 10px;
  }

  .text1 {
    color: transparent;
  }

  .text2 {
    font-size: 16px;
    color: #A1BDBF;
    margin-left: 50px;
    margin-top: 20px;
  }

  .input {
    width: 180px;
    height: 40px;
    margin-left: 50px;
    margin-top: 20px;
  }

  .button {
    width: 180px;
    height: 40px;
    margin-left: 50px;
    margin-top: 20px;
  }

  .line {
    width: 430px;
    height: 1px;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: -20px;
    background-color: #C0C0C0;
  }

  .phoneSection {
    display: flex;
    flex-direction: column;
    /*height: 165px;*/
    justify-content: space-between;
    margin-top: 10px;
    /*align-items: center;*/
  }

  .phone {
    display: flex;
    flex-direction: row;
  }

  .phone1 {
    display: flex;
    flex-direction: row;
    /*margin-top:20px;*/
  }

  .phone2 {
    display: flex;
    flex-direction: row;
    /*margin-top:20px;*/
    align-items: center;
  }

  .unbind {
    width: 180px;
    height: 40px;
    color: #A1BDBF;
    margin-left: 50px;
    margin-top: 20px;
  }
</style>
