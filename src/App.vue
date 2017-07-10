<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .el-dialog__wrapper {
        .el-dialog--small {
            background: #f7f7f7!important;
            max-height: 78vh;
            overflow-y: scroll;
        }
    }

    .ql-toolbar {
        background-color: #eeeeee;
    }

    #quill-container {
        height: 200px!important;
    }
</style>
