<template>
    <div>
        <text-edit :title.sync="taskTitle"></text-edit>
        <div class="divider"></div>
        <rich-editor :text.sync="richText"></rich-editor>
        <task-box-basic class="box"></task-box-basic>
        <modal-task-list class="box"></modal-task-list>
        <modal-file-list class="box"></modal-file-list>
        <modal-calendar-list class="box"></modal-calendar-list>
        <modal-new-attach-box class="box"></modal-new-attach-box>
    </div>
</template>

<script>
  import TextEdit from './TextEdit.vue'
  import RichEditor from './RichEditor.vue'
  import ModalTaskList from './ModalTaskList.vue'
  import ModalFileList from './ModalFileList.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'
  import ModalCalendarList from './ModalCalendarList.vue'
  import ModalNewAttachBox from './ModalNewAttachBox.vue'

  export default {
    data () {
      return {
        taskTitle: '这是一个标题',
        richText: '<h3>aaa<h1>',
        taskList: [{
          data: 'a'
        }, {
          data: 'b'
        }]
      }
    },
    components: {
      ModalNewAttachBox,
      TextEdit,
      RichEditor,
      TaskBoxBasic,
      ModalFileList,
      ModalTaskList,
      ModalCalendarList
    }
  }
</script>

<style lang="scss" scoped>
    .divider {
        width: 100%;
        border-bottom: 1px solid #dedede;
        margin: 13px 0;
    }
    .box {
      margin-top: 13.5px;
    }
</style>
