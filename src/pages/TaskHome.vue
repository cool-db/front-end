<template>
    <div class="task-home">
        <process-board v-for="item, index in process" :key="item.id"
                       :processName="item.name"
                       :taskList="item.tasks"
                       :processID="item.id"></process-board>
        <new-process></new-process>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ProcessBoard from 'COMPONENTS/Task/ProcessBoard.vue'
  import NewProcess from 'COMPONENTS/Task/NewProcess.vue'

  import {INITDATA} from 'MODULE/process'

  export default {
    data () {
      return {}
    },
    components: {
      ProcessBoard,
      NewProcess
    },
    computed: {
      ...mapState({
        process: state => state.process.data
      })
    },
    methods: {
      ...mapActions({
        initData: INITDATA
      })
    },
    created () {
      this.initData({
        uId: 21,
        pId: 12
      }).catch(err => this.$message.error(err.message))
    }
  }
</script>

<style lang="scss" scoped>
    .task-home {
        display: -webkit-box;
        flex-direction: row;
        height: 100%;
        width: 100%;
        overflow-x: scroll;
    }
</style>
