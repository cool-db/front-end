<template>
    <div>
        <text-edit :title.sync="taskTitle"></text-edit>
        <div class="divider"></div>
        <rich-editor :text.sync="richText"></rich-editor>
        <modal-file></modal-file>
    </div>
</template>

<script>
  import TextEdit from './TextEdit.vue'
  import RichEditor from './RichEditor.vue'
  import ModalFile from './ModalFile.vue'

  export default {
    data () {
      return {
        taskTitle: '这是一个标题',
        richText: '<h3>aaa<h1>'
      }
    },
    components: {
      TextEdit,
      RichEditor,
      ModalFile
    }
  }
</script>

<style lang="scss" scoped>
    .divider {
        width: 100%;
        border-bottom: 1px solid #dedede;
        margin: 13px 0;
    }
</style>
