<template>
  <div class="file-master-2-main">
    <div class="file-master-2-box">


      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px'}">
            <img :src="iconLogo" class="image">
            <div style="padding: 14px;">
              <span>邱宇航竟干这...事！.avi</span>
              <div class="bottom clearfix">

                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>


      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
        <span>邱宇航.avi</span>
      </el-dialog>

    </div>
  </div>
</template>

<style scoped>
  .file-master-2-main{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }

  .file-master-2-box{
    margin-top: 30px;
    width: 950px;
    display: flex;
    display: -webkit-flex;

  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100px;
    height: 100px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<script>
  import iconLogo from '@/assets/logo.png'
  export default {
    data () {
      return {
        currentDate: new Date(),
        dialogImageUrl: '',
        dialogVisible: false,
        iconLogo
      }
    },
    methods: {
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    }
  }
</script>
