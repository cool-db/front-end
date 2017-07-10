<template>
    <div>
        <div class="drop-header">任务名称</div>
        <el-dropdown-item>
            <img src="da" alt="..." class="item-icon">
            <span>复制任务</span>
        </el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    .drop-header {
        height: 38px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #C0C0C0;
        text-align: center;
        padding-top: 8px;
    }

    .item-icon {
        $l: 14px;
        width: $l;
        height: $l;
        background-color: #888888;
        vertical-align: middle;
    }

    .dropdown-item {
        height: 14px;
    }
</style>
