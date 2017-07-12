<template>

  <div class="Register">

    <div class="content">

      <img class="picture" :src="logo">

      <el-form class="myform" :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" >
        <el-form-item label="邮箱  " prop="pass">
          <el-input v-model="ruleForm2.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码  " prop="pass">
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm('ruleForm2')">
            确认注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary">
            <router-link to="/a" style="text-decoration: none; color:white">
              返回登录
           </router-link>
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

  export default {
    data () {
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
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        project,
        logo,
        ruleForm2: {
          email: '',
          password: '',
          checkPass: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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

  .Register {
    position: absolute;
    top: 45%;
    left: 50%;
    width:280px;
    height:400px;
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
    width: 270px;
    height: 40px;
    /*margin-left:-5px;*/
    margin-top: 20px;
  }

  .line {
    width: 270px;
    height: 1px;
    margin-top: 50px;
    margin-left:10px;
    background-color: #C0C0C0;
  }

  .textButton {
    display: flex;
    flex-direction: row;
    margin-left:18px;
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
