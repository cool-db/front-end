<template>
    <div>
        <text-edit :content.sync="name" :onChange="onNameChange"></text-edit>
        <div class="divider"></div>
        <rich-editor :text.sync="content" :onChange="onRichTextChange">task</rich-editor>
        <task-box-basic class="box" :data="data"></task-box-basic>
        <modal-file-list class="box" :data="data"></modal-file-list>
        <modal-new-attach-box class="box" :data="data"></modal-new-attach-box>
        <modal-participators class="box" :data="data"></modal-participators>
    </div>
</template>

<script>
  import TextEdit from '../TextEdit.vue'
  import RichEditor from './RichEditor.vue'
  import ModalFileList from './ModalFileList.vue'
  import TaskBoxBasic from './TaskBoxBasic.vue'
  import ModalNewAttachBox from './ModalNewAttachBox.vue'
  import ModalParticipators from './ModalParticipators.vue'

  import { mapState, mapMutations } from 'vuex'
  import { CHANGENAME, CHANGECONTENT } from 'MODULE/task'

  export default {
    props: ['data'],
    methods: {
      ...mapMutations({
        changeName: CHANGENAME,
        changeContent: CHANGECONTENT
      }),
      onNameChange (value) {
        this.changeName(value)
      },
      onRichTextChange (value) {
        this.changeContent(value)
      }
    },
    components: {
      ModalParticipators,
      ModalNewAttachBox,
      TextEdit,
      RichEditor,
      TaskBoxBasic,
      ModalFileList
    },
    computed: {
      ...mapState({
        name: state => state.task.task.name,
        content: state => state.task.task.content
      })
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
