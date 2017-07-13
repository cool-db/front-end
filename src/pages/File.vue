<!--<template>-->
  <!--<div class="file">-->

    <!--<div class="route">-->
      <!--<div class="bread-wrapper">-->
        <!--<el-breadcrumb separator="/">-->
          <!--<el-breadcrumb-item :to="{ path: '/' }">文件库</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item>文件夹一</el-breadcrumb-item>-->
          <!--<el-breadcrumb-item>文件夹二</el-breadcrumb-item>-->
        <!--</el-breadcrumb>-->
      <!--</div>-->
      <!--<div>-->
        <!--<img class="picture" :src="uploadFolder">-->
        <!--<img class="picture" :src="upload">-->
      <!--</div>-->
    <!--</div>-->


    <!--<div id="check">-->

      <!--<div class="namespace">-->
        <!--<el-checkbox v-model="checked">-->
        <!--</el-checkbox>-->
        <!--<div class="text1">名称</div>-->
      <!--</div>-->

      <!--<div class="text1">大小</div>-->
      <!--<div class="text1">创建者</div>-->
      <!--<div class="text1">更新时间</div>-->
      <!--<div>-->
        <!--<img class="picture" :src="menu">-->
        <!--<img class="picture" :src="project">-->
      <!--</div>-->


    <!--</div>-->


    <!--<div class="line">-->
    <!--</div>-->


    <!--<file-item v-for="(item, index) in fake"-->
               <!--:key="index"-->
               <!--:checkState="item.checkState"-->
               <!--:img="item.img"-->
               <!--:size="item.size"-->
               <!--:name="item.name"-->
               <!--:date="item.date"-->
               <!--:search="item.search"-->
               <!--:move="item.move"-->
               <!--:edit="item.edit"-->
               <!--:projectName="item.projectName">-->
    <!--</file-item>-->

  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import uploadFolder from '@/assets/icons/new_item/upload-folder.png'-->
  <!--import upload from '@/assets/icons/new_item/upload.png'-->

  <!--import menu from '@/assets/icons/new_item/menu.png'-->
  <!--import project from '@/assets/icons/nav_bar/project.png'-->

  <!--import search from '@/assets/icons/nav_bar/search.png'-->
  <!--import move from '@/assets/icons/new_item/move.png'-->
  <!--import edit from '@/assets/icons/drop_down_menu/edit.png'-->
  <!--import projectName from '@/assets/icons/my_profile/project-name.png'-->

  <!--import FileItem from 'COMPONENTS/FileItem.vue'-->

  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--checked: true,-->
        <!--uploadFolder,-->
        <!--upload,-->
        <!--menu,-->
        <!--project,-->
        <!--search,-->
        <!--move,-->
        <!--edit,-->
        <!--projectName,-->
        <!--fake: [-->
          <!--{-->
            <!--checkState: true,-->
            <!--img: menu,-->
            <!--size: 11.26,-->
            <!--name: 'chuichui',-->
            <!--date: '4月25日',-->
            <!--search: search,-->
            <!--move: move,-->
            <!--edit: edit,-->
            <!--projectName: projectName-->
          <!--},-->
          <!--{-->
            <!--checkState: true,-->
            <!--img: menu,-->
            <!--size: 16,-->
            <!--name: 'hha',-->
            <!--date: '4月28日',-->
            <!--search: search,-->
            <!--move: move,-->
            <!--edit: edit,-->
            <!--projectName: projectName-->
          <!--}]-->
      <!--}-->
    <!--},-->
    <!--components: {-->
      <!--FileItem-->
    <!--}-->
  <!--}-->
<!--</script>-->


<!--<style scoped>-->
  <!--.file {-->
    <!--margin: 0px 400px 0px 200px;-->
    <!--left: 60px;-->
    <!--top: 30px;-->
    <!--background-color: #ffffff;-->
    <!--width: 1040px;-->
    <!--height: 635px;-->
  <!--}-->

  <!--.picture {-->
    <!--height: 23px;-->
    <!--width: 27px;-->
    <!--margin-top:5px;-->
    <!--margin-bottom: 5px;-->
    <!--margin-right: 10px;-->
  <!--}-->

  <!--.text1 {-->
    <!--font-size: 16px;-->
    <!--color: #888888;-->
  <!--}-->

  <!--.namespace {-->
    <!--display: flex;-->
    <!--flex-direction: row;-->
  <!--}-->

  <!--.route {-->
    <!--display: flex;-->
    <!--flex-direction: row;-->
    <!--justify-content: space-between;-->
    <!--align-items: center;-->
  <!--}-->

  <!--.bread-wrapper {-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--border-left: #33CCCC solid;-->
    <!--height: 30px;-->
    <!--padding-left: 20px;-->
  <!--}-->


  <!--#check {-->
    <!--display: flex;-->
    <!--flex-direction: row;-->
    <!--justify-content: space-between;-->
    <!--margin: 20px 0px 0px 20px;-->
    <!--height:26px;-->
  <!--}-->

  <!--.line {-->
    <!--width: 1040px;-->
    <!--height: 3px;-->
    <!--margin-top:3px;-->
    <!--background-color:#C0C0C0 ;-->
  <!--}-->
<!--</style>-->

<template>
  <div class="file-master-2-main">
    <div class="file-master-2-box">

      <single-file v-for="n in 6" fileInfo="邱宇航.avi"></single-file>

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
    width: 952px;
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
