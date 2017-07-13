<template>
  <div class="home-card-box">

    <el-card class="single-proj" :style="{backgroundImage: 'url(' + tellBackground + ')' }">
      <div class="proj-name">{{projName}}</div>
      <div class="proj-note">{{projNote}}</div>
    </el-card>

  </div>
</template>

<script>
  import EiCapitan from '@/assets/proj_background/EI_Capitan.png'
  import EiCapitan2 from '@/assets/proj_background/EI_Capitan_2.png'
  import MilkyWay from '@/assets/proj_background/Milky_Way.png'
  import Sierra2 from '@/assets/proj_background/Sierra_2.png'
  import Yosemite2 from '@/assets/proj_background/Yosemite_2.png'
  export default {
    data () {
      return {
        EiCapitan,
        EiCapitan2,
        MilkyWay,
        Sierra2,
        Yosemite2
      }
    },
    props: ['projName', 'projNote'],
    computed: {
      tellBackground: function () {
        var randomNum = Math.random()
        if (randomNum < 0.2) {
          return EiCapitan
        } else if (randomNum < 0.4) {
          return EiCapitan2
        } else if (randomNum < 0.6) {
          return MilkyWay
        } else if (randomNum < 0.8) {
          return Sierra2
        } else {
          return Yosemite2
        }
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
    color: white;
  }

  .proj-note {
    font-size: 16px;
    padding-top: 5px;
    color: white;
  }
</style>
