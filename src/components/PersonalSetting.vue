<template>
  <div id="personalSetting">
    <div id="leftSection">
      <div id="avatar1">
        <avatar></avatar>
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
      <div id="personal" v-if="personal">
        <personal-information></personal-information>
      </div>
  
      <div id="account" v-if="account">
        <account-password></account-password>
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
        account: false
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
        var obj1 = document.getElementById('personalInformation1')
        obj1.style.backgroundColor = '#E7F1F0'
        var obj2 = document.getElementById('accountPassword1')
        obj2.style.backgroundColor = '#FFFFFF'
      },
      accountTurn: function () {
        this.account = true
        this.personal = false
        var obj1 = document.getElementById('personalInformation1')
        obj1.style.backgroundColor = '#FFFFFF'
        var obj2 = document.getElementById('accountPassword1')
        obj2.style.backgroundColor = '#E7F1F0'
      }
    }
  }

</script>

<style>
  #personalSetting{
    display: flex;
    flex-direction: row;
  }
  
  #leftSection{
    display: flex;
    flex-direction: column;
  }
  
  #rightSection{
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
