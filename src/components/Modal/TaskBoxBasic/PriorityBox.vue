/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="PriorityBox">
    <div id="priority-title">优先级</div>
    <div id="priority-info">
      <img id="priority-avatar" :src="icons[mode]">
      <span id="priority-name" :class="'mode-'+mode">{{titles[mode]}}</span>
    </div>
  </div>
</template>

<script>
  import Vital from '@/assets/icons/new_item/priority-vital.png'
  import Emer from '@/assets/icons/new_item/priority-emergent.png'
  import Easy from '@/assets/icons/new_item/priority-easy.png'
  export default {
    name: 'PriorityBox',
    data () {
      return {
        Modes: {
          easy: 0,
          emer: 1,
          vital: 2
        },
        isSet: false,
        Vital,
        Emer,
        Easy,
        icons: [],
        titles: ['普通', '紧急', '非常紧急'],
        mode: 0

      }
    },
    created () {
      this.icons = [this.Easy, this.Emer, this.Vital]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .priorityBox{
  }
  #priority-title {
    font-size: 12px;

  }
  #priority-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }
  #priority-avatar {
    height: 22px;
    margin-right: 8px;
  }
  .mode-2 {
    color: #FF4949;
  }
  .mode-1 {
    color: #F7BA2A;
  }
  .mode-0 {
    color: #13CE66;
  }

</style>
