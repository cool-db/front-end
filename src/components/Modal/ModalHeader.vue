<template>
    <header class="header-wrapper">
        <span>{{title}}</span>
        <span class="icon-style">
            <el-dropdown trigger="click" class="drop-down-wrapper">
                <span class="more-operate">
                    更多<i class="el-icon-arrow-down"></i>
                </span>
                <el-dropdown-menu slot="dropdown" class="drop-down">
                    <task-more></task-more>
                </el-dropdown-menu>
            </el-dropdown>
            <i class="el-icon-close" @click="onClose"></i>
        </span>
    </header>
</template>

<script>
  import TaskMore from './TaskMore.vue'
  export default {
    props: {
      title: String,
      onClose: Function
    },
    components: {
      TaskMore
    }
  }
</script>

<style lang="scss" scoped>
    .header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .icon-style {
        color: #888888;
        font-size: 16px;
    }

    .drop-down-wrapper {
        font-size: 15px;
        & + .el-icon-close, .more-operate {
            cursor: pointer;
            &:hover {
                color: #33CCCC;
            }
        }

        .more-operate {
            margin-right: 15px;
        }
    }
    .drop-down {
        width: 261px;
        font-size: 14px;
    }
</style>
