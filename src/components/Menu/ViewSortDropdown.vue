/**
* Created by dustar on 2017/7/12.
*/

<template>
  <el-dropdown class="container" trigger="click" :menu-align="'start'" @command="handleCommand">
    <slot>
    error
    </slot>
    <el-dropdown-menu class="dropdown" slot="dropdown">
      <el-dropdown-item v-for="(item, key) in items" :key="key" :command="key.toString()">
          <span class="item">
            <div :class="owner===key?'active':''" class="mode-item">{{item}}</div>
            <div v-if="owner === key"><i class="el-icon-check"></i></div>
          </span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: [
      'owner',
      'items'
    ],
    methods: {
      handleCommand (command) {
        console.log(command + '1')
        this.$emit('changeMode', command)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit  to this component only -->
<style scoped>
  .container {
    width: 100%;
  }
  .dropdown {
    width: 200px;
  }
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .mode-item {
    color: #475669;
    display: flex;
    align-items: center;
  }
  .active {
    color:#33CCCC;
  }
  .avatar {
    height: 20px;
    padding-right: 10px;
  }
  i {
    color: #13CE66;
  }
</style>
