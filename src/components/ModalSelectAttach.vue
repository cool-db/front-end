<template>
  <el-dialog
    title="关联内容"
    :visible.sync="visible"
    size="small"
    :before-close="closeModal">
    <div class="container">
      <el-select :key="0" class="select" v-model="type" placeholder="请选择关联类型">
        <el-option
          v-for="item in items"
          :key="item.value"
          :label="item.value"
          :value="item.value"
          :disabled="false">
        </el-option>
      </el-select>
      <modal-select-attach-single v-if="type==='任务'" :current="select" class="select" :type="'任务'" :options="{}"></modal-select-attach-single>

      <modal-select-attach-single v-else-if="type==='日程'" :current="select" class="select" :type="'日程'" :options="{}"></modal-select-attach-single>
        <modal-select-attach-item v-else-if="type==='文件'" :current.sync="file" class="select"></modal-select-attach-item>
    </div>



    <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="submit()">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
  import ModalSelectAttachItem from './Modal/ModalSelectAttach/ModalSelectAttachItem.vue'
  import ModalSelectAttachSingle from './Modal/ModalSelectAttach/ModalSelectAttachSingle.vue'
//  import ModalWrapper from '@/components/Modal/ModalWrapper.vue'
//  import TaskMore from '@/components/Modal/TaskMore.vue'
//  import TaskContent from '@/components/Modal/TaskContent.vue'
//  import ModalFooterInput from '@/components/Modal/ModalFooterInput.vue'
  export default {
    components: {
      ModalSelectAttachItem,
      ModalSelectAttachSingle
    },
        // ModalWrapper
//      TaskMore,
//      TaskContent,
//      ModalFooterInput
    data () {
      return {
        visible: true,
        items: [
          {value: '任务'},
          {value: '日程'},
          {value: '文件'}
        ],
        type: '',
        select: '',
        file: []
      }
    },
    watch: {
      type: function () {
        this.select = ''
      }
    },
    methods: {
      closeModal () {
        this.visible = false
      },
      submit () {
        this.visible = false
      }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
  .select {
    flex: 1;
    margin: 10px;
  }
</style>
