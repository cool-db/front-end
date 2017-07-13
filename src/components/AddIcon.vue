<template>
    <div>
        <img class="addIcon" :src="addNewIcon" @click="dialogVisible = true"/>
        <AddTaskModal :dialogVisible.sync="dialogVisible"></AddTaskModal>
    </div>
</template>

<script>
  import addNewIcon from '@/assets/icons/index/add-new-item.png'
  import AddTaskModal from 'COMPONENTS/AddTaskModal.vue'

  export default {
    data () {
      return {
        addNewIcon,
        dialogVisible: false
      }
    },
    components: {
      AddTaskModal
    }
  }
</script>

<style scoped="">
    .addIcon {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
</style>
