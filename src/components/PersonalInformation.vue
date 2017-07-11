<template>
  <el-card class="box-card" id="personalInformation">
    <div id="bar">
      <img class="picture" :src="project"/>
      <div id="headline">
        个人信息
      </div>
    </div>
    <div id="body">
      <div id="avatarSection">
        <div class="Text">
          头像
        </div>
        <img class="avatar" :src="logo"/>
        <el-button>上传新头像</el-button>
      </div>
    
      <div id="nameSection">
        <div class="Text">
          姓名
        </div>
        <div class="input">
          <el-input v-model="nameInput" placeholder="请输入内容"></el-input>
        </div>
       
      </div>
    
      <div id="birthdaySection">
        <div class="Text">
          生日
        </div>
        <div class="birthdaySelect">
          <el-date-picker
            
            v-model="value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
          </el-date-picker>
        </div>
      </div>
    
      <div id="phoneSection">
        <div class="Text">
          联系电话
        </div>
        <div class="inputPhone">
          <el-input v-model="phoneNumberInput" placeholder="请输入内容"></el-input>
        </div>
      </div>
    
      <div id="websiteSection">
        <div class="Text">
          网址
        </div>
        <div class="input">
          <el-input v-model="websiteInput" placeholder="请输入内容"></el-input>
        </div>
        
      </div>
      <div >
        <div></div>
        <el-button type="primary" id="buttonSection">保存修改</el-button>
      </div>
    </div>
  </el-card>
</template>


<script>
  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'
  export default {
    data () {
      return {
        project,
        logo
      }
    },
    components: {
    }
  }
</script>


<style>
  #personalInformation{
    margin-left: 20px;
    margin-top: 20px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    width: 430px;
    height: 500px;
  }
  
  #bar{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 430px;
    height: 65px;
    margin-left: -20px;
    margin-top: -20px;
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
  
  #headline{
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #3E5568;
  }
  
  #avatarSection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  
  .Text{
    color: #A1BDBF;
    font-size: 16px;
  }
  
  .avatar{
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  
  #nameSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  
  .input{
    margin-left: 50px;
    width: 193px;
    height: 40px;
  }
  
  #birthdaySection{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  
  .birthdaySelect{
    margin-left: 50px;
    width: 100px;
    height: 40px;
  }
  
  #phoneSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  
  .inputPhone{
    margin-left: 18px;
    width: 193px;
    height: 40px;
  }
  
  #websiteSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }
  
  #buttonSection{
    align-items: center;
    margin-top: 20px;
    margin-left: 82px;
    width: 193px;
    text-align: center;
  }
  
</style>
