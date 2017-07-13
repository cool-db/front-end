<template>
  <div class="home-page-main">
    <div class="home-page-box">

      <div class="home-page-header">我拥有的项目</div>

      <home-card
        v-for="n in 5"
        projName="项目名称"
        projNote="项目说明"
        :key="n"></home-card>

      <el-card class="new-proj">
        <div class="new-proj-box">
          <i class="el-icon-plus"></i>
          <span style="font-size: 18px">创建新项目</span>
        </div>
      </el-card>


    </div>
  </div>
</template>

<script>
  import HomeCard from '@/components/HomeCard.vue'
  import picBg from '@/assets/cover-demo.jpg'
  export default {
    components: {
      HomeCard},
    data () {
      return {
        picBg
      }
    }
  }
</script>

<style scoped>
  .home-page-main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .home-page-box{
    display: flex;
    display: -webkit-flex;
    width: 1100px;
    margin: 30px;
    flex-wrap: wrap;
  }

  .home-page-header{
    width: 100%;
    font-size: 18px;
    margin: 20px;
  }

  .new-proj{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin: 5px 8px;
    cursor: pointer;
    width: 254px;
    height: 148px;
    color: #888;
  }

  .new-proj-box{
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .el-icon-plus{
    font-size: 30px;
    color: inherit;
    margin: 10px;
  }

</style>
