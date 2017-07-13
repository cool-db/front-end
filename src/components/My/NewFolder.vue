<template>
  <div class="folder-block">
    <div class="folder-name">
      <el-checkbox v-model="checked">{{foldername}}</el-checkbox>
    </div>

    <div class="folder-size">-</div>
    <div class="folder-creator">{{foldercreator}}</div>
    <div class="folder-time">{{foldertime}}</div>

    <div class="folder-opration">
      <img :src="iconSearch" alt="search"/>
      <img :src="iconMove" alt="search"/>

      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src="iconMore" alt="search"/>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>文件夹菜单</el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconCopy" alt="copy" class="drop-down-icon"/>复制文件夹
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconDelete" alt="delete" class="drop-down-icon"/>删除文件夹
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
  import iconSearch from '@/assets/icons/new_item/search.png'
  import iconMove from '@/assets/icons/new_item/move.png'
  import iconMore from '@/assets/icons/my_profile/project-name.png'
  import iconCopy from '@/assets/icons/drop_down_menu/copy.png'
  import iconDelete from '@/assets/icons/drop_down_menu/delete.png'
  export default {
    data () {
      return {
        checked: false,
        foldername: 'Qiu_Yuhang_PG_15.avi',
        foldercreator: 'Q',
        foldertime: '2月13日',
        iconSearch,
        iconMove,
        iconMore,
        iconCopy,
        iconDelete
      }
    }
  }
</script>

<style scoped>
  img{
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .folder-block{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .folder-info{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .drop-down-icons{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
  }
  .drop-down-icon{
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
</style>
