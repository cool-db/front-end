/**
* Created by dustar on 2017/7/11.
*/

<template>
    <el-dropdown trigger="click" :menu-align="'start'" @command="handleCommand">
        <slot class="el-dropdown-link">
            Error
        </slot>
        <el-dropdown-menu slot="dropdown" class="pd-container">
            <el-dropdown-item v-for="(item, key) in items" :key="key" :command="key.toString()">
          <span class="item">
            <div :class="owner===key?'active':''" class="user-item"><img class="avatar" :src="item.icon">{{item.title}}</div>
            <div v-if="owner === key"><i class="el-icon-check"></i></div>
          </span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { CHANGEEMER } from 'MODULE/task'

  export default {
    data () {
      return {}
    },
    props: [
      'items',
      'owner'
    ],
    methods: {
      handleCommand (command) {
        this.changeEmer(parseInt(command))
      },
      ...mapMutations({
        changeEmer: CHANGEEMER
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pd-container {
        width: 125px;
    }

    .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
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
