<template>
    <div class="process-board">
        <header class="process-head">
            <div class="left">
                <span class="state">已完成</span>
                <badge>12</badge>
            </div>
            <i class="el-icon-more"></i>
        </header>
        <task-card></task-card>
        <footer class="process-foot">
            <img :src="addIcon" alt="..." class="icon">
            <span class="text">添加任务</span>
        </footer>
    </div>
</template>

<script>
  import addIcon from '@/assets/icons/nav_bar/add.png'
  import TaskCard from './TaskCard.vue'
  import Badge from '../Badge.vue'

  export default {
    data () {
      return {
        addIcon
      }
    },
    components: {
      TaskCard,
      Badge
    }
  }
</script>

<style lang="scss" scoped>
    .process-board {
        width: 290px;
        height: 100%;
        background-color: #E7F1F0;
        margin-right: 20px;
        box-sizing: border-box;
        border-bottom: 5px solid #33CCCC;
        border-radius: 4px;

        &:first-child {
            margin-left: 15px;
        }

        .process-head {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 13px 15px 13px 25px;
            font-size: 18px;
            color: #888888;

            .left {
                display: flex;
                flex-direction: row;
                align-items: center;

                .state {
                    margin-right: 6px;
                }
            }

            & > i {
                cursor: pointer;
            }
        }

        .process-foot {
            display: flex;
            flex-direction: row;
            margin: 10px 15px 0 25px;
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
