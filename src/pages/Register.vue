<template>
  <div class="Register">
    <div class="content">

      <div class="register-logo"><img class="picture" :src="logo"></div>

      <el-form class="myform" :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px">
        <el-form-item prop="pass">
          <el-input v-model="ruleForm.email" auto-complete="off" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('ruleForm')">
            注册
          </el-button>
        </el-form-item>
        <el-form-item>

          <router-link to="/auth" replace>
            <el-button class="button btn-back">返回</el-button>
          </router-link>

        </el-form-item>
      </el-form>

      <!--<div class="line"></div>-->
      <!--<footer>Define a new work style!</footer>-->

    </div>
  </div>
</template>


<script>

  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/icons/index/Groupup.png'
  import {register} from 'API/userApi'

  export default {
    data () {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        project,
        logo,
        ruleForm: {
          email: '',
          password: '',
          checkPass: ''
        },
        rules2: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      back () {
        this.$router.replace('/home')
      },
      requestRegister: function () {
        register(this.ruleForm.email, this.ruleForm.password).then(({id}) => {
          localStorage.token = id
          console.log('register successfully' + id)
          this.$router.replace('/home')
        }).catch(err => this.$message.error(err.message))
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.requestRegister()
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

  /*.Register {*/
  /*position: absolute;*/
  /*top: 45%;*/
  /*left: 50%;*/
  /*width: 290px;*/
  /*height: 400px;*/
  /*transform: translate(-50%, -50%);*/
  /*}*/

  .Register{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
  }

  .register-logo{
    display: flex;
    justify-content: center;
  }

  .picture {
    height: 128px;
    width: 128px;
    margin-top: -5px;
    margin-left: 0px;
    margin-bottom: 10px;
  }

  .button {
    width: 280px;
    height: 40px;
    margin-top: 5px;
  }

  .btn-back {
    margin-top: -30px;
  }

  /*.line {*/
  /*width: 280px;*/
  /*height: 1px;*/
  /*margin-top: 50px;*/
  /*margin-left: 10px;*/
  /*background-color: #C0C0C0;*/
  /*}*/

  /*footer{*/
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  /*font-size: 16px;*/
  /*color: #3CC;*/
  /*margin-top: 15px;*/
  /*}*/
</style>
