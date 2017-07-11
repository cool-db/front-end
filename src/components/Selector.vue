<template>
  <el-card id="selector">
    <div id="personalInformation" onclick="personal">
      个人信息
    </div>
    <div id="accountPassword" onclick="account">
      账号密码
    </div>
  </el-card>
</template>

<style>
  #selector{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
  }

  #personalInformation{
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

  #accountPassword{
    display: flex;
    align-items: center;
    height: 65px;
    width: 300px;
    margin-left: -20px;
    background-color: #FFFFFF;
    color: #3E5568;
    padding-left: 20px;
  }

</style>
