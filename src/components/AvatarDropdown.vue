/**
* Created by dustar on 2017/7/12.
*/

<template>
  <el-dropdown>
    <slot>
      ERROR
    </slot>
      <el-dropdown-menu slot="dropdown">

        <el-dropdown-item>
          <el-button type="text" @click="dialogVisible1 = true">
            <div class="itemSection">
              <img class="addSubIcon" :src="my"/>
              <div class="itemText">个人设置</div>
            </div>
          </el-button>

        </el-dropdown-item>

        <el-dropdown-item>
          <div class="itemSection">
            <img class="addSubIcon" :src="pe"/>
            <div class="itemText">偏好设置</div>
          </div>
        </el-dropdown-item>

        <el-dropdown-item divided>
          <div class="itemSection">
            <div class="itemText exit">退出登录</div>
          </div>
        </el-dropdown-item>

      </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import my from '@/assets/icons/nav_bar/my-profile-settings.png'
  import pe from '@/assets/icons/nav_bar/preferences.png'
  export default {
    data () {
      return {
        my,
        pe
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .exit {
    margin-left: 30px;
  }
</style>
