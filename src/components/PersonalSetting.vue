<template>
  <div class="container">
    <div id="setting">
      <div id="leftSection">
        <div id="avatar1">
          <avatar :src="null"></avatar>
        </div>

        <el-card id="selector">
          <div id="personalInformation1" @click="personalTurn()">
            个人信息
          </div>
          <div id="accountPassword1" @click="accountTurn()">
            账号密码
          </div>
        </el-card>
      </div>
      <div id="rightSection">
        <div id="personal" v-if="channelSwitch">
          <personal-information></personal-information>
        </div>

        <div id="account" v-else>
          <account-password></account-password>
        </div>
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
        personal: true,
        account: false,
        channelSwitch: 0
      }
    },
    components: {
      AccountPassword,
      PersonalInformation,
      Avatar
    },
    methods: {
      personalTurn: function () {
        this.personal = true
        this.account = false
      },
      accountTurn: function () {
        this.account = true
        this.personal = false
      }
    }
  }

</script>

<style scoped="">
  .container {
    background: blue;
    width: 100%;
    height: 100%;
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-around;*/
  }

  #setting {

    background: yellow;
    display: flex;
    flex-direction: row;

  }

  #leftSection {
    background: blue;
    display: flex;
    flex-direction: column;
  }

  #rightSection {
    background: blue;
    display: flex;
    flex-direction: column;
  }

  #avatar1 {

  }

  #selector {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    margin-top: 50px;
  }

  #personalInformation1 {
    display: flex;
    align-items: center;
    height: 65px;
    width: 300px;
    margin-left: -20px;
    margin-top: -20px;
    background-color: #E7F1F0;
    color: #3E5568;
    padding-left: 20px;
  }

  #accountPassword1 {
    display: flex;
    align-items: center;
    height: 65px;
    width: 300px;
    margin-left: -20px;
    background-color: #FFFFFF;
    color: #3E5568;
    padding-left: 20px;
  }

  #personal {
    margin-left: 50px;
  }

  #account {
    margin-left: 50px;
  }
</style>
