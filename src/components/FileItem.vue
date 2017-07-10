<template>
  <div class="fileItem">

    <div class="item" id="item1">
      <el-checkbox v-model="checked"></el-checkbox>
      <img id="picture" :src="img">
      <a class="text" style="margin:0px 60px 0px 220px">{{size}}M</a>
      <a class="text" style="margin:2px 60px 0px 70px">{{name}}</a>
      <a class="text" style="margin:2px 30px 0px 50px" width="100px">{{date}}</a>
      <!--<img src="file" class="picture" height="35px" width="35px" style="border-radius:50%; margin:4px 0px 0px 60px; ">-->
    </div>

  </div>
</template>

<script>
  //  import file from '@/assets/icons/file.png';
  export default {
    props: {
      checkState: Boolean,
      img: String,
      size: Number,
      name: String,
      date: String
    },
    data () {
      return {
        checked: this.checkState
      }
    }
  }
</script>


<style scoped>
  /*.file{*/
  /*!*display:flex;*!*/
  /*!*flex-direction:column;*!*/
  /*margin:200px 400px 200px 200px;*/
  /*left:60px;*/
  /*top:30px;*/
  /*background-color: #cccccc;*/
  /*width: 1040px;*/
  /*height:635px;*/
  /*}*/

  .text {
    /*display:flex;*/
    /*flex-direction:row;*/
    background-color: transparent;
  }

  #picture {
    weight: 5px;
    height: 5px;
    background-color: #f9c855;
  }

  .item {
    /*display:flex;*/
    /*flex-direction:row;*/
    margin: 2px
  }

</style>
