/**
* Created by dustar on 2017/7/11.
*/

<template>
  <el-dropdown trigger="click" :menu-align="'start'" @command="handleData">
    <slot class="el-dropdown-link">
      Error
    </slot>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item disabled>可选择用户列表</el-dropdown-item>
      <el-dropdown-item v-for="(user, key) in users" :key="user.id" :command="''+user.id">
          <span class="user">
            <div :class="owner.id === user.id?'active':''" class="user-item"><img class="avatar" :src="user.avatar">{{user.name}}</div>
            <div v-if="owner.id === user.id"><i class="el-icon-check"></i></div>
          </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import blankAvatar from '@/assets/icons/nav_bar/blank-avatar.png'
  import {mapMutations} from 'vuex'
  import {CHANGEEXECUTOR} from 'MODULE/task'
  export default {
    data () {
      return {
        name: 'hi',
        blankAvatar
      }
    },
    props: [
      'users',
      'owner'
    ],
    methods: {
      handleData (command) {
        this.changeE(parseInt(command))
      },
      ...mapMutations({
        changeE: CHANGEEXECUTOR
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user {

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .user-item {
    color: #475669;
    display: flex;
    align-items: center;
  }

  .active {
    color: #33CCCC;
  }

  .avatar {
    height: 20px;
    padding-right: 10px;
  }

  i {
    color: #13CE66;
  }
</style>
