<template>
  <!--<div id="app">-->
  <!--<img src="./assets/logo.png">-->
  <!--<h1>{{ msg }}</h1>-->
  <!--<el-button @click.native="startHacking">Let's do it</el-button>-->
  <!--</div>f-->
  <div id="bar">

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">

      <a class="index" style="margin: 12px 0px 5px 10px;">
        项目名称
      </a>

      <el-input class="input" style="width: 200px; margin: 5px 0px 5px 10px;border-radius:50%"
                placeholder="搜索内容"
                icon="search"
                v-model="input2"
                :on-icon-click="handleIconClick">
      </el-input>

      <el-button type="primary" class="plus" icon="plus" style="margin: 0px 5px 0px 10px; padding:8px 2px 8px 2px; height:30px; width:30px; border-radius: 50%"></el-button>

      <el-button type="primary" class="item" icon="menu" style="margin: 0px 5px 0px 650px; padding:8px 2px 8px 2px; height:30px; width:30px; border-radius: 50%"></el-button>

      <el-button type="primary" class="item" icon="document" style="margin:  0px 5px 0px 50px; padding:8px 2px 8px 2px; height:30px; width:30px; border-radius: 50%"></el-button>

      <el-badge :value="3" class="item" style="color:lightpink; ">
        <el-button type="primary" icon="message" style="margin: 0px 5px 0px 50px; padding:8px 2px 8px 2px; height:30px; width:30px; border-radius: 50%"></el-button>
      </el-badge>



      <img src="../assets/3.jpg" class="picture" height="35px" width="35px" style="border-radius:50%; margin:4px 0px 0px 60px; ">

    </el-menu>

  </div>

</template>


<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input2: ''
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      handleIconClick (ev) {
        console.log(ev)
      }
    }
  }
</script>



<style>
  body {
    font-family: Helvetica, sans-serif;
    padding: 0;
    margin: 0;
  }
  .el-menu{
    position:absolute;
  }
  .el-menu-demo{
    /*border: 2px solid #eaeefb;*/
    border: 1px solid lightgray;
    padding-top: 0;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
    position:absolute;
    align-items: center;
    top:0px;
  }
  .index{
    flex: 0 0 12em;
  }
  .input{
    justify-content: center;
    align-items: center;
  }
  .plus{

  }
  .item {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-right: 40px;
    font-size: small;
  }
  .picture{

  }
  /*.el-button--primary{*/
    /*background-color: #33cccc;*/
    /*border-color: transparent;*/
  /*}*/
  /*.el-input__inner{*/
    /*border-radius: 50px;*/
  /*}*/

  .el-menu-demo{
    margin-top: 0;
  }

</style>
