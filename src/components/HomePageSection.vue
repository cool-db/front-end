<template>
  <div class="homepage">
    <div class="iOwnProject">
      <div class="headline1">
        我拥有的项目
        <div class="line" id="line1"></div>
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
        <div class="line" id="line2"></div>
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
    
  </div>
</template>

<script>
  import homepageProject from 'COMPONENTS/HomepageProject'
  export default {
    data () {
      return {}
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
  
  .achievedProject{
    display: flex;
    flex-direction: column;
    width: 1000px;
  }
</style>
