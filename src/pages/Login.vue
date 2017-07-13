<template>
  <div class="login">
    <div class="content">
      <div class="login-logo"><img class="picture" :src="logo"></div>
      <el-form class="myform" :model="ruleForm" ref="ruleForm" label-width="100px">
        <el-form-item prop="pass">
          <el-input v-model="ruleForm.email" auto-complete="off" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>

      <!--<div class="line"></div>-->
      <div class="textButton">
        <div class="account">还没有账户?</div>

          <router-link to="/register" replace style="text-decoration: none; color:#33CCCC">
            <el-button class="text" type="text">注册新账号</el-button>
          </router-link>

      </div>
    </div>
  </div>
</template>

<script>

  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/icons/index/Groupup.png'

  import { login } from 'API/userApi'

  export default {
    data () {
      return {
        project,
        logo,
        ruleForm: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      requestLogin: function () {
        login(this.ruleForm.email, this.ruleForm.password).then(({id}) => {
          localStorage.token = id
          console.log('login successfully' + id)
          this.$router.replace('/home')
        }).catch(err => this.$message.error(err.message))
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.requestLogin()
            return true
          } else {
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>


<style scoped>

  .myform {
    margin-left: -90px;
  }

  /*.login {*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
  /*}*/

  .login{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
  }

  .login-logo{
    display: flex;
    justify-content: center;
  }

  .picture {
    height: 128px;
    width: 128px;
    margin: 0 20px;
  }

  .button {
    width: 280px;
    height: 40px;
    margin-top: 20px;
  }

  /*.line {*/
    /*width: 280px;*/
    /*height: 1px;*/
    /*margin-top: 50px;*/
    /*margin-left: 10px;*/
    /*background-color: #C0C0C0;*/
  /*}*/

  .textButton {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .account {
    font-size: 14px;
    margin-top: 10px;
  }

  .text {
    color: #33CCCC;
    margin-top: 1px;
    margin-left: 20px;
  }
</style>
