/**
* Created by dustar on 2017/7/12.
*/

<template>
  <user-card :user="user">
    <element class="item">
      <div class="avatar"><img :src="user.avatar"></div>
      <div class="right">
        <div class="name-bar">
          <div class="name">{{user.name}}</div>
          <img v-if="user.permission === 'owner'" :src="owner" class="owner">
        </div>
        <div class="email">{{user.email}}</div>
      </div>
    </element>
  </user-card>
</template>

<script>
  import owner from '@/assets/icons/my_profile/red-master.png'
  import UserCard from './UserCard.vue'
  export default {
    props: ['user'],
    components: { UserCard },
    data () {
      return {
        owner
      }
    },
    methods: {
      showCard () {
      }
    }

  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    cursor: pointer;
    padding: 10px;
    padding-left: 15px;
    flex-direction: row;
    display: flex;
    color: #565656;
  }
  .item:hover {
    background: white;
    font-weight: bold;
  }
  .avatar img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 0.5px solid #585858;
  }
  .right {
    padding-left:10px;
  }
  .name-bar {
    padding-top: 2px;
    padding-bottom: 3px;
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .name {
    font-size: 16px;
    line-height: 16px;
  }
  .email {
    color: #888888;
    font-size: 14px;
    line-height: 14px;
  }
  .owner {
    height: 16px;
    padding-left: 5px;
  }

</style>
