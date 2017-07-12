<template>
    <div class="task-home">
        <process-board v-for="item, index in process" :key="index"
                       :processName="item.title"
                       :taskList="item.tasks"
                       :processID="index"></process-board>
        <new-process></new-process>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ProcessBoard from 'COMPONENTS/Task/ProcessBoard.vue'
  import NewProcess from 'COMPONENTS/Task/NewProcess.vue'

  export default {
    data () {
      return {}
    },
    components: {
      ProcessBoard,
      NewProcess
    },
    computed: {
      ...mapState({
        process: state => state.process.data
      })
    }
  }
</script>

<style lang="scss" scoped>
    .task-home {
        display: -webkit-box;
        flex-direction: row;
        height: 100%;
        width: 100%;
        overflow-x: scroll;
    }
</style>
