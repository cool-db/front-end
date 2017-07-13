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
  import {mapActions} from 'vuex'
  import {SAVETASK} from 'MODULE/task'
  import {INITDATA} from 'MODULE/process'
  export default {
    data () {
      return {
        visible: true
      }
    },
    components: {
      ModalHeader
    },
    methods: {
      closeModal () {
        this.saveTask().then(() => {
          this.initData().then(() => {
            this.visible = false
          })
        }).catch(err => this.$message.error(err))
      },
      ...mapActions({
        'saveTask': SAVETASK,
        'initData': INITDATA
      })
    }
  }
</script>

<style lang="scss" scoped>
</style>
