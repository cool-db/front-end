<template>
  <div class="setting-container">
    <div id="setting">
      <div id="leftSection">
        <div class="usercard">
          <avatar :src="avatar" class="my-avatar"></avatar>
          <div id="username">{{name}}</div>
        </div>
        <el-card id="selector">
          <div class="page-switch" :class="{'page-switch-active': pageSwitch === 0}" @click="pageSwitch=0">
            个人信息
          </div>
          <div class="page-switch" :class="{'page-switch-active': pageSwitch === 1}" @click="pageSwitch=1">
            账号密码
          </div>
        </el-card>
      </div>
      <div id="rightSection">
        <el-card class="box-card">
          <personal-information v-if="pageSwitch === 0"
                                :info="personInfo"
                                :getInfo="getInfo"
                                :clearAll="clearAll"></personal-information>
          <account-password v-else
                            :info="personInfo"
                            :getInfo="getInfo"
                            :clearAll="clearAll"></account-password>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountPassword from 'COMPONENTS/AccountPassword'
  import PersonalInformation from 'COMPONENTS/PersonalInformation'
  import Avatar from 'COMPONENTS/Avatar'

  import {getUserInformation} from 'API/userApi'

  export default {
    data () {
      return {
        pageSwitch: 0,
        name: '',
        personInfo: {}
      }
    },
    components: {
      AccountPassword,
      PersonalInformation,
      Avatar
    },
    methods: {
      getInfo (id) {
        return getUserInformation(id)
          .then(item => {
            this.name = item.name
            this.avatar = item.avatar
            this.personInfo = item
          }).catch(err => this.$message.error(err.message))
      },
      clearAll () {
        for (let attr in this.personInfo) {
          if (this.personInfo.hasOwnProperty(attr)) {
            this.personInfo[attr] = ''
          }
        }
      }
    },
    created () {
      const uid = localStorage.getItem('token')
      this.getInfo(uid)
    }
  }

</script>

<style scoped="">
  .reverse-avatar {
    margin-top: 10px;
  }

  .usercard {
    background: #33cccc;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .setting-container {
    padding-top: 20px;
  }

  #setting {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  #username {
    font-size: 18px;
  }

  #leftSection {
  }

  #rightSection {
    margin-left: 10px;
    width: 430px;
    display: flex;
    flex-direction: column;
    height: 550px;
  }

  #selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 225px;
  }

  .page-switch {
    display: flex;
    align-items: center;
    height: 65px;
    width: 300px;
    color: #3E5568;
    padding-left: 60px;
    cursor: pointer;
  }

  .page-switch:hover {
    color: #33cccc;
  }

  .page-switch-active {
    background: #e7f1f0;
  }

  .my-avatar {
    width: 100px;
    height: 100px;
    background: white;
    margin-top: 30px;
    margin-bottom: 20px;
  }
</style>
