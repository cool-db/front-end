<template>
  <div class="home-page-main">
    <div class="home-page-box">

      <div class="home-page-header">
        <span style="margin-right: 6px">我拥有的项目</span><badge>{{ownCount}}</badge>
      </div>

      <home-card
        v-for="n in 6"
        :key="n"
        projName="项目名称"
        projNote="项目说明"></home-card>

      <el-card class="new-proj">
        <div class="new-proj-box">
          <i class="el-icon-plus"></i>
          <span style="font-size: 18px">创建新项目</span>
        </div>
      </el-card>

      <div class="home-page-header" >
        <span style="margin-right: 6px">我参与的项目</span><badge>{{joinCount}}</badge>
      </div>

      <home-card
        v-for="n in 5"
        :key="n"
        projName="项目名称"
        projNote="项目说明"></home-card>

    </div>
  </div>
</template>

<script>
  import HomeCard from '@/components/HomeCard.vue'
  import Badge from '@/components/Badge.vue'
  export default {
    components: {HomeCard, Badge},
    data () {
      return {
        ownCount: 6,
        joinCount: 5
      }
    }
  }
</script>

<style scoped>
  .home-page-main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    height: calc(100vh - 49px);
    overflow-y: scroll;
  }

  .home-page-box{
    display: flex;
    display: -webkit-flex;
    width: 1100px;
    flex-wrap: wrap;
  }

  .home-page-header{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    width: 100%;
    font-size: 18px;
    margin: 40px 15px 8px 15px;
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
