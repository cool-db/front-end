/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="ViewFilterHeader">
      <img :src="icon">
      <div class="title">{{title?title:'无标题'}}</div>
    </div>
</template>

<script>
  export default {
    props: ['icon', 'title']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ViewFilterHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #696969;
    height:30px;
    line-height: 30px;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

</style>
