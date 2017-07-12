/**
* Created by dustar on 2017/7/12.
*/

<template>
  <div class="user-card" v-popover:popover1>
    <slot>
      Error
    </slot>
    <el-popover
      ref="popover1"
      placement="left-start"
      :visible-arrow="false"
      width="180"
      trigger="click">
      <div class="card">
        <div class="my-left">
          <div class="my-avatar">
            <img :src="user.avatar">
          </div>
          <div class="my-name">
            {{user.name}}
            <el-dropdown>
              <span class="my-per">
                {{ user.permission }} <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>{{ user.permission }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="my-email">
            {{user.email}}
          </div>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
  export default {
    props: ['user']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin-left: -11px;
    /*margin-right: 30px;*/
    margin-top: -10px;
    margin-bottom: -10px;
    height: 183px;
    width: 200px;
    border-bottom: 10px solid #33cccc;
    display: flex;
    flex-direction: row;
  }
  .my-left {
    width: 200px;
    height: 100%;
    background: #3e5568;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .my-avatar img{
    width: 90px;
    height: 90px;
    margin-top: 20px;
    border: white solid 0.5px;
    border-radius: 100%;
  }
  .my-name {
    font-size: 18px;
    line-height: 24px;
    height: 25px;
    margin-top: 10px;
    color: white;
  }
  .my-email {
    font-size: 16px;
    line-height: 24px;
    height: 22px;
    /*margin-top: 10px;*/
    color: #A1BDBF;
  }
  .my-per {
    cursor: pointer;
    color: #dddddd;
    font-size: 14px;
    margin-left: 5px;
  }
  .my-per i {
    font-size: 5px;
  }
  .my-per:hover {
    color: #33cccc;
  }
  .task-btn, .per-btn {
    background: yellow;
    width:104px;
    height: 50%;
  }
</style>
