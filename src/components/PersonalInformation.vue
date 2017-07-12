<template>
  <div>
    <div class="bar">
      <img class="picture" :src="project"/>
      <div id="headline">
        个人信息
      </div>
    </div>
    <div id="body">
      <el-form label-position="left" label-width="100px" :model="formLabelAlign">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker
            class="picker"
            v-model="formLabelAlign.birthday"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item label="网址">
          <el-input v-model="formLabelAlign.website"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary">保存修改</el-button>
        <el-button>清空内容</el-button>
        </el-form-item>
      </el-form>
      <!--<div id="avatarSection">-->
        <!--<div class="Text">-->
          <!--头像-->
        <!--</div>-->
        <!--<avatar :src="myAvatar" class="my-avatar"></avatar>-->
        <!--<el-button>上传新头像</el-button>-->
      <!--</div>-->

      <!--<div id="nameSection">-->
        <!--<div class="Text">-->
          <!--姓名-->
        <!--</div>-->
        <!--<div class="input">-->
          <!--<el-input v-model="username" placeholder="请输入内容"></el-input>-->
        <!--</div>-->

      <!--</div>-->

      <!--<div id="birthdaySection">-->
        <!--<div class="Text">-->
          <!--生日-->
        <!--</div>-->
        <!--<div class="birthdaySelect">-->
          <!--<el-date-picker-->

            <!--v-model="birthday"-->
            <!--type="date"-->
            <!--placeholder="选择日期"-->
            <!--:picker-options="pickerOptions0">-->
          <!--</el-date-picker>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div id="phoneSection">-->
        <!--<div class="Text">-->
          <!--联系电话-->
        <!--</div>-->
        <!--<div class="inputPhone">-->
          <!--<el-input v-model="telephone" placeholder="请输入内容"></el-input>-->
        <!--</div>-->
      <!--</div>-->

      <!--<div id="websiteSection">-->
        <!--<div class="Text">-->
          <!--网址-->
        <!--</div>-->
        <!--<div class="input">-->
          <!--<el-input v-model="website" placeholder="请输入内容"></el-input>-->
        <!--</div>-->

      <!--</div>-->
      <!--<div>-->
        <!--<div></div>-->
        <!--<el-button type="primary" id="buttonSection">保存修改</el-button>-->
      <!--</div>-->
    </div>
  </div>
</template>


<script>
  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'
  import Avatar from './Avatar.vue'
  export default {
    data () {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          birthday: '',
          website: '',
          tel: '',
          avatar: logo
        },
        project,
        logo,
        username: '王丹丹',
        birthday: '',
        telephone: '15392919283',
        website: '你好',
        myAvatar: logo,
        pickerOptions: {
        },
        Avatar
      }
    },
    components: {
      Avatar
    }
  }

</script>


<style scoped="">
  .reverse-avatar {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
  }
  .btn-avatar {
    /*width: 50%;*/
  }
  .save {
  }
  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top:-20px;
    margin-left:-20px;
    width: 430px;
    height: 65px;
    font-size: 18px;
    color:#3E5568;
    background-color: #E7F1F0;
  }

  .picture {
    height: 23px;
    width: 27px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 20px;
  }

  #headline {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #3E5568;
  }

  #body {
    padding: 30px 20px 20px 5px;
  }

  .picker {
    padding-left: 40px;
  }

  .form-avatar {
    margin-left: 100px;
    margin-bottom: -10px;
    width: 100px;
    height: 100px;
  }
  .avatar-label {
    padding-top: 30px;
  }

  #avatarSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .Text {
    color: #A1BDBF;
    font-size: 16px;
  }

  .avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  #nameSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  .input {
    margin-left: 50px;
    width: 193px;
    height: 40px;
  }

  #birthdaySection {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  .birthdaySelect {
    margin-left: 50px;
    width: 100px;
    height: 40px;
  }

  #phoneSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  .inputPhone {
    margin-left: 18px;
    width: 193px;
    height: 40px;
  }

  #websiteSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  #buttonSection {
    align-items: center;
    margin-top: 20px;
    margin-left: 82px;
    width: 193px;
    text-align: center;
  }

  .myAvatar {
    width: 300px;
    height: 300px;
    border: black 1px solid;
  }

</style>
