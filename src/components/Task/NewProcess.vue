<template>
    <div class="background">
        <span class="words" @click="">
            <i class="el-icon-plus"></i>
            <span>新建任务列表</span>
        </span>
        <el-input v-model="input" placeholder="新建任务列表"></el-input>
        <span class="btn-group">
            <el-button type="primary" @click="addProcessReload">保存</el-button>
            <el-button type="text" @click="input = ''">取消</el-button>
        </span>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { INITDATA, ADDPROCESS } from 'MODULE/process'

  export default {
    data () {
      return {
        input: ''
      }
    },
    methods: {
      ...mapActions({
        initData: INITDATA,
        addProcess: ADDPROCESS
      }),
      addProcessReload () {
        const pid = this.$route.params.pid
        this.addProcess({
          pName: this.input,
          pid,
          uid: localStorage.token
        }).then(() => this.addProcess())
          .catch(err => this.$message.error(err.message))
      }
    }
  }
</script>

<style lang="scss" scoped>
    .background {
        width: 290px;
        height: 150px;
        background-color: #E7F1F0;
        margin-right: 20px;
        box-sizing: border-box;
        border-bottom: 5px solid #33CCCC;
        border-radius: 4px;
        padding-top: 13px;
        padding-left: 25px;
        padding-right: 20px;

        .words {
            display: inline-block;
            color: #A1BDBF;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 15px;
        }

        .btn-group {
            display: flex;
            flex-direction: row-reverse;
            padding-top: 13px;
            & > * {
                margin-left: 15px;
            }

        }
    }
</style>
