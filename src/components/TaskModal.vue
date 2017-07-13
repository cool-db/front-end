<template>
  <modal-wrapper>
    <div slot="title" class="catelog">
            <span>
                任务列表
            </span>
      <span>
                {{progressName}}
            </span>
    </div>
    <div slot="drop-down">
      <task-more></task-more>
    </div>
    <div slot="content">
      <task-content :data="task"></task-content>
    </div>
    <div slot="footer">
      <modal-footer-input></modal-footer-input>
    </div>
  </modal-wrapper>
</template>

<script>
  import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
  import TaskMore from '@/components/Modal/TaskMore.vue'
  import TaskContent from '@/components/Modal/TaskContent.vue'
  import ModalFooterInput from '@/components/Modal/ModalFooterInput.vue'

  import {mapState, mapGetters, mapActions} from 'vuex'
  import {INITTASK} from 'MODULE/task'

  export default {
    components: {
      ModalWrapper,
      TaskMore,
      TaskContent,
      ModalFooterInput
    },
    computed: {
      ...mapGetters(['task']),
      ...mapState({
        'progressName': state => state.task.task.progressName
      })
    },
    mounted () {
      this.initTask(44).catch(err => this.$message.error(err))
    },
    methods: {
      ...mapActions({
        'initTask': INITTASK
      })
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
