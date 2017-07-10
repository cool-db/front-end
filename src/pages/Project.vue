<template>
  <div id="project-container">
    <el-row id="project-header" ref="choosePage">
        <span class="change-current-page">
          <el-col :span="2" :offset="9">
            <div class="change-current-page-item" :class='{currentpage: currentPage==="tasks"}' @click="currentPage = 'tasks'"><div>任务</div></div>
          </el-col>
          <el-col :span="2">
            <div class="change-current-page-item" :class='{currentpage: currentPage==="files"}' @click="currentPage = 'files'"><div>文件</div></div>
          </el-col>
          <el-col :span="2">
            <div class="change-current-page-item" :class='{currentpage: currentPage==="calenders"}' @click="currentPage = 'calenders'"><div>日程</div></div>
          </el-col>
        </span>


      <span class="project-menu">
        <div class="project-menu-item" :class='{currentmenu: currentMenu === "member"}' @click="currentMenu='member'">1</div>
        <transition name="el-zoom-in-center">
          <div class="project-menu-item" :class='{currentmenu: currentMenu === "view"}' @click="currentMenu='view'" v-if="currentPage==='tasks'">2</div>
        </transition>
        <div class="project-menu-item" :class='{currentmenu: currentMenu === "setting"}' @click="currentMenu='setting'">3</div>
      </span>


    </el-row>
    <transition name="fade-choose">
      <section v-show="currentPage === 'tasks'" class="tasks-container">
        <tasks :id="projectId">1</tasks>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'files'" class="files-container">
        <files :id="projectId">2</files>
      </section>
    </transition>
    <transition name="fade-choose">
      <section v-show="currentPage === 'calenders'" class="calenders-container">
        <calenders :id="projectId">3</calenders>
      </section>
    </transition>



  <transition name="slide-fade">

      <section v-show="currentMenu==='member'" class="rightbar">
        <section class="rightbar-header">
          <section>
            <i class="rightbar-icon iconfont icon-gengduo"></i>
            <span class="rightbar-name">项目成员</span>
          </section>
          <span class="rightbar-close iconfont icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content"></div>
      </section>
  </transition>
    <transition name="slide-fade">
      <section v-show="currentMenu==='view'" class="rightbar">
        <section class="rightbar-header">
          <section>
            <i class="rightbar-icon iconfont icon-gengduo"></i>
            <span class="rightbar-name">视图</span>
          </section>
          <span class="rightbar-close iconfont icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content"></div>
      </section>
    </transition>
    <transition name="slide-fade">
      <section v-show="currentMenu==='setting'" class="rightbar">
        <section class="rightbar-header">
          <section>
            <i class="rightbar-icon iconfont icon-gengduo"></i>
            <span class="rightbar-name">{{projectInfo.name}}</span>
          </section>
          <span class="rightbar-close iconfont icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content"></div>
      </section>
    </transition>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        projectId: null,  // 项目ID
        projectInfo: {
          name: '默认项目'
        },
        showLoading: false, // 显示加载动画
        currentPage: 'tasks', // 当前页面
        currentMenu: ''
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

    },
    computed: {

    },
    methods: {
      initData () {

      },
      changeShowType: (value) => {

      }
    },
    watch: {
      currentPage: function () {
        this.currentMenu = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #project-container {
    height: 578px;
  }

  #project-header {
    height: 48px;
    background: #E7F1F0;
    line-height: 48px;
    font-size: 16px;
    color:#97A4B1;
    border-bottom: #A1BDBF 1px solid;
  }


  .change-current-page-item {
    width: 100%;
    line-height: 40px;
    height: 40px;
    border-bottom: 4px transparent;
    padding-top: 4px;
    text-align: center;
  }
  .change-current-page-item :hover {
    border-bottom: 4px #33CCCC solid;
  }
  .currentpage {
    font-weight: bold;
    color: #33CCCC;
    border-bottom: 4px #33CCCC solid;
  }
  .currentmenu {
    color: #33CCCC;
  }
  .project-menu {
    text-align: center;
    float: right;
    margin-right: 5px;
  }
  .project-menu-item {
    width: 38px;
    display: inline-block;
    font-size: 24px;
    margin-right: 5px;
    background: red;
  }

  .project-menu-item :hover {

  }

  .project-menu > i {
    color: #33CCCC;
  }

  .project-menu > i:hover {

  }
  .fade-choose-enter-active, .fade-choose-leave-active {
    transition: opacity 1s;
  }
  .fade-choose-leave, .fade-choose-leave-active {
    display: none;
  }
  .fade-choose-enter, .fade-choose-leave-active {
    opacity: 0;
  }
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(300px);
    opacity: 0;
  }
  .tasks-container {
    background: #ffffff;
    width: 100%;
    height: 100%;
  }
  .files-container {
    background: #ffffff;
    width: 100%;
    height: 100%;
  }
  .calenders-container {
    background: #f8f8f8;
    width: 100%;
    height: 100%;
  }
  .item {
    margin-top: -20px;
    margin-left: -30px;
  }
  .rightbar {
    position: absolute;
    width: 350px;
    height: 626px;
    top: 48px;
    right: 0px;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.50);

  }
  .rightbar-header {
    line-height: 77px;
    background: #E8E8E8;
    color: #565656;
    height: 77px;
    display: flex;
    justify-content: space-between;
  }
  .rightbar-content {
    background: #F8F8F8;
    height: 549px;
  }
  .rightbar-icon {
    font-size: 36px;
    padding: 0 5px 0 25px;
  }
  .rightbar-name {
    font-size: 24px;
  }
  .rightbar-close {
    font-size: 36px;
    padding-right: 20px;
  }
  .rightbar-close:hover {
    color: #33CCCC;
  }
</style>
