/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="RepeatBox">
    <div id="repeat-title">重复</div>
    <repeat-select :mode="repeatIndex" :items="repeats">
      <div id="repeat-info">
        <img id="repeat-avatar" :src="repeatIcon">
        <span id="repeat-name" :class="repeatIndex !== 0?'':'grey'">{{ repeats[repeatIndex] }}</span>
      </div>
    </repeat-select>

  </div>
</template>

<script>
  import repeatIcon from '@/assets/icons/new_item/repeat.png'
  import RepeatSelect from './RepeatSelect.vue'
  import { mapGetters, mapState } from 'vuex'

  export default {
    components: {RepeatSelect},
    data () {
      return {
        repeatIcon
      }
    },
    props: ['data'],
    computed: {
      ...mapGetters([
        'repeats'
      ]),
      ...mapState({
        repeatIndex: state => state.task.task.repeat
      })
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
