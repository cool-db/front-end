<template>
  <div id="comment-box">
    <el-input id="comment-input" size="large" v-model="input" placeholder="请输入内容" @focus="showPanel" @blur="hidePanel"></el-input>
    <div id="comment-panel" v-show="isShowPanel">

      <el-button id="submit" type="primary" @click="comment">发 布</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        input: '1',
        isShowPanel: false
      }
    },
    props: [
    ],
    methods: {
      showPanel () {
        this.isShowPanel = true
      },
      hidePanel () {
        setTimeout(() => {
          this.isShowPanel = false
        }, 100)
      },
      comment () {
        this.input = ''
      }
    }
  }
</script>

<style scoped>
  #comment-box {
    margin-left: -20px;
    margin-right: -20px;
    flex: 1;
    background: white;
    border-top: 1px solid #888888;
    padding-bottom: 10px;
    margin-bottom: -15px;
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  #comment-input {
    width: 93%;
    margin-top: 15px;
    /*border:2px blue solid;*/
  }
  #comment-panel {
    margin-top: -3px;
    width: 92.7%;
    background: white;
    height: 40px;
    z-index: 50;

    border: 0.5px #33CCCC solid;
    border-radius: 0 0 4px 4px;
  }

  #submit {
    margin-right: 5px;
    margin-top: 2px;
    width: 100px;
  }

</style>
