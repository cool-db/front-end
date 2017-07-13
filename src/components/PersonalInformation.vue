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
                    <el-input v-model="formLabelAlign.phonenumber"></el-input>
                </el-form-item>
                <el-form-item label="网址">
                    <el-input v-model="formLabelAlign.website"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveModify">保存修改</el-button>
                    <el-button>清空内容</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>
  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'
  import Avatar from './Avatar.vue'

  import { changeUserInformation, getUserInformation } from 'API/userApi'

  export default {
    data () {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          birthday: '',
          website: '',
          phonenumber: '',
          avatar: logo
        },
        project,
        logo,
        pickerOptions: {}
      }
    },
    components: {
      Avatar
    },
    methods: {
      saveModify () {
        changeUserInformation()
      },
      getInfo () {
        getUserInformation(21)
          .then(item => {
            this.data = item
          }).catch(err => this.$message.error(err.message))
      }
    },
    created () {}
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
        margin-top: -20px;
        margin-left: -20px;
        width: 430px;
        height: 65px;
        font-size: 18px;
        color: #3E5568;
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
