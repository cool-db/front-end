<template>
  <div>
    <text-edit :content.sync="data.name"></text-edit>
    <div class="divider"></div>
    <rich-editor :text.sync="data.content">task</rich-editor>
    <task-box-basic class="box" :data="data"></task-box-basic>
    <!--<modal-task-list class="box"></modal-task-list>-->
    <modal-file-list class="box" :data="data"></modal-file-list>
    <!--<modal-calendar-list class="box"></modal-calendar-list>-->
    <modal-new-attach-box class="box" :data="data"></modal-new-attach-box>
    <modal-participators class="box" :data="data"></modal-participators>
  </div>
</template>

<script>
  import TextEdit from '../TextEdit.vue'
  import RichEditor from './RichEditor.vue'
  //  import ModalTaskList from './ModalTaskList.vue'
  import ModalFileList from './ModalFileList.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'
  //  import ModalCalendarList from './ModalCalendarList.vue'
  import ModalNewAttachBox from './ModalNewAttachBox.vue'
  import ModalParticipators from './ModalParticipators.vue'

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
    props: ['data'],

    methods: {},

    components: {
      ModalParticipators,
      ModalNewAttachBox,
      TextEdit,
      RichEditor,
      TaskBoxBasic,
      ModalFileList
      // ModalTaskList,
      // ModalCalendarList
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
