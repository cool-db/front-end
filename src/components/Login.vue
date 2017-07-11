<template>

  <div class="login">

    <div class="content">

      <img class="picture" :src="logo">

      <el-form class="myform" :model="ruleForm2" ref="ruleForm2" label-width="100px" >
        <el-form-item label="邮箱" prop="pass">
          <el-input v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        project,
        logo,
        input1: '',
        input2: '',
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
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
