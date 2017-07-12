<template>
  <div class="main">
    <div class="main-box">

      <div class="head-bar">
        <div class="lib-path">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">文件库</el-breadcrumb-item>
            <el-breadcrumb-item>文件夹一</el-breadcrumb-item>
            <el-breadcrumb-item>文件夹二</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="lib-option">
          <img :src="iconFolder" alt="New Folder"/>
          <img :src="iconUpload" alt="Upload"/>
        </div>
      </div>

      <div class="neck-bar">
        <div class="change-view">
          <img :src="iconMenu" alt="Menu"/>
          <img :src="iconIcon" alt="Icon"/>
        </div>
      </div>


      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="文件名"
          width="300">
          <template scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="大小"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="创建者"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="name"
          label="更新时间"
          width="120">
        </el-table-column>

        <el-table-column
          width="200"
          align="right">
          <template scope="scope">
            <div class="file-operation">
              <img :src="iconSearch" alt="search"/>
              <img :src="iconMove" alt="search"/>
              <img :src="iconEdit" alt="search"/>

                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img :src="iconMore" alt="search"/>
                </span>

                  <div v-if="scope.row.isfile">
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
                  </div>


                  <div v-else>
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
                  </div>
                </el-dropdown>
              </div>

          </template>
        </el-table-column>
      </el-table>


    </div>
  </div>
</template>

<script>
  import iconFolder from '@/assets/icons/new_item/upload-folder.png'
  import iconUpload from '@/assets/icons/new_item/upload.png'
  import iconMenu from '@/assets/icons/new_item/menu.png'
  import iconIcon from '@/assets/icons/my_profile/project.png'
  import iconSearch from '@/assets/icons/new_item/search.png'
  import iconMove from '@/assets/icons/new_item/move.png'
  import iconEdit from '@/assets/icons/new_item/edit.png'
  import iconMore from '@/assets/icons/my_profile/project-name.png'
  import iconCopy from '@/assets/icons/drop_down_menu/copy.png'
  import iconLove from '@/assets/icons/drop_down_menu/love.png'
  import iconShare from '@/assets/icons/drop_down_menu/share.png'
  import iconDelete from '@/assets/icons/drop_down_menu/delete.png'
  import NewFile from '@/components/My/NewFile.vue'
  import NewFolder from '@/components/My/NewFolder.vue'
  export default {
    components: {NewFile, NewFolder},
    data () {
      return {
        iconFolder,
        iconUpload,
        iconMenu,
        iconIcon,
        iconSearch,
        iconMove,
        iconEdit,
        iconMore,
        iconCopy,
        iconLove,
        iconShare,
        iconDelete,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: true
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: false
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: false
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: false
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: true
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: true
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isfile: false
        }],
        multipleSelection: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>

<style>
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
    padding: 5px;
  }

  .main {
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .main-box {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 1040px;
    padding: 10px 25px;
    border-radius: 3px;
  }

  .head-bar {
    display: inherit;
    width: inherit;
    height: 50px;
    justify-content: space-between;
    align-items: center;
  }

  .neck-bar {
    display: inherit;
    justify-content: flex-end;
    width: inherit;
    height: 30px;
  }

  .lib-path {
    border-left: 5px #3cc solid;
    padding-left: 10px;
  }

  .drop-down-icons {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .file-operation{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }

  .el-dropdown-link{
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
</style>
