<template>
    <div class="dateSchedule">

        <div class="head">
            <div class="bread-wrapper">
                <div class="data" style="color: #33CCCC; margin-left:0px; margin-top:5px">
                    {{date}}
                </div>
            </div>
            <schedule-item class="a" v-for="(item, index) in fake"
                           :key="index"
                           :timeSlot="item.timeSlot"
                           :alarmDisplay="item.alarmDisplay"
                           :alarm="item.alarm"
                           :scheduleContent="item.scheduleContent"
                           :address="item.address">
            </schedule-item>
        </div>


    </div>
</template>

<script>
  import ScheduleItem from './ScheduleItem.vue'
  export default {
    props: {
      date: String
    },
    data () {
      return {
        fake: [
          {
            timeSlot: '5月9日 10:00 到 12：00',
            alarmDisplay: true,
            alarm: '每周重复',
            scheduleContent: '这是一个日程',
            address: '同济大学嘉定校区'
          },
          {
            timeSlot: '5月9日(全天)',
            alarmDisplay: false,
            alarm: '每周重复',
            scheduleContent: '这是第二个日程',
            address: '同济大学四平校区'
          }]
      }
    },
    components: {
      ScheduleItem
    }
  }
</script>


<style scoped>
    .dateSchedule {
        margin-top: 20px;
        left: 60px;
        top: 30px;
        width: 1040px;
        background-color: #E7F1F0;
        border-radius: 4px;
        padding-bottom: 10px;
    }

    .a:last-child {
        border-bottom-color: transparent;
    }

    .bread-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    .picture {
        height: 23px;
        width: 27px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 10px;
    }

    .text1 {
        font-size: 16px;
        color: #888888;
    }

    .namespace {
        display: flex;
        flex-direction: row;
    }

    .route {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .bread-wrapper {
        display: flex;
        /*align-items: center;*/
        justify-content: center;
        border-left: #33CCCC solid;
        height: 30px;
        padding-left: 20px;
    }

    #check {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px 0px 0px 20px;
        height: 26px;
        /*padding: 0px 150px 0px 30px;*/
    }

    .line {
        width: 1040px;
        height: 3px;
        margin-top: 3px;
        /*left:144px;*/
        /*top:140px;*/
        background-color: #C0C0C0;
    }
</style>
