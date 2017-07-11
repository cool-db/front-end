<template>
    <div>
        <modal-attach-head
                type="任务" :icon="task">
        </modal-attach-head>
        <div>
            <multi-list :list="taskList">
                <template slot="item" scope="scope">
                    <modal-attach-body
                            :executor="scope.props.executor"
                            :avatar="scope.props.avatar">
                        <div class="task-slot" @mouseenter="show[scope.index]=true" @mouseleave="show[scope.index]=false">
                            <el-checkbox v-model="scope.props.checked">{{scope.index}}+{{scope.props.title}}</el-checkbox>
                            <div>{{scope.props.state}}
                              <modal-attach-delete :show="show[scope.index]"></modal-attach-delete>
                            </div>
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

  import task from '@/assets/icons/nav_bar/project.png'
  import ModalAttachDelete from './ModalAttachDelete.vue'

  export default {
    data () {
      return {
        task,
        show: [false, false],
        taskList: [{
          executor: 'Simon',
          avatar: task,
          checked: false,
          title: 'first',
          state: '未处理'
        }, {
          executor: ' dustark',
          avatar: task,
          checked: true,
          title: 'second',
          state: '已处理'
        }]
      }
    },
    components: {
      ModalAttachDelete,
      ModalAttachHead,
      ModalAttachBody,
      MultiList
    }
  }
</script>

<style lang="scss" scoped>
    .task-slot {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>
