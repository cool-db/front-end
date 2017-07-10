<template>
    <text-edit :title.sync="taskTitle"></text-edit>
</template>

<script>
  import TextEdit from '../TextEdit.vue'
  export default {
    data () {
      return {
        taskTitle: ''
      }
    },
    components: {
      TextEdit
    }
  }
</script>

<style lang="scss" scoped>

</style>
