/**
* Created by dustar on 2017/7/11.
*/

<template>
  <div class="container">
    <div class="header">
      <img class="icon" :src="pIcon">
      <span>参与者</span>
    </div>

    <div class="avatar-wall">
      <div class="avatar-container" v-for="user in pts">
        <user-card :user="user"><img class="avatar" :src="user.avatar"></user-card>
      </div>
      <select-member :users="mems" @onChange="" :owner="0" class="add"></select-member>
    </div>

  </div>
</template>

<script>
  import pIcon from '@/assets/icons/new_item/participator.png'
  import SelectMember from '../SelectMember.vue'
  import UserCard from 'COMPONENTS/Menu/UserCard.vue'
  import {mapState} from 'vuex'
  export default {
    components: {SelectMember, UserCard},
    data () {
      return {
        pIcon,
        hovered: false,
        mems: null
      }
    },
    computed: {
      ...mapState({
        'pts': state => state.task.task.members,
        'members': state => state.user.users
      })
    },
    created () {
      this.changeMems()
//      this.pts.forEach(i => console.log(i.id))
//      console.log('---')
//      this.members.forEach(i => console.log(i.id))
    },
    methods: {
      changeMems () {
        this.mems = this.members.filter((u) => {
          return this.pts.findIndex(v => u.id === v.id) === -1
        })
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    background: white;
    border-radius: 4px;
    border: 0.5px #e8e8e8 solid;
    padding-left: 20px;
    font-size: 14px;
    color: #C0C0C0;

  }

  .header {
    height: 13px;
    display: flex;
    flex-direction: row;
    font-size: 13px;
    line-height: 13px;
    margin-top: 15px;
    margin-left: 5px;
    color: #565656;
  }

  .icon {
    side: 13px;
    width: 13px;
    height: 13px;
    margin-left: 0px;
    margin-right: 10px;
  }

  .avatar-wall {
    display: flex;
    flex-direction: row;
    margin: 8px 20px 8px 25px;
    flex-wrap: wrap;
  }

  .avatar-container {
    margin: 5.5px;
  }

  .avatar {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }

  .container:hover {
    color: #33CCCC;
  }

  .add {
    margin-left: 6px;
    margin-top: 6px;
  }
</style>
