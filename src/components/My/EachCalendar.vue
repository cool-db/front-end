<template>
  <div class="each-calendar-main">

    <div class="time-span" :data="calendarDatas">
      {{startDate}} {{startTime}} - {{endDate}} {{endTime}}
    </div>

    <span class="font-style-1">{{calendarName}}</span>
    <span class="font-style-2">{{projName}}</span>


  </div>
</template>

<script>
  export default {
    props: [
      'startDate',
      'startTime',
      'endDate',
      'endTime',
      'calendarName',
      'projName'
    ]
  }
</script>

<style scoped>
  .each-calendar-main{
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .each-calendar-main:hover{
    background-color: #e7fef0;
  }
  .time-span{
    font-size: 14px;
    color: #888;
    width: 260px;
    margin: 10px 20px;
  }
  .font-style-2{
    font-size: 14px;
    margin: 0 6px;
    color: #888;
  }
  .font-style-1{
    font-size: 16px;
    margin: 0 8px;
    color: #565656;
  }
</style>
