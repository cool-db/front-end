<template>

  <div class="Register">

    <div class="content">

      <img class="picture" :src="logo">

      <el-form class="myform" :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px">
        <el-form-item label="邮箱  " prop="pass">
          <el-input v-model="ruleForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码  " prop="pass">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('ruleForm')">
            确认注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="button btn-back" @click="this.$router.replace('/auth')">
            <!--<router-link to="/auth" replace>-->
            返回登录
            <!--</router-link>-->
          </el-button>
        </el-form-item>
      </el-form>

      <div class="line">
      </div>

      <div class="textButton">

        <div class="account"> Define a new work style!</div>

      </div>

    </div>

  </div>

</template>


<script>

  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'
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

  .Register {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 280px;
    height: 400px;
    transform: translate(-50%, -50%);
  }

  .content {
    align-items: center;
  }

  .picture {
    height: 78px;
    width: 280px;
    margin-top: -5px;
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
    width: 270px;
    height: 40px;
    /*margin-left:-5px;*/
    margin-top: 5px;
  }

  .btn-back {
    margin-top: -30px;
  }

  .line {
    width: 270px;
    height: 1px;
    margin-top: 50px;
    margin-left: 10px;
    background-color: #C0C0C0;
  }

  .textButton {
    display: flex;
    flex-direction: row;
    margin-left: 18px;
    /*justify-content: center;*/
    /*align-items: center;*/
    margin-top: 10px;
  }

  .account {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #33CCCC;
    margin-top: 10px;
    margin-left: 45px;
  }

  .text {
    color: #33CCCC;
    margin-top: 1px;
    margin-left: 20px;
  }


</style>
