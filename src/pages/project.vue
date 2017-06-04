<template>
  <div class="project-container">
    <el-row class="project-header" ref="choosePage">
        <span class="change-current-page">
          <el-col :span="2" :offset="9" :class='{currentpage: currentPage==="tasks"}'>
            <span @click="currentPage = 'tasks'">任务</span>
          </el-col>
          <el-col :span="2" :class='{currentpage: currentPage==="files"}'>
            <span @click="currentPage = 'files'">文件</span>
          </el-col>
          <el-col :span="2" :class='{currentpage: currentPage==="calenders"}'>
            <span @click="currentPage = 'calenders'">日程</span>
          </el-col>
        </span>


      <span class="project-menu">
            <i class="iconfont icon-friend" :class='{currentmenu: currentMenu === "member"}' @click="currentMenu='member'"></i>
            <el-badge :value="12" class="item"></el-badge>
            <transition name="el-zoom-in-center">
              <i class="iconfont icon-eye" :class='{currentmenu: currentMenu === "view"}' @click="currentMenu='view'" v-if="currentPage==='tasks'"></i>
            </transition>
            <i class="iconfont icon-more" :class='{currentmenu: currentMenu === "setting"}' @click="currentMenu='setting'"></i>
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
        <calender :id="projectId">3</calender>
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
  .project-container {
    height: 626px;
  }

  .project-header {
    height: 50px;
    background: #E7F1F0;
    line-height: 50px;
    font-size: 18px;
    color:#97A4B1;
    border-bottom: #A1BDBF 1px solid;
  }
  .change-current-page > :hover{
    border-bottom: 4px #33CCCC solid;
    padding-top: 4px;
    line-height: 42px;
  }
  .currentpage {
    font-weight: bold;
    color: #33CCCC;
    border-bottom: 4px #33CCCC solid;
    padding-top: 4px;
    line-height: 42px;
  }
  .currentmenu {
    color: #33CCCC;
  }
  .project-menu {
    float: right;
    text-align: right;
    margin-right: 5px;
  }

  .project-menu > i {
    text-align: right;
    font-size: 24px;
    margin-right: 15px;
  }

  .project-menu > i:hover {
    color: #33CCCC;
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
    top: 50px;
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
