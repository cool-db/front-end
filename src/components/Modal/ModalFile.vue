<template>
    <div>
        <modal-attach-head
                type="任务" :icon="task">
        </modal-attach-head>
        <modal-attach-body
                :executor="executor"
                :avatar="avatar">
            <div class="task-slot">
                <el-checkbox v-model="checked">这是一个关联任务</el-checkbox>
                <div>待处理</div>
            </div>
        </modal-attach-body>
    </div>
</template>

<script>
  import ModalAttachHead from './ModalAttachHead.vue'
  import ModalAttachBody from './ModalAttachBody.vue'
  import task from '@/assets/icons/nav_bar/project.png'

  export default {
    data () {
      return {
        task,
        executor: 'Simon',
        avatar: task,
        checked: false
      }
    },
    components: {
      ModalAttachHead,
      ModalAttachBody
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
