<template>
  <div class="file-master-2-main">
    <div class="file-master-2-box">

      <!--这里是数据测试区-->
      <single-file fileName="邱宇航" fileType=".git"></single-file>
      <single-file fileName="邱宇航" fileType=".html"></single-file>
      <single-file fileName="邱宇航" fileType=".rar"></single-file>
      <single-file fileName="邱宇航" fileType=".mp3"></single-file>
      <single-file fileName="邱宇航" fileType=".ppt"></single-file>
      <single-file fileName="邱宇航" fileType=".png"></single-file>
      <single-file fileName="邱宇航" fileType=""></single-file>
      <single-file fileName="邱宇航-2" fileType=".html"></single-file>

      <div class="uploader-last">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>


    </div>
  </div>
</template>

<script>
  import SingleFile from '@/components/My/SingleFile.vue'
  export default {
    components: {SingleFile},
    data () {
      return {
        imageUrl: ''
      }
    }
  }
</script>

<style scoped>
  .file-master-2-main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .file-master-2-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    justify-content: flex-start;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .uploader-last{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
  }

  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 180px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
