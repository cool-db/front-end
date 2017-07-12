<template>
  <div class="homepage">
    <div class="iOwnProject">
      <div class="headline1">
        我拥有的项目
        <div class="line"></div>
      </div>
      <div class="Projects">
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <el-card class="box-card" id="addProject">
          <img class="addIcon" :src="add" />
          <div>创建新项目</div>
        </el-card>
      </div>
      
    </div>
    
    <div class="participatedProject">
      <div class="headline1">
        我参与的项目
        <div class="line"></div>
      </div>
      <div class="Projects">
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
      </div>
    </div>
    
    <div class="achievedProject">
      <div class="headline1">
        已归档的项目
        <el-button type="text" id="display" @click="dispaly">{{displayOrConceal}}</el-button>
      </div>
      <div class="Projects" v-if="displayAchieved">
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
        <homepage-project></homepage-project>
      </div>
    </div>
    
  </div>
</template>

<script>
  import homepageProject from 'COMPONENTS/HomepageProject'
  import add from '@/assets/icons/new_item/add.png'
  export default {
    data () {
      return {
        add,
        displayAchieved: false,
        displayOrConceal: '显示'
      }
    },
    methods: {
      dispaly: function () {
        if (this.displayOrConceal === '显示') {
          this.displayOrConceal = '隐藏'
          this.displayAchieved = true
        } else {
          this.displayOrConceal = '显示'
          this.displayAchieved = false
        }
      }
    },
    components: {
      homepageProject
    }
  }
</script>

<style scoped>
  .homepage{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100px;
    background-color: #F2F2F2;
  }
  
  .iOwnProject{
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
  
  .headline1{
    display: flex;
    flex-direction: row;
    font-size: 18px;
    width: 1000px;
    color: #565656;
  }
  
  .line{
    background-color: #565656;
    height: 1px;
    margin-left: 30px;
    margin-top: 10px;
    width: 800px;
  }
  
  .Projects{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  
  #addProject{
    width: 240px;
    height: 120px;
    margin-left: 50px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    color: #B3BDC6;
  }
  
  .addIcon{
    width: 50px;
    height: 50px;
    margin-left: 15px;
    margin-bottom: 5px;
  }
  .achievedProject{
    display: flex;
    flex-direction: column;
    width: 1000px;
    align-items: center;
  }
  
  #display{
    margin-top: -8px;
    margin-left: 30px;
    font-size: 16px;
  }
  
  .participatedProject{
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
  
</style>
