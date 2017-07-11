<template>
  <div class="subcard">
    <div class="subcard-item">
      <div v-bind:style="checked ? styleTrue:styleFalse">
        <el-checkbox v-model="checked"></el-checkbox>
        <span class="task-name">{{taskName}}</span>
        <img :src="iconBlankAvatar" class="icon-avatar"/>
      </div>

      <div class="card-detail">
        <span class="time-tag">4月28日 截止</span>
        <div class="subicons">
        <span>
          <img :src="iconSubTask" class="subicon">
        <span style="marginLeft: 3px;marginRight: 3px;">0/2</span>
        </span>
          <img :src="iconClock" class="subicon">
          <img :src="iconFile" class="subicon">
          <span>
          <img :src="thumbedup ? iconThumbUpOn : iconThumbUp" class="subicon"
               @click="thumbedup =! thumbedup; thumbedupnum += thumbedup ? 1 : -1;">
          {{thumbedupnum}}
        </span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import iconBlankAvatar from '@/assets/icons/index/blank-avatar.png'
  import iconAddNewItem from '@/assets/icons/index/add-new-item.png'
  import iconSubTask from '@/assets/icons/index/subtask.png'
  import iconClock from '@/assets/icons/index/clock.png'
  import iconFile from '@/assets/icons/index/file.png'
  import iconThumbUp from '@/assets/icons/index/thumb-up.png'
  import iconThumbUpOn from '@/assets/icons/index/thumb-up-on.png'
  export default {
    data () {
      return {
        checked: false,
        styleTrue: {
          backgroundColor: '#c0c0c0',
          height: '35px',
          paddingLeft: '15px',
          paddingRight: '10px',
          paddingTop: '10px',
          paddingBottom: '10px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px'
        },
        styleFalse: {
          backgroundColor: 'white',
          height: '35px',
          paddingLeft: '15px',
          paddingRight: '10px',
          paddingTop: '10px',
          paddingBottom: '10px',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px'
        },
        taskName: '任务名称',
        iconBlankAvatar,
        iconAddNewItem,
        iconSubTask,
        iconClock,
        iconFile,
        iconThumbUp,
        iconThumbUpOn,
        thumbedup: false,
        thumbedupnum: 7
      }
    }
  }
</script>

<style>
  .subcard{
    width: 262px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: #e7f1f0;
    align-items: flex-start;
    cursor: pointer;
    border-radius: 5px;
    border-left: 5px red solid;
  }

  .subcard:hover{
    width: 267px;
    border-left: 10px red solid;
  }

  .task-name{
    line-height: 36px;
    margin-left: 5px;
  }

  .icon-avatar{
    float: right;
    width: 24px;
    height: 24px;
    margin-top: 6px;
  }

  .card-detail{
    height: 59px;
    background-color: #3e5568;
    color: white;
    padding-left: 40px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
    border-bottom-right-radius: 5px;
  }

  .subicons{
    display: flex;
    flex-flow: row wrap;
  }

  .subicon{
    width: 16px;
    height: 16px;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;
    vertical-align: text-bottom;
  }

  .time-tag{
    background-color: #e7f1f0;
    border-radius: 10px;
    color: #3e5568;
    padding-bottom: 2px;
    padding-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: small;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
