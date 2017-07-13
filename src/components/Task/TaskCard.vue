<template>
    <div class="card">
        <div class="transition"></div>
        <div class="head">
            <div>
                <check-box :checked="checked" :disabled="disabled"
                           class="check"></check-box>
                <span>{{task.name}}</span>
            </div>
            <img src="" alt="..." class="avatar">
        </div>
        <div class="body">
            <badge v-if="task.ddl" class="normal-tag">{{task.ddl | ddlFormat}}</badge>
            <i class="icon el-icon-date"></i>
        </div>
    </div>
</template>

<script>
  import CheckBox from '../CheckBox.vue'
  import Badge from '../Badge.vue'

  export default {
    props: {
      task: Object
    },
    data () {
      return {
        checked: this.task.state,
        disabled: false
      }
    },
    components: {
      CheckBox,
      Badge
    },
    filters: {
      ddlFormat (value) {
        const date = new Date(value)
        return `${date.getMonth() + 1}月${date.getDate()}日截止`
      }
    }
  }
</script>

<style lang="scss" scoped>
    .card {
        box-sizing: border-box;
        position: relative;
        min-height: 40px;
        margin: 10px 8px;
        cursor: pointer;

        .transition {
            position: absolute;
            width: 5px;
            transition: width 0.2s;
            height: 100%;
            background-color: #FF4949;
            border-radius: 5px 0 0 5px;
        }

        &:hover .transition {
            width: 8px;
        }

        .head {
            background-color: #fff;
            height: 40px;
            font-size: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 12px;
            padding-right: 10px;
            border-radius: 5px 5px 0 0;

            .check {
                $size: 22px;
                width: $size;
                height: $size;
                vertical-align: text-bottom;
                cursor: pointer;
            }

            .avatar {
                $size: 25px;
                width: $size;
                height: $size;
                border-radius: 50%;
            }
        }

        .body {
            background-color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            padding: 4px 35px 8px 40px;
            border-radius: 0 0 5px 5px;

            & > * {
                margin-right: 8px;
            }

            .icon {
                color: #d8d8d8;
                font-weight: lighter;
                font-size: 16px;
            }

            .normal-tag {
                background-color: #3E5568;
                color: #fff;
            }

            .emer-tag {
                background-color: #FF4949;
                color: #fff;
            }
        }
    }

    .red-border {
        border-left: 5px solid #FF4949;
    }

    .yellow-border {
        border-left: 5px solid #F7BA2A;
    }
</style>
