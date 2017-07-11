<template>

  <div class="tesk-content">
    <text-edit></text-edit>
    <task-box-basic></task-box-basic>
    <sub-tasks-box></sub-tasks-box>
  </div>

</template>

<script>
  import TextEdit from '../TextEdit.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'
  import SubTasksBox from './MultiBoxs/SubTasksBox.vue'
  export default {
    data () {
      return {
        taskTitle: ''
      }
    },
    components: {
      SubTasksBox,
      TextEdit,
      TaskBoxBasic
    }
  }
</script>

<style lang="scss" scoped>

</style>
