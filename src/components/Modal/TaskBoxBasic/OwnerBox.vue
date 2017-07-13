/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="owner-box">
    <div id="owner-title">执行者</div>
    <owner-select :users="members" :owner="exId">
      <div id="owner-info">
        <img id="owner-avatar" :src="members.find(u => exId === u.id).avatar">
        <span id="owner-name">{{ members.find(u => exId === u.id).name }}</span>
      </div>
    </owner-select>

  </div>
</template>

<script>
  import OwnerSelect from './OwnerSelect.vue'
  import blankAvatar from '@/assets/icons/nav_bar/blank-avatar.png'

  import {mapState, mapGetters} from 'vuex'

  export default {
    data () {
      return {
        blankAvatar,
        isSet: false
      }
    },
    computed: {
      ...mapGetters([
        'members'
      ]),
      ...mapState({
        exId: state => state.task.task.executorId
      })
    },
//    methods: {
//      changeOwner (command) {
//        command = parseInt(command)
//        this.data.executorId = command >= 0 ? command : null
//        this.isSet = this.data.executorId !== null
//      }
//    },
    components: {
      OwnerSelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #owner-title {
    font-size: 12px;

  }

  #owner-info {
    font-size: 14px;
    line-height: 40px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;

  }

  #owner-avatar {
    height: 22px;
    margin-right: 8px;
  }

  .grey {
    color: #C0C0C0;
  }
</style>
