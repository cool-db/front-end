<template>
    <div class="task-home">
        <process-board></process-board>
        <process-board></process-board>
        <process-board></process-board>
        <process-board></process-board>
        <process-board></process-board>
        <new-process></new-process>
    </div>
</template>

<script>
  import ProcessBoard from './ProcessBoard.vue'
  import NewProcess from './NewProcess.vue'

  export default {
    components: {
      ProcessBoard,
      NewProcess
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
