/**
* Created by dustar on 2017/7/10.
*/

<template>
  <div class="owner-box">
    <div id="owner-title">执行者</div>
    <owner-select :users="members" :owner="data.executorId" @changeOwner="changeOwner">
      <div id="owner-info">
        <img id="owner-avatar" :src="isSet?members[data.executorId].avatar:blankAvatar">
        <span id="owner-name" :class="isSet?'':'grey'">{{isSet ? members[data.executorId].name : '未认领'}}</span>
      </div>
    </owner-select>

  </div>
</template>

<script>
  import ownerSelect from './ownerSelect.vue'
  import blankAvatar from '@/assets/icons/nav_bar/blank-avatar.png'

  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        blankAvatar,
        isSet: false
      }
    },
    props: ['data'],
    computed: mapGetters([
      'members'
    ]),
    methods: {
      changeOwner (command) {
        command = parseInt(command)
        this.data.executorId = command >= 0 ? command : null
        this.isSet = this.data.executorId !== null
      }
    },
    components: {
      ownerSelect
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .OwnerBox {
  }

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
