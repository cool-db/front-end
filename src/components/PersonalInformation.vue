<template>
    <div>
        <div class="bar">
            <img class="picture" :src="project"/>
            <div id="headline">
                个人信息
            </div>
        </div>
        <div id="body">
            <el-form label-position="left" label-width="100px" :model="formLabelAlign">
                <el-form-item label="姓名">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="生日">
                    <el-date-picker
                            class="picker"
                            v-model="formLabelAlign.birthday"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input type="number" v-model="formLabelAlign.phonenumber"></el-input>
                </el-form-item>
                <el-form-item label="网址">
                    <el-input v-model="formLabelAlign.website"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="saveModify">保存修改</el-button>
                    <el-button @click="clearAll">清空内容</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>
  import project from '@/assets/icons/nav_bar/project.png'
  import logo from '@/assets/logo.png'
  import Avatar from './Avatar.vue'

  import { changeUserInformation } from 'API/userApi'

  export default {
    props: {
      info: Object,
      getInfo: Function,
      clearAll: Function
    },
    data () {
      return {
        labelPosition: 'right',
        project,
        logo,
        pickerOptions: {}
      }
    },
    computed: {
      formLabelAlign () {
        return this.info
      }
    },
    components: {
      Avatar
    },
    methods: {
      saveModify () {
        changeUserInformation(this.formLabelAlign)
          .then(() => this.getInfo(1))
          .catch(err => this.$message.error(err.message))
      }
    }
  }

</script>


<style scoped>
    .bar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-top: -20px;
        margin-left: -20px;
        width: 430px;
        height: 65px;
        font-size: 18px;
        color: #3E5568;
        background-color: #E7F1F0;
    }

    .picture {
        height: 23px;
        width: 27px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 10px;
        margin-left: 20px;
    }

    #headline {
        display: flex;
        flex-direction: row;
        font-size: 18px;
        color: #3E5568;
    }

    #body {
        padding: 30px 20px 20px 5px;
    }

    .picker {
        padding-left: 40px;
    }
</style>
