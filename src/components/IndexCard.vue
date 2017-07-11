<template>
  <div class="cards">
    <div class="head-content">
      <span class="card-name">{{listName}}</span>
      <span class="task-count">{{taskCount}}</span>

      <div class="drop-down-menu">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="iconMenu" class="icon-menu"/>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="marginLeft: 44px;">{{listName}}</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <img :src="iconEdit" class="drop-down-icon"/>
            编辑列表
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="iconAddList" class="drop-down-icon"/>
            在此后添加新列表
          </el-dropdown-item>
          <el-dropdown-item divided>
            <img :src="iconSetExecutive" class="drop-down-icon"/>
            设置本列表所有任务执行者
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="iconDueTime" class="drop-down-icon"/>
            设置本列表所有任务截止时间
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="iconMove" class="drop-down-icon"/>
            移动本列表所有任务
          </el-dropdown-item>
          <el-dropdown-item>
            <img :src="iconCopy" class="drop-down-icon"/>
            复制本列表所有任务
          </el-dropdown-item>
          <el-dropdown-item divided>
            <img :src="iconDelete" class="drop-down-icon"/>
            删除列表
          </el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <SubCard>1</SubCard>
    <SubCard>2</SubCard>
    <SubCard>3</SubCard>


    <div class="add-task" @click="taskCount++;">
      <img :src="iconAddNewItem" alt="Add new item" class="add-icon"/>
      <span>添加任务</span>
    </div>
  </div>
</template>

<script>
  import ElCard from '../../node_modules/element-ui/packages/card/src/main'
  import iconMenu from '@/assets/icons/index/menu.png'
  import iconAddNewItem from '@/assets/icons/index/add-new-item.png'
  import iconCopy from '@/assets/icons/drop_down_menu/copy.png'
  import iconMove from '@/assets/icons/drop_down_menu/move.png'
  import iconDelete from '@/assets/icons/drop_down_menu/delete.png'
  import iconEdit from '@/assets/icons/drop_down_menu/edit.png'
  import iconAddList from '@/assets/icons/drop_down_menu/add-list.png'
  import iconSetExecutive from '@/assets/icons/drop_down_menu/set-executive.png'
  import iconDueTime from '@/assets/icons/new_item/calendar_and_date.png'
  import SubCard from '@/components/SubCard.vue'
  export default {
    components: {ElCard, SubCard},
    data () {
      return {
        taskCount: 3,
        listName: '待处理',
        iconMenu,
        iconAddNewItem,
        iconCopy,
        iconMove,
        iconDelete,
        iconEdit,
        iconAddList,
        iconSetExecutive,
        iconDueTime
      }
    }
  }
</script>

<style scoped>
  .cards{
    background-color: #e7f1f0;
    width: 288px;
    height: 612px;
    text-align: left;
    margin: 10px;
    padding: 0;
    border-radius: 5px;
  }

  .head-content{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .task-count{
    background-color: #3cc;
    color: white;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 4px;
  }

  .card-name{
    margin-left: 25px;
    margin-top: 12px;
    margin-bottom: 12px;
    line-height: 36px;
    color: #888;
  }

  .drop-down-menu{
    float: right;
    cursor: pointer;
  }

  .icon-menu{
    width: 16px;
    height: 6px;
    margin-right: 25px;
    margin-top: 15px;
  }

  .drop-down-icon{
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    vertical-align: middle;
  }

  .add-task{
    color: #3cc;
    margin-left: 20px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
  }

  .add-icon{
    width: 19px;
    height: 19px;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>
