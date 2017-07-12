<template>
  <div class="setting-container">
    <div id="setting">
      <div id="leftSection">
        <div class="usercard">
          <avatar :src="null" class="my-avatar"></avatar>
          <div id="username">李碧纯</div>
        </div>
        <el-card id="selector">
          <div class="page-switch" :class="{'page-switch-active': pageSwitch === 0}" @click="pageSwitch=0">
            个人信息
          </div>
          <div class="page-switch" :class="{'page-switch-active': pageSwitch === 1}"@click="pageSwitch=1">
            账号密码
          </div>
        </el-card>
      </div>
      <div id="rightSection">
        <el-card class="box-card">
          <personal-information v-if="pageSwitch===0"></personal-information>
          <account-password v-else=""></account-password>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountPassword from 'COMPONENTS/AccountPassword'
  import PersonalInformation from 'COMPONENTS/PersonalInformation'
  import Avatar from 'COMPONENTS/Avatar'

  export default {
    data () {
      return {
        pageSwitch: 0
      }
    },
    components: {
      AccountPassword,
      PersonalInformation,
      Avatar
    },
    methods: {
    }
  }

</script>

<style>
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
    /*margin-top: 50px;*/
  }

  .page-switch {
    display: flex;
    align-items: center;
    height: 65px;
    width: 300px;
    /*margin-left: -20px;*/
    /*margin-top: -20px;*/
    /*background-color: #E7F1F0;*/
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
