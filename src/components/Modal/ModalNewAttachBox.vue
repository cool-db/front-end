/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="container">
      <img :src="iconAdd">
      <span>添加关联内容</span>
    </div>
</template>

<script>
  import iconAdd from '@/assets/icons/new_item/add-subtask.png'
  export default {
    data () {
      return {
        iconAdd,
        hovered: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    cursor: pointer;
    background: white;
    border-radius: 4px;
    border: 0.5px #e8e8e8 solid;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    font-size: 14px;
    color: #C0C0C0;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
  img {
    height: 20px;
    padding-right: 10px;
  }
  .container:hover{
    color: #33CCCC;
  }
</style>
