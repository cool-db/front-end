<template>
  <div class="file-block">
    <div class="file-name">
      <el-checkbox v-model="checked">{{filename}}</el-checkbox>
    </div>

    <div class="file-size">{{filesize}}</div>
    <div class="file-creator">{{filecreator}}</div>
    <div class="file-time">{{filetime}}</div>

    <div class="file-opration">
      <img :src="iconSearch" alt="search"/>
      <img :src="iconMove" alt="search"/>
      <img :src="iconEdit" alt="search"/>

      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src="iconMore" alt="search"/>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>文件菜单</el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconCopy" alt="copy" class="drop-down-icon"/>复制文件
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconLove" alt="love" class="drop-down-icon"/>收藏文件
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconShare" alt="share" class="drop-down-icon"/>共享文件
            </div>
          </el-dropdown-item>
          <el-dropdown-item>
            <div class="drop-down-icons">
              <img :src="iconDelete" alt="delete" class="drop-down-icon"/>删除文件
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
  import iconEdit from '@/assets/icons/new_item/edit.png'
  import iconMore from '@/assets/icons/my_profile/project-name.png'
  import iconCopy from '@/assets/icons/drop_down_menu/copy.png'
  import iconLove from '@/assets/icons/drop_down_menu/love.png'
  import iconShare from '@/assets/icons/drop_down_menu/share.png'
  import iconDelete from '@/assets/icons/drop_down_menu/delete.png'
  export default {
    data () {
      return {
        checked: false,
        filename: 'Qiu_Yuhang_PG_18.avi',
        filesize: '2.6GB',
        filecreator: 'QIU',
        filetime: '4月12日',
        iconSearch,
        iconMove,
        iconEdit,
        iconMore,
        iconCopy,
        iconLove,
        iconShare,
        iconDelete
      }
    }
    /* props: {
     filename: {
     type: String,
     required: true
     },
     filesize: [Number, String],
     filecreator: String,
     filetime: {
     type: Date,
     required: true
     }
     } */
  }
</script>

<style scoped>
  img{
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .file-block{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
  }
  .file-info{
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
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
</style>
