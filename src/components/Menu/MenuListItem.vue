/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="MenuListItem">
      <div class="left">
        <img :src="icon">
        <div class="title">
          {{ title }}
        </div>
      </div>
      <div class="right">
        <slot class="right-item">
        </slot>
      </div>
    </div>
</template>

<script>
  export default {
    props: [
      'icon',
      'title'
    ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MenuListItem {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    line-height: 25px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #565656;
  }
  .left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .left img {
    width: 25px;
    height: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .MenuListItem:hover {
    color: #33cccc;
    background: #fcfcfc;
  }

</style>
