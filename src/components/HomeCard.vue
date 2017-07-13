<template>
    <div class="home-card-box" @click="jumpToProject">
        <el-card class="single-proj" :style="{backgroundImage: 'url(' + picBg + ')' }">
            <div class="proj-name">{{projName}}</div>
            <div class="proj-note">{{projNote}}</div>
        </el-card>
    </div>
</template>

<script>
  import picBg from '@/assets/cover-demo.jpg'
  export default {
    data () {
      return {
        picBg
      }
    },
    props: ['projName', 'projNote', 'id'],
    methods: {
      jumpToProject () {
        this.$router.push(`/project/${this.id}`)
      }
    }
  }
</script>

<style scoped>
    .home-card-box {
        margin: 5px 8px;
        cursor: pointer;
    }

    .single-proj {
        width: 254px;
        height: 148px;
    }

    .proj-name {
        font-size: 18px;
        padding-bottom: 5px;
        color: #888;
    }

    .proj-note {
        font-size: 16px;
        padding-top: 5px;
        color: #888;
    }
</style>
