<template>
    <ModalWrapper>
        <div slot="title" class="catelog">
            <span>
                任务列表
            </span>
            <span>
                已完成
            </span>
        </div>
        <div slot="drop-down">
            <task-more></task-more>
        </div>
        <div slot="content">
            <TaskContent></TaskContent>
        </div>
    </ModalWrapper>
</template>

<script>
  import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
  import TaskMore from '@/components/Modal/TaskMore.vue'
  import TaskContent from '@/components/Modal/TaskContent.vue'

  export default {
    components: {
      ModalWrapper,
      TaskMore,
      TaskContent
    }
  }
</script>

<style lang="scss" scoped>
    .catelog {
        font-size: 18px;

        span:first-child {
            color: #C0C0C0
        }
    }
</style>
