<template>
  <div class="tesk-content">
    <text-edit></text-edit>
    <task-box-basic></task-box-basic>
  </div>
</template>

<script>
  import TextEdit from '../TextEdit.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'
  export default {
    components: {
      TextEdit,
      TaskBoxBasic
    }
  }
</script>

<style lang="scss" scoped>

</style>
