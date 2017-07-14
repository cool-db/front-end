<template>
  <div id="recentIssues">
    <div id="bar">
      <div id="headline">最近五天的事</div>
      <div id="countHint" style="text-align: center">{{count}}</div>
    </div>
    <div id="line"></div>
    <div id="items">
      <recent-issue-item v-for="(recent, key) in recents" :key="key" :item="recent"></recent-issue-item>
      <!--<recent-issue-item></recent-issue-item>-->
    </div>

  </div>
</template>

<script>
  import RecentIssueItem from 'COMPONENTS/RecentIssueItem'
  import {mapState, mapActions} from 'vuex'
  import {INITRECENTDATA} from 'MODULE/process'
  export default {
    data () {
      return {
        count: 2
      }
    },
    computed: {
      ...mapState({
        'recents': state => state.process.recent
      })
    },
    methods: {
      ...mapActions({
        'loadRecent': INITRECENTDATA
      })
    },
    created () {
      this.loadRecent()
    },
    components: {
      RecentIssueItem
    }
  }
</script>

<style scoped="">
  #recentIssues {
    margin: 5% auto auto 10%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    width: 800px;
    height: 640px;
  }

  #bar {
    display: flex;
    flex-direction: row;
    margin-left: 3%;
    margin-top: 3.6%;
    width: 200px;
    height: 25px;
  }

  #headline {
    display: flex;
    flex-direction: row;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #888888;
  }

  #countHint {
    text-align: center;
    display: flex;
    flex-direction: row;
    background: #FF4949;
    border-radius: 8px;
    line-height: 20px;
    font-family: HelveticaNeue-Medium;
    font-size: 12px;
    color: #FFFFFF;
    height: 20px;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }

  #line {
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    margin-top: 1%;
    margin-bottom: 1.5%;
    background-color: #C0C0C0;
    width: 740px;
    height: 3px;
  }

  #items {
    margin-left: 3%;
  }
</style>
