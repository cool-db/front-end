<template>
    <div class="process-board">
        <header class="process-head">
            <div class="left">
                <text-edit :content.sync="taskName" class="state"></text-edit>
                <badge>12</badge>
            </div>
            <span class="el-dropdown-link">
                <i class="el-icon-close"></i>
            </span>
        </header>
        <draggable v-model="list" class="drag-wrapper" :options="dragOptions">
            <task-card v-for="task, index in list" :key="index"
                       :title="task"></task-card>
        </draggable>
        <new-task></new-task>
    </div>
</template>

<script>
  import Draggable from 'vuedraggable'

  import addIcon from '@/assets/icons/nav_bar/add.png'

  import TaskCard from './TaskCard.vue'
  import Badge from '../Badge.vue'
  import NewTask from './NewTask.vue'
  import TextEdit from '../TextEdit.vue'

  export default {
    props: {
      processName: String,
      taskList: Array
    },
    data () {
      return {
        addIcon,
        list: this.taskList,
        taskName: this.processName
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

        &:first-child {
            margin-left: 15px;
        }

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
