<template>
    <div class="task-home">
        <process-board v-if="process.length > 0"
                       v-for="item, index in process"
                       :key="item.id"
                       :pIndex="index"
                       :pid="item.id"
                       :name="item.name">
        </process-board>
        <new-process></new-process>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ProcessBoard from 'COMPONENTS/Task/ProcessBoard.vue'
  import NewProcess from 'COMPONENTS/Task/NewProcess.vue'

  import { INITDATA } from 'MODULE/process'

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
      const pId = this.$route.params.pid
      this.initData({
        pId
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
        padding-left: 15px;
        box-sizing: border-box;
    }
</style>
