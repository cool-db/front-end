/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div id="home-container">
    <div id="home-header">
      <span id="home-left">
        <span id="project-header" v-show="currentMode === Mode.index">
          <div id="project-icon">Icon</div>
          <div id="project-name">项目名称</div>
          <div id="project-search">
            <el-input
              placeholder="在个人项目中搜索"
              icon="search"
              v-model="input2">
            </el-input>
          </div>
          <div id="project-add">+</div>
        </span>
      </span>
      <span id="home-right">
            <span class="home-menu">
              <div class="home-menu-item" :class='{currentmenu: currentMenu === "member"}' @click="currentMenu='member'">1</div>
              <div class="home-menu-item" :class='{currentmenu: currentMenu === "view"}' @click="currentMenu='view'">2</div>
              <div class="home-menu-item" :class='{currentmenu: currentMenu === "setting"}' @click="currentMenu='setting'">3</div>
            </span>
      </span>
    </div>
    <project></project>
  </div>
</template>

<script>
  import Project from './Project.vue'
  export default {
    data () {
      return {
        Mode: {
          index: 0,
          project: 1,
          my: 2
        },
        currentMode: 0,
        currentMenu: '',
        input2: ''
      }
    },
    created () {
      this.initData()
    },
    mounted () {

    },
    mixins: [

    ],
    components: {
      Project
    },
    computed: {

    },
    methods: {
      initData () {
      }
    },
    watch: {
      currentMode: function () {
        this.currentMenu = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #home-container {
    height: 626px;
  }

  #home-header {
    padding-left: 40px;
    height: 49px;
    background: #ffffff;
    line-height: 50px;
    font-size: 18px;
    color:#3E5568;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.5);
    z-index: 10;
    position: relative;
    width: auto;
    display: flex;
    justify-content: space-between;
  }

  #home-header div {

  }

  #home-left {
  }

  #home-left div {
    display: inline-block;
  }

  #home-right {
  }
  #home-right div {
    display: inline-block;
  }

  #project-search {
    width: 300px;
  }

  .home-menu {

    text-align: center;
    margin-right: 5px;
  }
  .home-menu-item {
    width: 38px;
    font-size: 24px;
    margin-right: 5px;
    background: blue;
  }

</style>
