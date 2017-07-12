<template>
    <div>
        <modal-attach-head
                type="日程" :icon="calendar">
        </modal-attach-head>
        <div>
            <multi-list :list="calendarList">
                <template slot="item" scope="scope">
                    <modal-attach-body
                            :executor="scope.props.executor"
                            :avatar="scope.props.avatar">
                        <div class="calendar-slot" @mouseenter="currentMouseOn = scope.index" @mouseleave="currentMouseOn = null">
                          <div>
                            <div class="title">{{scope.props.title}}</div>
                            <div>{{scope.props.startAt}} - {{scope.props.endAt}}</div>
                          </div>
                          <modal-attach-delete :index="scope.index" :mouse="currentMouseOn"></modal-attach-delete>
                        </div>
                    </modal-attach-body>
                </template>
            </multi-list>
        </div>
    </div>
</template>

<script>
  import ModalAttachHead from './ModalAttachHead.vue'
  import ModalAttachBody from './ModalAttachBody.vue'
  import MultiList from './MultiList.vue'
  import ModalAttachDelete from './ModalAttachDelete.vue'

  import calendar from '@/assets/icons/new_item/calendar_and_date.png'

  export default {
    data () {
      return {
        currentMouseOn: null,
        calendar,
        calendarList: [{
          executor: 'Simon',
          avatar: calendar,
          title: '谷歌开发者大会',
          startAt: '12月31日 19:00',
          endAt: '1月1日 2:45'
        }, {
          executor: ' dustark',
          avatar: calendar,
          title: '数据库课程设计',
          startAt: '7月6日 19:50',
          endAt: '8月1日 18:35'
        }]
      }
    },
    components: {
      ModalAttachHead,
      ModalAttachBody,
      ModalAttachDelete,
      MultiList
    }
  }
</script>

<style lang="scss" scoped>
    .calendar-slot {
        /*display: flex;*/
        /*flex-direction: row;*/
        /*justify-content: flex-start;*/
        /*align-items: center;*/
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #888888;
    }
  .title {
    font-size: 16px;
    color: #565656;
    line-height: 24px;
  }
</style>
