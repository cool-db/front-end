<template>
    <div class="cards">
      <IndexCard>1</IndexCard>
      <IndexCard>2</IndexCard>
      <IndexCard>3</IndexCard>

      <div class="new-card">
        <div class="new-head">
        <span class="new-name">
          <img :src="iconAddAttach" class="add-attach"/>
          <span>新建任务列表</span>
        </span>
        </div>
        <div class="input-box">
          <el-input v-model="input" placeholder="新建任务列表"></el-input>
        </div>

        <div class="buttons">
          <el-button type="text" @click="input='';">取消</el-button>
          <el-button type="primary">添加列表</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import iconAddAttach from '@/assets/icons/nav_bar/add-attach.png'
  import IndexCard from '@/components/IndexCard.vue'
  import ElCard from '../../node_modules/element-ui/packages/card/src/main'
  export default {
    components: {
      ElCard,
      IndexCard
    },
    data () {
      return {
        iconAddAttach,
        input: ''
      }
    }
  }
</script>

<style scoped>
  .cards {
    float: left;
  }

  .new-head{
    margin-top: 8px;
    margin-left: 20px;
  }

  .new-card {
    background-color: #e7f1f0;
    width: 288px;
    text-align: left;
    margin: 10px;
    float: inherit;
    border-radius: 5px;
  }

  .new-name {
    line-height: 36px;
    color: #a1bdbf;
    cursor: pointer;
  }

  .add-attach {
    width: 16px;
    height: 16px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .input-box{
    margin: 10px;
  }

  .buttons{
    float: right;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>
