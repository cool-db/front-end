/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="ViewFilterItem" @click="item.checked=!item.checked">
      <div class="container">
      <div class="left">
        <img class="avatar" :src="item.avatar" v-if="item.isUser">
        <div>{{item.name}}</div>
      </div>
      <div class="check" v-if="item.checked"><i class="el-icon-check"></i></div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        checked: false
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ViewFilterItem {
    color: #888888;
    height: 40px;
    line-height: 40px;
    width: 100%;
  }
  .container {
    margin-left: 58px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .left{
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .check {
    font-size: 10px;
  }
  .ViewFilterItem:hover {
    background: #E7F1F0;
  }
  .avatar {
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

</style>
