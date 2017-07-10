/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="RepeatBox">
    <div id="repeat-title">重复</div>
    <div id="repeat-info">
      <img id="repeat-avatar" :src="repeatIcon">
      <span id="repeat-name" :class="isSet?'':'grey'">{{ isSet?repeat:'点击设置' }}</span>
    </div>
  </div>
</template>

<script>
  import repeatIcon from '@/assets/icons/new_item/repeat.png'
  export default {
    name: 'RepeatBox',
    data () {
      return {
        repeatIcon
      }
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .repeatBox{
  }
  #repeat-title {
    font-size: 12px;
    repeat: '';
    isSet: false

  }
  #repeat-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #repeat-avatar {
    height: 22px;
    margin-right: 8px;
  }
  .grey {
    color: #C0C0C0;
  }
</style>
