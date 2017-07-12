/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="PriorityBox">
    <div id="priority-title">优先级</div>
    <priority-select :items="items" :owner="taskemergency" @changeP="changeP">
      <div id="priority-info">
        <img id="priority-avatar" :src="items[taskemergency].icon">
        <span id="priority-name" :class="'mode-'+taskemergency">{{items[taskemergency].title}}</span>
      </div>
    </priority-select>
  </div>
</template>

<script>
  import Vital from '@/assets/icons/new_item/priority-vital.png'
  import Emer from '@/assets/icons/new_item/priority-emergent.png'
  import Easy from '@/assets/icons/new_item/priority-easy.png'
  import PrioritySelect from './PrioritySelect.vue'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    components: {PrioritySelect},
    data () {
      return {
        Modes: {
          easy: 0,
          emer: 1,
          vital: 2
        },
        Vital,
        Emer,
        Easy,
        items: [
          {icon: Easy, title: '普通'},
          {icon: Emer, title: '紧急'},
          {icon: Vital, title: '非常紧急'}
        ],
        isSet: true
      }
    },
    computed: mapGetters([
      'taskemergency'
    ]),
    methods: {
      ...mapMutations({
        'ce': 'task/CHANGEEMER'
      }),
      changeP (command) {
        // this.mode = parseInt(command)
        this.ce(parseInt(command))
      }
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
