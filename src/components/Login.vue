<template>

  <div class="login">

    <div class="content">

      <img class="picture" :src="logo">

      <el-form class="myform" :model="ruleForm2" ref="ruleForm2" label-width="100px" >
        <el-form-item label="邮箱" prop="pass">
          <el-input v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('ruleForm2')">提交</el-button>

        </el-form-item>
      </el-form>

      <div class="line">
      </div>

      <div class="textButton">

        <div class="account"> 还没有账户？</div>

        <el-button class="text" type="text">
          <router-link to="d">注册新账号</router-link>
        </el-button>

      </div>

    </div>

  </div>

</template>

<script>

  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'

  export default {
    data () {
      return {
        project,
        logo,
        ruleForm2: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      Register: function () {
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
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

  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content {
    align-items: center;
  }

  .picture {
    height: 78px;
    width: 280px;
    margin-top:-5px;
    margin-left: 0px;
    margin-bottom: 10px;
  }

  .mail {
    height: 60px;
    width: 280px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .password {
    height: 60px;
    width: 280px;
    display: flex;
    flex-direction: row;
  }

  .button {
    width: 280px;
    height: 40px;
    margin-top: 20px;
  }

  .line {
    width: 280px;
    height: 1px;
    margin-top: 50px;
    margin-left:10px;
    background-color: #C0C0C0;
  }

  .textButton {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .account {
    font-size: 14px;
    display: flex;
    color: black;
    margin-top: 10px;
    margin-left: 50px;
  }

  .text {
    color: #33CCCC;
    margin-top: 1px;
    margin-left: 20px;
  }


</style>
