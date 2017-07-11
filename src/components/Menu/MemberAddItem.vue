/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="item">
      <div class="avatar"><img :src="icon"></div>
      <div class="right">
        <nobr>邀请 {{username}} 加入</nobr>
      </div>
    </div>
</template>

<script>
  import icon from '@/assets/icons/index/add-new-item.png'
  export default {
    props: ['username'],
    data () {
      return {
        icon
      }
    }

  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    cursor: pointer;
    padding: 10px;
    padding-left: 15px;
    flex-direction: row;
    display: flex;
  }
  .item:hover {
    background: white;
  }
  .avatar img {
    width: 45px;
    height: 45px;
  }
  .right {
    padding-left:10px;
    color: #33CCCC;
    font-size: 16px;
    padding-top: 14px;
    text-overflow : ellipsis;
  }

</style>
