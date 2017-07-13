<template>
    <el-dialog
            :visible="visible"
            :lock-scroll="true"
            :show-close="false"
            size="small">
        <span slot="title">
            <modal-header :onClose="closeModal">
                <span slot="title">
                    <slot name="title"></slot>
                </span>
                <div slot="drop-down">
                    <slot name="drop-down"></slot>
                </div>
            </modal-header>
        </span>
        <slot name="content">默认信息</slot>
        <span slot="footer" class="dialog-footer">
            <slot name="footer"></slot>
        </span>
    </el-dialog>
</template>

<script>
  import ModalHeader from './ModalHeader.vue'
  import { mapActions, mapState, mapMutations } from 'vuex'
  import { SAVETASK, HIDETASKMODAL } from 'MODULE/task'
  import { INITDATA } from 'MODULE/process'

  export default {
    components: {
      ModalHeader
    },
    methods: {
      closeModal () {
        const pId = this.$route.params.pid
        this.saveTask().then(() => {
          console.log(1)
          this.initData({pId}).then(() => {
            this.hideDialog()
            console.log(2)
          })
        }).catch(err => this.$message.error(err.message))
      },
      ...mapActions({
        'saveTask': SAVETASK,
        'initData': INITDATA
      }),
      ...mapMutations({
        hideDialog: HIDETASKMODAL
      })
    },
    computed: {
      ...mapState({
        visible: state => state.task.show
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
