<template>
  <el-dropdown>
  <span class="el-dropdown-link">
    <img class="addIcon" :src="addNewIcon"/>
  </span>
    <el-dropdown-menu slot="dropdown">
      
      <el-dropdown-item>
        <el-button type="text" @click="dialogVisible1 = true">
          <div class="itemSection">
            <img class="addSubIcon" :src="project"/>
            <div class="itemText">项目</div>
          </div>
        </el-button>
      </el-dropdown-item>
  
      <el-dialog
        :modal-append-to-body='true'
        title="创建新项目"
        :visible.sync="dialogVisible1"
        size="tiny"
        :before-close="handleClose">
        <div class="newProjectAll">
          <img class="emoji" :src="emoji"/>
          <div class="newProject1">为不同的事务建立各自的项目</div>
          <div class="newProject2"><el-input v-model="input" placeholder="项目名称"></el-input></div>
          <div class="newProject2"><el-input v-model="input" placeholder="项目简介（选填）"></el-input></div>
          <el-select v-model="value" placeholder="项目归属">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <span slot="footer" class="dialog-footer" style="margin-top: 20px">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </div>
        
      </el-dialog>
      
      <el-dropdown-item>
        <div class="itemSection">
          <img class="addSubIcon" :src="task"/>
          <div class="itemText">任务</div>
        </div>
      </el-dropdown-item>
      
      <el-dropdown-item>
        <div class="itemSection">
          <img class="addSubIcon" :src="file"/>
          <div class="itemText">文件</div>
        </div>
      </el-dropdown-item>
      
      <el-dropdown-item>
        <div class="itemSection">
          <img class="addSubIcon" :src="calendar"/>
          <div class="itemText">日程</div>
        </div>
      </el-dropdown-item>
      
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import addNewIcon from '@/assets/icons/index/add-new-item.png'
  import project from '@/assets/icons/nav_bar/project.png'
  import task from '@/assets/icons/nav_bar/task.png'
  import file from '@/assets/icons/nav_bar/file.png'
  import calendar from '@/assets/icons/nav_bar/calendar.png'
  import emoji from '@/assets/icons/my_profile/emoji.png'
  
  export default {
    data () {
      return {
        addNewIcon,
        project,
        task,
        file,
        calendar,
        emoji,
        dialogVisible1: false,
        options: [{
          value: '选项1',
          label: '父项目1'
        }, {
          value: '选项2',
          label: '父项目2'
        }, {
          value: '选项3',
          label: '父项目3'
        }],
        value: ''
      }
    }
  }
</script>

<style>
  .itemSection{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .addSubIcon{
    width: 20px;
    height: 20px;
  }
  
  .itemText{
    margin-left: 10px;
    font-size: 14px;
    color: #475669;
  }
  
  .newProjectAll{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .newProject1{
    text-align: center;
    font-size: 14px;
    color: #888888;
    margin-bottom: 20px;
  }
  
 .newProject2{
   width: 203.4px;
   margin-bottom: 20px;
 }
 
 
</style>
