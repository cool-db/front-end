<template>
  <div class="single-file-box">
    <el-card class="single-file">
      <div class="file-pic">
        <img :src="iconLogo" alt=""/>
      </div>
      <div class="file-info">
        {{fileInfo}}
      </div>
    </el-card>
  </div>

</template>

<script>
  import iconLogo from '@/assets/logo.png'
  export default {
    data () {
      return {
        iconLogo
      }
    },
    props: ['fileInfo']
  }
</script>

<style scoped>
  img{
    width: 106px;
    height: 106px;
  }

  .single-file-box{
    margin: 5px 20px;
    cursor: pointer;
  }

  .single-file{
    width: 148px;
    height: 180px;
  }

  .file-pic{
    width: 106px;
    height: 106px;
  }

  .file-info{
    width: 106px;
    height: 54px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
</style>
