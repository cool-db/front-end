<template>

    <div>
        <div class="accountPassword">
            <div class="bar">
                <img class="picture" :src="project">
                <div>
                    账号密码
                </div>
            </div>

            <div class="mail-section">
                <div class="input-bar">
                    <div class="text">邮箱账号</div>
                    <div>
                        <el-input class="mail-input" v-model="email"
                                  placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="btn-bar">
                    <el-button type="primary" @click="saveModify">保存修改</el-button>
                    <el-button @click="clearAll">清空内容</el-button>
                </div>

            </div>


            <div class="line"></div>

            <div class="tel-section">
                <div class="input-bar">
                    <div class="text">手机号码</div>
                    <div>
                        <el-input class="mail-input" :disabled="true" v-model="phonenumber"
                                  placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="btn-bar">
                    <el-button type="primary">解绑手机</el-button>
                    <el-button>修改密码</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import project from '@/assets/icons/nav_bar/project.png'

  export default {
    props: {
      info: Object,
      getInfo: Function,
      clearAll: Function
    },
    data () {
      return {
        project,
        input: '',
        email: this.info.email
      }
    },
    computed: {
      phonenumber () {
        return this.info.phonenumber
      }
    },
    methods: {
      saveModify () {}
    }
  }
</script>


<style scoped>
    .accountPassword {
        background-color: #ffffff;
        width: 100%;
        height: 100%;
        padding-bottom: 35px;
    }

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
        margin-bottom: 20px;
    }

    .input-bar {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .btn-bar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 20px;
    }

    .mail-input {
        width: 290px;
    }

    .text {
        font-size: 16px;
        color: #A1BDBF;
    }

    .picture {
        height: 23px;
        width: 27px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 10px;
        margin-left: 20px;
    }

    .line {
        width: 430px;
        height: 1px;
        margin-top: 40px;
        margin-bottom: 20px;
        margin-left: -20px;
        background-color: #C0C0C0;
    }
</style>
