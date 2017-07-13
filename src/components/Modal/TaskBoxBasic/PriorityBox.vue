/**
* Created by dustar on 2017/7/10.
*/

<template>
    <div class="PriorityBox">
        <div id="priority-title">优先级</div>
        <priority-select :items="emers" :owner="emerIndex">
            <div id="priority-info">
                <img id="priority-avatar" :src="emers[emerIndex].icon">
                <span id="priority-name" :class="'mode-' + emerIndex">{{emers[emerIndex].title}}</span>
            </div>
        </priority-select>
    </div>
</template>

<script>
  import PrioritySelect from './PrioritySelect.vue'
  import { mapGetters, mapState } from 'vuex'

  export default {
    components: {PrioritySelect},
    data () {
      return {
        isSet: true
      }
    },
    computed: {
      ...mapGetters([
        'emers'
      ]),
      ...mapState({
        emerIndex: state => state.task.task.emergency
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
