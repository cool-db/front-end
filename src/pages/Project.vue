<template>
  <div id="project-container">
    <div id="project-header" ref="choosePage">
      <div id="project-header-left" class="project-header-item"></div>
      <div class="change-current-page project-header-item">

        <div class="change-current-page-item" :class='{currentpage: currentPage==="tasks"}'
             @click="currentPage = 'tasks'">任务
        </div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="files"}'
             @click="currentPage = 'files'">文件
        </div>
        <div class="change-current-page-item" :class='{currentpage: currentPage==="calenders"}'
             @click="currentPage = 'calenders'">日程
        </div>

      </div>
      <div class="project-menu project-header-item">
        <div class="project-menu-item" :class='{currentmenu: currentMenu === "member"}'
             @click="currentMenu='member'">
          <img id="icon-member" :src="iconMember">
        </div>
        <transition name="el-zoom-in-center">
          <div class="project-menu-item" :class='{currentmenu: currentMenu === "view"}'
               @click="currentMenu='view'" v-if="currentPage==='tasks'">
            <img id="icon-view" :src="iconView">
          </div>
        </transition>
        <div class="project-menu-item" :class='{currentmenu: currentMenu === "setting"}'
             @click="currentMenu='setting'">
          <img id="icon-more" :src="iconMore">
        </div>
      </div>
    </div>

    <transition name="fade-choose">
      <section class="container">
        <router-view></router-view>
      </section>
    </transition>

    <transition name="slide-fade">
      <section v-if="currentMenu==='member'" class="rightbar">
        <section class="rightbar-header">
          <section class="rightbar-blank"></section>
          <section>
            <span class="rightbar-name">项目成员</span>
          </section>
          <span class="rightbar-close el-icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content">
          <menu-member></menu-member>
        </div>
      </section>
    </transition>
    <transition name="slide-fade">
      <section v-if="currentMenu==='view'" class="rightbar">
        <section class="rightbar-header">
          <section class="rightbar-blank"></section>
          <section>
            <span class="rightbar-name">视图</span>
          </section>
          <span class="rightbar-close el-icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content">
          <menu-view></menu-view>
        </div>
      </section>
    </transition>
    <transition name="slide-fade">
      <section v-if="currentMenu==='setting'" class="rightbar">
        <section class="rightbar-header">
          <section class="rightbar-blank"></section>
          <section>
            <span class="rightbar-name">{{projectInfo.name}}</span>
          </section>
          <span class="rightbar-close el-icon-close" @click="currentMenu=''"></span>
        </section>
        <div class="rightbar-content"></div>
      </section>
    </transition>


  </div>
</template>

<script>
  import iconMember from '@/assets/icons/nav_bar/project-member.png'
  import iconView from '@/assets/icons/nav_bar/view.png'
  import iconMore from '@/assets/icons/nav_bar/menu.png'
  import MenuMember from '../components/Menu/MenuMember.vue'
  import MenuView from '../components/Menu/MenuView.vue'

  export default {
    data () {
      return {
        projectId: null,  // 项目ID
        projectName: 'Default Project',
        projectInfo: {
          name: '默认项目'
        },
        showLoading: false, // 显示加载动画
        currentPage: 'tasks', // 当前页面
        currentMenu: '',
        iconMember,
        iconView,
        iconMore
      }
    },
    components: {
      MenuView,
      MenuMember
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
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #project-header {
    height: 48px;
    background: #E7F1F0;
    line-height: 48px;
    font-size: 16px;
    color: #97A4B1;
    border-bottom: #A1BDBF 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .project-header-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #project-header {
    height: 48px;
    background: #E7F1F0;
    line-height: 48px;
    font-size: 16px;
    color: #97A4B1;
    border-bottom: #A1BDBF 1px solid;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .project-header-item {

  }

  .change-current-page-item {
    display: inline-block;
    width: 80px;
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
    background: #A1BDBF;
  }

  .project-menu {
    text-align: center;
    float: right;
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
  }

  .project-menu-item {
    width: 42px;
    display: inline-block;
    font-size: 24px;
    margin-right: 0;
    padding: 0 5px 0 5px;
  }

  .project-menu {
    text-align: center;
    float: right;
    margin-right: 5px;
    display: flex;
    justify-content: flex-end;
  }

  .project-menu-item {
    width: 38px;
    display: inline-block;
    font-size: 24px;
    margin-right: 0px;
    padding: 0 5px 0 5px;
  }

  .project-menu-item :hover {

  }

  .project-menu > i {
    color: #33CCCC;
  }

  .project-menu > i:hover {

  }

  .fade-choose-enter-active, .fade-choose-leave-active {
    transition: 1s;
  }

  .fade-choose-leave, .fade-choose-leave-active {
    display: none;
  }

  .fade-choose-enter, .fade-choose-leave-active {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(300px);
    opacity: 0.5;
  }

  .container {
    background: #ffffff;
    flex: 1;
    margin-top: 8px;
    margin-bottom: 11px;
  }

  .rightbar {
    position: absolute;
    width: 350px;
    top: 98px;
    right: 0;
    height: calc(100vh - 98px);
    overflow-y: scroll;
    box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.20);
  }

  .rightbar-header {
    line-height: 60px;
    background: #E8E8E8;
    color: #565656;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .rightbar-blank {
    width: 50px;
  }

  .rightbar-content {
    background: #F8F8F8;
  }

  .rightbar-name {
    font-size: 18px;
  }

  .rightbar-close {
    font-size: 20px;
    padding-right: 15px;
    padding-top: 20px;
  }

  .rightbar-close:hover {
    color: #33CCCC;
  }

  img {
    width: 25px;
  }

  .rightbar-content {
    background: #F8F8F8;
    height: 549px;
  }

  .rightbar-icon {
    font-size: 36px;
    padding: 0 5px 0 25px;
  }

  img {
    width: 25px;

  }

  #icon-member, #icon-view, #icon-more {
    width: 21px;
  }

  #project-header-left, .project-menu {
    width: 300px;
  }
</style>
