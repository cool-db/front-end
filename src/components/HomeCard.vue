<template>
  <div class="home-card-box">
    <!--<el-card class="single-proj" :style="{backgroundImage: 'url(' + coverDemo + ')' }" v-if="attr">-->
      <!--<div class="proj-name">{{projName}}</div>-->
      <!--<div class="proj-note">{{projNote}}</div>-->
    <!--</el-card>-->

    <el-card class="single-proj" :style="{backgroundImage: 'url(' + coverMedia + ')' }">
      <div class="proj-name">{{projName}}</div>
      <div class="proj-note">{{projNote}}</div>
    </el-card>
  </div>

</template>

<script>
  import coverDemo from '@/assets/cover-demo.jpg'
  import coverMedia from '@/assets/cover-media.jpg'
  export default {
    data () {
      return {
        coverDemo,
        coverMedia
      }
    },
    props: ['projName', 'projNote']
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
    color: white;
  }

  .proj-note {
    font-size: 16px;
    padding-top: 5px;
    color: white;
  }
</style>
