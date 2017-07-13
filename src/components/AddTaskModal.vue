/**
* Created by xueyingchen.
*/
<template>
    <el-dialog
            :modal-append-to-body="false"
            title="创建新项目"
            :show-close="false"
            :visible.sync="visible"
            size="tiny">
        <div class="newProjectAll">
            <img class="emoji" :src="emoji"/>
            <div class="newProject1">为不同的事务建立各自的项目</div>
            <div class="newProject2">
                <el-input v-model="name" placeholder="项目名称"></el-input>
            </div>
            <div class="newProject2">
                <el-input v-model="description" placeholder="项目简介"></el-input>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button class="btn1" size="large" @click="closeModal">取 消</el-button>
                <el-button class="btn2" size="large" type="primary" @click="addProjectByModal">确 定</el-button>
            </span>
        </div>
    </el-dialog>
</template>

<script>
  import emoji from '@/assets/icons/my_profile/new-project.png'

  import { addProject } from 'API/projectApi'

  export default {
    props: {
      dialogVisible: Boolean
    },
    data () {
      return {
        emoji,
        name: '',
        description: ''
      }
    },
    methods: {
      addProjectByModal () {
        return addProject(localStorage.token, this.name, this.description)
          .then(({projectId}) => {
            this.closeModal()
            this.$router.push(`/project/${projectId}`)
          }).catch(err => this.$message.error(err.message))
      },
      closeModal () {
        this.$emit('update:dialogVisible', false)
      }
    },
    computed: {
      visible () {
        return this.dialogVisible
      }
    }
  }
</script>

<style scoped>
    .newProjectAll {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .emoji{
      margin: 15px;
    }

    .newProject1 {
        text-align: center;
        font-size: 14px;
        color: #888888;
        margin-bottom: 15px;
    }

    .newProject2 {
        width: 90%;
        margin-bottom: 15px;
    }

    .dialog-footer {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }

    .btn1, .btn2 {
        width: 45%;
    }
</style>
