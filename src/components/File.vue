<template>
  <div class="file">

    <div class="route">
      <div class="bread-wrapper">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">文件库</el-breadcrumb-item>
          <el-breadcrumb-item>文件夹一</el-breadcrumb-item>
          <el-breadcrumb-item>文件夹二</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div>
        <img id="picture3" :src="uploadFolder">

      </div>

    </div>


    <div id="check">
      <el-checkbox v-model="checked">名称</el-checkbox>
      <a class="text" style="margin:0px 100px 0px 200px">大小</a>
      <a class="text" style="margin:0px 80px 0px 50px">创建者</a>
      <a class="text" style="margin:0px 30px 0px 50px" width="100px">更新时间</a>


      <div id="line">
      </div>

      <div class="item" id="item1">
        <el-checkbox v-model="checked"></el-checkbox>
        <img id="picture5" style="background-color: #5e7382">
        <a class="text" style="margin:0px 60px 0px 220px">11.26M</a>
        <a class="text" style="margin:2px 60px 0px 70px">创建者名称</a>
        <a class="text" style="margin:2px 30px 0px 50px" width="100px">4月12日</a>
        <!--<img id="picture3" :src="file" >-->
        <!--<img id="picture4" >-->
      </div>


      <div class="item" id="item2">
        <el-checkbox v-model="checked"></el-checkbox>
        <img id="picture6" style="background-color: #5e7382">
        <a class="text" style="margin:0px 60px 0px 220px">11.26M</a>
        <a class="text" style="margin:2px 60px 0px 70px">创建者名称</a>
        <a class="text" style="margin:2px 30px 0px 50px" width="100px">4月12日</a>

      </div>
      <file-item v-for="(item, index) in fake"
                 :key="index"
                 :checkState="item.checkState"
                 :img="item.img"
                 :size="item.size"
                 :name="item.name"
                 :date="item.date">

      </file-item>

    </div>


  </div>
</template>

<script>
  import file from '@/assets/icons/index/file.png'
  import uploadFolder from '@/assets/icons/new_item/upload-folder.png'

  import FileItem from './FileItem.vue'

  export default {
    data () {
      return {
        checked: true,
        file,
        uploadFolder,
        fake: [
          {
            checkState: true,
            img: file,
            size: 11.26,
            name: 'chuichui',
            date: '4yue25ri'
          }
        ]
      }
    },
    components: {
      FileItem
    }
  }
</script>


<style scoped>
  .file {
    margin: 200px 400px 200px 200px;
    left: 60px;
    top: 30px;
    background-color: #cccccc;
    width: 1040px;
    height: 635px;
  }

  .text {
    /*display:flex;*/
    /*flex-direction:row;*/
    background-color: transparent;
  }

  .item {
    /*display:flex;*/
    /*flex-direction:row;*/
    margin: 2px
  }

  .route {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .bread-wrapper {
    display: flex;
    align-items: center;
    border-left: 5px green solid;
    height: 50px;
    padding-left: 20px;
  }

  #check {
    /*display:flex;*/
    /*flex-direction:row;*/
    margin: 10px 26px 557px 5px;
    padding: 0px 150px 50px 30px;
  }

  #line {
    display: flex;
    flex-direction: column;
    margin-left: -4.2%;
    margin-top: 8px;
    background-color: #8c939d;
    width: 1040px;
    height: 1px;
  }
</style>
