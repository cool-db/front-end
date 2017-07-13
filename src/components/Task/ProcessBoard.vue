<template>
    <div class="process-board">
        <header class="process-head">
            <div class="left">
                <text-edit :content.sync="name" :onChange="onChange" class="state"></text-edit>
                <badge>{{taskNumber}}</badge>
            </div>
            <span class="el-dropdown-link" @click="deleteProcess">
                <i class="el-icon-close"></i>
            </span>
        </header>
        <draggable v-model="list" class="drag-wrapper" :options="dragOptions">
            <task-card v-for="task, index in list"
                       :key="task.id"
                       :pIndex="pIndex"
                       :tIndex="index"></task-card>
        </draggable>
        <new-task :id="pid"></new-task>
    </div>
</template>

<script>
  import Draggable from 'vuedraggable'
  import { mapMutations, mapActions } from 'vuex'

  import addIcon from '@/assets/icons/nav_bar/add.png'

  import TaskCard from './TaskCard.vue'
  import Badge from '../Badge.vue'
  import NewTask from './NewTask.vue'
  import TextEdit from '../TextEdit.vue'

  import { CHANGEPROCESSNAME, CHANGETASKORDER, DELETEPROCESS, INITDATA } from 'MODULE/process'

  export default {
    props: {
      pIndex: Number,
      pid: Number,
      name: String
    },
    data () {
      return {
        addIcon
      }
    },
    components: {
      TaskCard,
      Badge,
      Draggable,
      NewTask,
      TextEdit
    },
    computed: {
      dragOptions () {
        return {
          group: 'task',
          ghostClass: 'ghost'
        }
      },
      list: {
        get () {
          return this.$store.state.process.data[this.pIndex].tasks
        },
        set (value) {
          this.$store.commit(CHANGETASKORDER, {
            index: this.pIndex,
            value
          })
        }
      },
      taskNumber () {
        return this.list.filter(item => !item.state).length
      }
    },
    methods: {
      ...mapMutations({
        changeProcessName: CHANGEPROCESSNAME
      }),
      ...mapActions({
        delProcess: DELETEPROCESS,
        initData: INITDATA
      }),
      onChange (value) {
        this.changeProcessName({
          index: this.pIndex,
          name: value
        })
      },
      deleteProcess () {
        const projectId = this.$route.params.pid
        this.$confirm('确认删除流程？')
          .then(_ => {
            this.delProcess({
              pid: this.pid,
              uid: Number(localStorage.token)
            }).then(() => this.initData({
              pId: projectId
            })).catch(err => this.$message.error(err.message))
          }).catch(_ => {})
      }
    }
  }
</script>

<style lang="scss" scoped>
    .ghost {
        opacity: 0.3;
    }

    .process-board {
        width: 290px;
        height: calc(100vh - 117px);
        background-color: #E7F1F0;
        margin-right: 20px;
        box-sizing: border-box;
        border-bottom: 5px solid #33CCCC;
        border-radius: 4px;
        overflow-y: scroll;

        .process-head {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 13px 15px 13px 25px;
            font-size: 16px;
            color: #888888;

            .left {
                display: flex;
                flex-direction: row;
                align-items: center;

                .state {
                    font-size: 16px;
                    background-color: #E7F1F0;
                    line-height: 16px;
                    overflow-y: visible;
                    margin-right: 5px;
                }
            }

            & > i {
                cursor: pointer;
            }

            .el-dropdown-link {
                cursor: pointer;
            }
        }

        .drag-wrapper {
            min-height: 20px;
        }

        .process-foot {
            display: flex;
            flex-direction: row;
            margin: 10px 15px 15px 25px;
            cursor: pointer;

            .icon {
                $size: 18px;
                width: $size;
                height: $size;
                margin-right: 5px;
            }

            .text {
                font-size: 14px;
                color: #33CCCC;
            }
        }
    }
</style>
