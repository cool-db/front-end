/**
* Created by dustar on 2017/7/11.
*/

<template>
  <div id="deadline">

    <div class="block">
      <el-date-picker
        v-model="str"
        type="date"
        :editable="true"
        placeholder="选择日期"
        align="left"
        size="small"
        format="MM月dd日"
        @change="changeDate"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {CHANGEDDL} from 'MODULE/task'
  export default {
    data () {
      return {
        str: '',
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        }
      }
    },
    computed: {
      ...mapState({
        ddl: state => state.task.task.ddl
      })
    },
    created () {
      this.str = this.ddl
    },
    methods: {
      changeDate (value) {
        console.log(value)
        this.changeDDL(value)
      },
      ...mapMutations({
        changeDDL: CHANGEDDL
      })
    }
  }
</script>

<style scoped>
  .block {
    padding-top: 5px;
  }
</style>
