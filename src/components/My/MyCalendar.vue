<template>
  <div class="main">
    <div class="main-box">

      <div class="head-bar">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="未来的日程" name="first">
            <div class="classify-bar">
              <div class="time-classify">{{dateClass}}</div>
              <badge>{{calendarCount}}</badge>
            </div>
            <each-calendar
              startDate="7/10/2017"
              startTime="23:13"
              endDate="7/18/2017"
              endTime="12:01"
              calendarName="吃饭"
              projName="吃饭项目"
            ></each-calendar>

            <each-calendar
              startDate="7/10/2017"
              startTime="23:13"
              endDate="7/18/2017"
              endTime="12:01"
              calendarName="吃饭"
              projName="吃饭项目"
            ></each-calendar>
            <div class="classify-bar">
              <div class="time-classify">{{dateClass}}</div>
              <badge>{{calendarCount}}</badge>
            </div>
            <each-calendar
              startDate="7/10/2017"
              startTime="23:13"
              endDate="7/18/2017"
              endTime="12:01"
              calendarName="吃饭"
              projName="吃饭项目"
            ></each-calendar>
          </el-tab-pane>


          <el-tab-pane label="过去的日程" name="second">
            <div class="classify-bar">
              <div class="time-classify">{{dateClass}}</div>
              <badge>{{calendarCount}}</badge>
            </div>
            <each-calendar
              startDate="7/10/2017"
              startTime="23:13"
              endDate="7/18/2017"
              endTime="12:01"
              calendarName="吃饭"
              projName="吃饭项目"
            ></each-calendar>

          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
  </div>
</template>

<script>
  import EachCalendar from '@/components/My/EachCalendar.vue'
  import Badge from '@/components/Badge.vue'
  export default {
    components: {EachCalendar, Badge},
    data () {
      return {
        activeName: 'first',
        taskcount: 5,
        today: new Date().toLocaleDateString(),
        calendarCount: 2,
        dateClass: '2014年8月'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>
  .main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  .main-box{
    width: 800px;
  }
  .head-bar{
    margin: 20px 30px 0 30px;
    padding-bottom: 10px;
    color: #888;
  }
  .classify-bar{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    margin-top: 15px;
    padding-bottom: 10px;
    border-bottom: 1px #c0c0c0 solid;
  }
  .time-classify{
    font-size: 14px;
    color: #3e5568;
    margin: 0 20px;
  }
</style>
