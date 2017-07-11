/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="container">
      <!--<menu-member-search></menu-member-search>-->
      <el-input
        @change="onChange"
        class="search-bar"
        icon="close"
        :on-icon-click="clearInput"
        placeholder="输入用户名或邮箱，可查找成员或邀请新成员"
        @select="handleSelect"
        v-model="current"
      >
      </el-input>
      <div class="members-panel">
        <transition name="fade">
        <member-add-item :username="current" v-if="current !== ''"></member-add-item>
        </transition>
        <member-item v-for="user in results" :user="user" :key="user.name" class="list-complete-item"></member-item>
      </div>
    </div>
</template>

<script>
  import MemberAddItem from './MemberAddItem.vue'
  import MemberItem from './MemberItem.vue'
  import MenuMemberSearch from './MenuMemberSearch.vue'

  export default {
    components: {
      MemberAddItem,
      MemberItem,
      MenuMemberSearch
    },
    data () {
      return {
        current: '',
        users: [],
        results: []
      }
    },
    methods: {
      onChange (value) {
        console.log(value)
        this.querySearch(value)
      },
      querySearch (queryString) {
        let users = this.users
        let results = queryString ? users.filter(this.createFilter(queryString)) : users
        if (results.length !== 0) {
          this.results = results
        }
      },
      createFilter (queryString) {
        return (users) => {
          return (users.name.indexOf(queryString) === 0 || users.email.indexOf(queryString) === 0)
        }
      },
      loadAll () {
        return [
          {
            name: '西蒙',
            avatar: null,
            email: '381029382@qq.com',
            permission: 'member'
          }, {
            name: '西门子',
            avatar: null,
            email: '381029382@qq.com',
            permission: 'member'
          }, {
            name: '谢地',
            avatar: null,
            email: '381029382@qq.com',
            permission: 'member'
          }, {
            name: 'Andi Obama',
            avatar: null,
            email: '381029382@qq.com',
            permission: 'owner'
          }
        ]
      },
      handleSelect (item) {
        console.log(item)
      },
      clearInput () {
        this.current = ''
      }
    },
    mounted () {
      this.users = this.loadAll()
      this.results = this.users
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    flex: 1;
    padding: 10px 10px 10px 10px;
  }
  .search-bar {
    width: 100%;
  }
  .members-panel {
    padding-top: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }


</style>
