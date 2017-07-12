/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="MenuView">
      <view-sort-dropdown :items="items" :owner="mode" @changeMode="changeMode">
        <menu-list-item :icon="sort" :title="currentMode">
          <i class="el-icon-arrow-down"></i>
        </menu-list-item>
      </view-sort-dropdown>
      <div class="menu-item">
        <menu-list-item :icon="filter" :title="'任务筛选'">
          <div class="clear-filter" v-if="showClearFilter">清除筛选</div>
        </menu-list-item>
      </div>
      <el-input class="search-bar" v-model="search" placeholder="查找相关任务"></el-input>
      <view-filter class="menu-item" :icon="executive" :title="'执行者'" :items="users"></view-filter>
      <view-filter class="menu-item" :icon="executive" :title="'截止时间'" :items="dates"></view-filter>
    </div>
</template>

<script>
  import MenuListItem from './MenuListItem.vue'
  import sort from '@/assets/icons/my_profile/sort.png'
  import filter from '@/assets/icons/my_profile/filter.png'
  import executive from '@/assets/icons/my_profile/executive.png'
  import ViewSortDropdown from './ViewSortDropdown.vue'
  import ViewFilter from './ViewFilter.vue'
  export default {
    name: 'MenuView',
    data () {
      return {
        sort,
        filter,
        executive,
        showClearFilter: false,
        users: [
          { isUser: true, avatar: sort, name: '薛英琛', checked: false },
          { isUser: true, avatar: filter, name: '西蒙', checked: false },
          { isUser: true, avatar: executive, name: '谢天', checked: false },
          { isUser: true, avatar: sort, name: '谢地', checked: false }
        ],
        dates: [
          { isUser: false, name: '今天截止', checked: false },
          { isUser: false, name: '已逾期', checked: false },
          { isUser: false, name: '未完成', checked: false },
          { isUser: false, name: '已完成', checked: false }
        ],
        items: [
          '项目自定义排序',
          '按优先级排序',
          '按截止时间排序',
          '按创建最早排序',
          '按创建最晚排序'
        ],
        mode: 0,
        currentMode: '项目自定义排序',
        search: '',
        filterCount: 0
      }
    },
    components: {
      MenuListItem,
      ViewSortDropdown,
      ViewFilter
    },
    methods: {
      changeMode (command) {
        this.mode = parseInt(command)
        this.currentMode = this.items[this.mode]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .MenuView {
    cursor: pointer;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-item {
    width: 100%;
  }
  .clear-filter {
    color: #A1BDBF;
    font-size: 14px;
  }
  .search-bar {
    width: 90%;
  }
</style>
