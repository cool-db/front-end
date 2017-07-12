/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="RepeatBox">
    <div id="repeat-title">重复</div>
    <repeat-select :mode="taskrepeat" :items="repeats" @changeR="changeR">
      <div id="repeat-info">
        <img id="repeat-avatar" :src="repeatIcon">
        <span id="repeat-name" :class="taskrepeat !== 0?'':'grey'">{{ repeats[taskrepeat] }}</span>
      </div>
    </repeat-select>

  </div>
</template>

<script>
  import repeatIcon from '@/assets/icons/new_item/repeat.png'
  import RepeatSelect from './RepeatSelect.vue'

  import {mapGetters, mapMutations} from 'vuex'

  export default {
    components: {RepeatSelect},
    name: 'RepeatBox',
    data () {
      return {
        repeatIcon,
        repeats: ['不重复', '每天重复', '每周重复', '每月重复', '每年重复']
      }
    },

    computed: mapGetters([
      'taskrepeat'
    ]),

    methods: {
      ...mapMutations({
        'cr': 'task/CHANGEREPEAT'
      }),
      changeR (command) {
//        this.taskrepeat = parseInt(command)
//        this.$alert(parseInt(command))
        this.cr(parseInt(command))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .repeatBox {
  }

  #repeat-title {
    font-size: 12px;
    repeat: '';
    isSet: false;

  }

  #repeat-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }

  #repeat-avatar {
    height: 16px;
    margin-right: 8px;
  }

  .grey {
    color: #C0C0C0;
  }
</style>
