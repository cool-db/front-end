<template>
  <div class="schedule">
    <div class="bar">
      <div class="addSchedule">
        <img class="picture" :src="addParticipator">
        <div class="text">添加日程</div>
      </div>
    </div>

    <date-schedule v-for="(item, index) in fake"
               :key="index"
               :date="item.date">
    </date-schedule>

    <div class="pages">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>

      <div class="line">
      </div>
    </div>


  </div>


</template>

<script>
  import addParticipator from '@/assets/icons/new_item/add-participator.png'
  import DateSchedule from './DateSchedule.vue'

  export default{
    data () {
      return {
        addParticipator,
        fake: [
          {
            date: '5月9日'
          },
          {
            date: '5月10日'
          }]
      }
    },
    components: {
      DateSchedule
    }
  }
</script>

<style>
  .schedule {
    margin-top:14px;
    display:flex;
    /*height:500px;*/
    flex-direction:column;
    align-items: center;
    justify-content: space-between;

  }
  .bar {
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width:1040px;
    height:40px;
    background-color:#E7F1F0;
    border-radius: 4px;
  }
  .addSchedule{
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
  }
  .picture{
    width:19px;
    height:19px;
  }
  .text{
    margin-left:10px;
    color:#33CCCC;
  }
  .pages{
    display:flex;
    flex-direction:column;
    margin-top:6px;
  }
  .line{
    height:11px;
    width:187px;
    background-color:#33CCCC;
  }
</style>
