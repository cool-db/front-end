<template>
    <footer class="process-foot" v-if="!isEdit"
            @click="isEdit = true">
        <img :src="addIcon" alt="..." class="icon">
        <span class="text">添加任务</span>
    </footer>
    <div v-else class="editor" @blur="isEdit = false">
        <el-input class="input"
                  type="textarea"
                  :autosize="{ minRows: 2 }"
                  placeholder="请输入任务"
                  v-model="content">
        </el-input>
        <el-button type="primary" @click="handleClick">创建</el-button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { ADDTASK } from 'MODULE/process'

  import addIcon from '@/assets/icons/nav_bar/add.png'

  export default {
    props: {
      id: Number
    },
    data () {
      return {
        addIcon,
        isEdit: false,
        content: ''
      }
    },
    methods: {
      handleClick () {
        this.isEdit = false
        this.addTask({
          id: this.id,
          name: this.content
        }).catch(err => this.$message.error(err.message))
      },
      ...mapActions({
        addTask: ADDTASK
      })
    }
  }
</script>

<style lang="scss" scoped>
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

    .editor {
        margin: 10px 8px;
        background-color: #fff;
        height: 100px;
        padding: 9px;

        .input {
            margin-bottom: 10px;
        }
    }
</style>
