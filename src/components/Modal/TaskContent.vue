<template>
    <div>
        <text-edit :title.sync="taskTitle"></text-edit>
        <div class="divider"></div>
        <rich-editor :text.sync="richText"></rich-editor>
    </div>
</template>

<script>
  import TextEdit from '../TextEdit.vue'
  import RichEditor from '../RichEditor.vue'

  export default {
    data () {
      return {
        taskTitle: '',
        richText: '<h1>aaa<h1>'
      }
    },
    components: {
      TextEdit,
      RichEditor
    }
  }
</script>

<style lang="scss" scoped>
    .divider {
        width: 100%;
        border-bottom: 1px solid #dedede;
        margin: 10px 0;
    }
</style>
