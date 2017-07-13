/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="member-menu-container">
        <el-input
                @change="onChange"
                class="search-bar"
                icon="close"
                :on-icon-click="clearInput"
                placeholder="输入用户名或邮箱，可查找或邀请新成员"
                @select="handleSelect"
                v-model="current"
        >
        </el-input>
        <div class="members-panel">
            <transition name="fade">
                <member-add-item :username="current" v-if="current !== ''"></member-add-item>
            </transition>
            <member-item v-for="user in members" :user="user" :key="user.id" class="list-complete-item"></member-item>
        </div>
    </div>
</template>

<script>
  import MemberAddItem from './MemberAddItem.vue'
  import MemberItem from './MemberItem.vue'
  import MenuMemberSearch from './MenuMemberSearch.vue'
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    components: {
      MemberAddItem,
      MemberItem,
      MenuMemberSearch
    },
    data () {
      return {
        current: ''
      }
    },
    computed: {
      ...mapGetters([
        'members'
      ])
    },
    methods: {
      ...mapMutations({
        'invite': 'hello/INVITE'
      }),
      onChange (value) {
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
      handleSelect (item) {
        console.log(item)
      },
      clearInput () {
        this.current = ''
      }
    },
    mounted () {
      this.results = this.users
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .member-menu-container {
        flex: 1;
      padding: 10px 10px 10px 10px;
      color: #F8F8F8;
    }

    .search-bar {
        width: 100%;
    }

    .members-panel {
        padding-top: 10px;
        font-size: 16px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        transform: translateX(100px);
        opacity: 0;
    }


</style>
