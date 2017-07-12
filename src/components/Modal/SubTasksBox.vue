/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="SubTasksBox">
      <div>
        <multi-list :list="subTasksList">
          <template slot="item" scope="scope">
            <modal-attach-body
              :executor="scope.props.executor"
              :avatar="scope.props.avatar">
              <div class="file-slot">
                <div class="title">{{scope.props.title}}</div>
                <div>{{scope.props.startAt}} - {{scope.props.endAt}}</div>
              </div>
            </modal-attach-body>
          </template>
        </multi-list>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SubTasksBox',
    data () {
      return {
        subTasksList: [{
          executor: 'Simon',
          avatar: null,
          title: '数据库项目',
          checked: false,
          deadline: null
        }, {
          executor: ' dustark',
          avatar: null,
          checked: true,
          title: '上线测试',
          deadline: '7月3日 17:00'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
