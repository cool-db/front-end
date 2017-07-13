/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div>
        <div id="home-header">
            <div id="home-left">
                <div id="title-bar">
                    <div id="project-icon"><img :src="iconProject"></div>
                    <div id="project-name">{{ pageTitle }}</div>
                </div>
                <div id="project-search">
                    <el-input
                            placeholder="在个人项目中搜索"
                            icon="search"
                            v-model="searchBarInput">
                    </el-input>
                </div>
                <add-icon></add-icon>
            </div>
            <div id="home-right">
                <div class="home-menu">
                    <div class="home-menu-item"><img :src="iconFeedback"></div>
                    <div class="home-menu-item">
                        <router-link to="/my"><img :src="iconMy"></router-link>
                    </div>
                    <div class="home-menu-item"><img :src="iconMessage"></div>
                    <avatar-dropdown>
                        <img id="avatar" :src="avatar ? avatar : avatarDefault">
                    </avatar-dropdown>
                </div>
            </div>
        </div>
        <div id="home-container">
            <transition name="router-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
  import iconProject from '@/assets/icons/nav_bar/project.png'
  import iconProjectOn from '@/assets/icons/nav_bar/project-on.png'
  import iconAdd from '@/assets/icons/nav_bar/add.png'
  import iconFeedback from '@/assets/icons/nav_bar/feedback.png'
  import iconMy from '@/assets/icons/nav_bar/my-profile.png'
  import iconMessage from '@/assets/icons/nav_bar/message.png'
  import avatarDefault from '@/assets/icons/nav_bar/blank-avatar.png'

  import AddIcon from '@/components/AddIcon.vue'
  import AvatarDropdown from '@/components/AvatarDropdown.vue'
  export default {
    data () {
      return {
        pageTitle: 'Default Project',
        searchBarInput: '',
        messageCount: 5,
        iconProject,
        iconProjectOn,
        iconAdd,
        iconFeedback,
        iconMy,
        iconMessage,
        avatarDefault,
        avatar: null
      }
    },
    components: {
      AddIcon,
      AvatarDropdown
    },
    computed: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img {
        width: 20px;
        height: 20px;
        margin: 15px 10px 15px 10px;
    }

    #home-left img {

    }

    #project-add img {
        width: 20px;
        height: 20px;
    }

    #home-header {
        padding-left: 30px;
        height: 49px;
        background: #ffffff;
        line-height: 49px;
        font-size: 18px;
        color: #3E5568;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        z-index: 10;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #home-left {
        height: 49px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #home-left div {
        display: inline-flex;
        margin-right: 8px;
    }

    #home-right {
        height: 49px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #home-right div {
        display: inline-flex;
    }

    #project-search {
        width: 300px;
        padding: 0px 0 0 20px;
    }

    .home-menu {
        text-align: center;
        margin-right: 5px;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .home-menu-item {
        cursor: pointer;
        width: 40px;
        height: 49px;
        padding-right: 5px;
        padding-left: 5px;
        line-height: 49px;
    }

    #avatar {
        width: 40px;
        height: 40px;
        margin: 5px 5px 0 10px;
        cursor: pointer;
    }

    #home-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #title-bar {
        cursor: pointer;
    }

    #title-bar :hover {
        color: #33cccc;
    }

    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .2s;
    }
</style>
