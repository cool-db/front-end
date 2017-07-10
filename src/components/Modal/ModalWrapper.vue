<template>
    <el-dialog
            :visible="visible"
            :lock-scroll="true"
            :show-close="false"
            size="small">
        <span slot="title" style="width: 100%">
            <modal-header title="nihao" :onClose="closeModal"></modal-header>
        </span>
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            footer
        </span>
    </el-dialog>
</template>

<script>
  import ModalHeader from './ModalHeader.vue'
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
        this.visible = false
      }
    }
  }
</script>

<style scoped>

</style>
