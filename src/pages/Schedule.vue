<template>
  <div class="schedule">
    <div class="bar">
      <div class="addSchedule">
        <img class="picture" :src="addParticipator">
        <div class="text">添加日程</div>
      </div>
    </div>

    <date-schedule v-for="item in schs"
                   :key="item.scheduleId"
                   :date="item.startTime + '-' + item.endTime">
    </date-schedule>
  </div>
</template>

<script>
  import addParticipator from '@/assets/icons/new_item/add-participator.png'
  import DateSchedule from 'COMPONENTS/DateSchedule.vue'

  import {mapState, mapActions} from 'vuex'
  import {INITSCHS} from 'MODULE/sch'

  export default{
    data () {
      return {
        addParticipator
      }
    },
    components: {
      DateSchedule
    },
    computed: {
      ...mapState({
        'schs': state => state.sch.items
      })
    },
    methods: {
      ...mapActions({
        'initSch': INITSCHS
      })
    },
    mounted () {
      const pId = this.$route.params.pid
      this.initSch(pId).catch(err => this.$message.error(err.message))
    }
  }
</script>

<style scoped="">
  .schedule {
    height: calc(100vh - 98px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 1040px;
    height: 40px;
    background-color: #E7F1F0;
    border-radius: 4px;
    margin-left: 0;
    margin-top: 20px;
    margin-top: 0;
  }

  .addSchedule {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .picture {
    width: 19px;
    height: 19px;
  }

  .text {
    margin-left: 10px;
    color: #33CCCC;
  }

  .pages {
    display: flex;
    flex-direction: column;
    margin-top: 6px;
  }

  .line {
    height: 11px;
    width: 187px;
    background-color: #33CCCC;
  }
</style>
