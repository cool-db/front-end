<template>
    <div class="">
        <div class="header">
            <img :src="icon" alt="..." class="icon">
            <div>关联的{{type}}</div>
        </div>
        <div class="list-item">
            <div class="avatar-wrapper">
                <img :src="avatar" class="avatar"/>
                <div>{{executor}}</div>
            </div>
            <span class="divider"></span>
            <div class="slot">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      type: String,
      icon: String,
      executor: String,
      avatar: String
    }
  }
</script>

<style lang="scss" scoped>
    .header {
        $ev-height: 14px;
        display: flex;
        flex-direction: row;
        font-size: $ev-height;
        line-height: $ev-height;
        margin-top: 13px;
        margin-bottom: 8px;

        .icon {
            $side: $ev-height;
            width: $side;
            height: $side;
            margin-left: 20px;
            margin-right: 7px;
        }
    }

    .list-item {
        border: 1px solid #dedede;
        border-radius: 4px;
        min-height: 36px;
        height: 100%;
        background-color: #ffffff;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .avatar-wrapper {
            display: flex;
            align-items: center;
            min-width: 157px;

            .avatar {
                $side: 23px;
                width: $side;
                height: $side;
                border-radius: 50%;
                margin-left: 16px;
                margin-right: 10px;
            }
        }
    },
    .divider {
        border-left: 1px solid #dedede;
        min-height: inherit;
    }

    .slot {
        box-sizing: border-box;
        padding: 7px 12px;
        width: 100%;
    }

</style>
