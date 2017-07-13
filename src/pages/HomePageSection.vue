<template>
    <div class="home-page-main">
        <div class="home-page-box">
            <div class="home-page-header">
                <span style="margin-right: 6px">我拥有的项目</span>
                <badge>{{ownCount}}</badge>
            </div>

            <home-card v-if="ownCount"
                       v-for="item in project.own"
                       :projName="item.name"
                       :projNote="item.description"
                       :id="item.id"
                       :key="item.id"></home-card>

            <el-card class="new-proj">
                <div class="new-proj-box" @click="dialogVisible = true">
                    <i class="el-icon-plus"></i>
                    <span style="font-size: 18px">创建新项目</span>
                </div>
            </el-card>

            <div class="home-page-header">
                <span style="margin-right: 6px">我参与的项目</span>
                <badge>{{joinCount}}</badge>
            </div>

            <home-card v-if="joinCount"
                       v-for="item in project.join"
                       :projName="item.name"
                       :projNote="item.description"
                       :id="item.id"
                       :key="item.id"></home-card>

        </div>
        <AddTaskModal :dialogVisible.sync="dialogVisible"></AddTaskModal>
    </div>
</template>

<script>
  import HomeCard from '@/components/HomeCard.vue'
  import Badge from '@/components/Badge.vue'
  import AddTaskModal from '@/components/AddTaskModal.vue'

  import img from '@/assets/logo.png'

  import { getProjectList } from 'API/projectApi'

  export default {
    components: {HomeCard, Badge, AddTaskModal},
    data () {
      return {
        project: {own: [], join: []},
        img,
        dialogVisible: false
      }
    },
    methods: {
      getAllProject (id) {
        return getProjectList(id)
          .catch(err => this.$message.error(err.message))
      },
      classifyProject (plist, id) {
        let result = {own: [], join: []}
        plist.forEach(item => {
          if (item.ownerId === id) {
            result.own.push(item)
          } else {
            result.join.push(item)
          }
        })
        return result
      }
    },
    created () {
      const id = localStorage.token
      this.getAllProject(id)
        .then(({projects}) => this.classifyProject(projects, id))
        .then(data => {
          this.project = data
        })
    },
    computed: {
      ownCount () {
        return this.project.own.length
      },
      joinCount () {
        return this.project.join.length
      }
    }
  }
</script>

<style scoped lang="scss">
    .home-page-main {
        display: flex;
        height: calc(100vh - 49px);
        display: -webkit-flex;
        justify-content: center;
        overflow-y: scroll;
    }

    .home-page-box {
        display: flex;
        display: -webkit-flex;
        width: 1100px;
        flex-wrap: wrap;
    }

    .home-page-header {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        width: 100%;
        font-size: 18px;
        margin: 40px 15px 8px 15px;
    }

    .new-proj {
        display: flex;
        display: -webkit-flex;
        justify-content: center;
        align-items: center;
        margin: 5px 8px;
        cursor: pointer;
        width: 254px;
        height: 148px;
        color: #888;
    }

    .new-proj-box {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        &:hover {
            color: #33CCCC;
        }
    }

    .el-icon-plus {
        font-size: 30px;
        color: inherit;
        margin: 10px;
    }
</style>
