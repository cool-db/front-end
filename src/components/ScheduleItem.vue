<template>
    <div class="scheduleItem">
        <div class="left">
            <div class="line1">
                <div class="timeSlot">{{timeSlot}}</div>
                <div class="alarm" v-if="alarmDisplay">
                    {{alarm}}
                </div>
            </div>
            <div class="scheduleContent">{{scheduleContent}}</div>
            <div class="line3">
                <img class="plane" :src="plane"/>
                <div class="address">{{address}}</div>
            </div>
        </div>
        <div class="right">
            <div class="rline1">
                <img class="participator" :src="participator"/>
                <div class="participators">参与者</div>
            </div>
            <div class="rline2">
                <div class="avatar"></div>
                <div class="avatar"></div>
                <div class="avatar"></div>
                <img class="add" :src="add"/>
            </div>
        </div>
    </div>
</template>

<script>
  import add from '@/assets/icons/index/add-new-item.png'
  import plane from '@/assets/icons/index/location.png'
  import participator from '@/assets/icons/index/participator.png'
  import repeat from '@/assets/icons/index/repeat.png'

  export default {
    props: {
      timeSlot: String,
      alarmDisplay: Boolean,
      alarm: String,
      scheduleContent: String,
      address: String
    },
    data () {
      return {
        add,
        plane,
        participator,
        repeat
      }
    }
  }
</script>

<style scoped="">
    .scheduleItem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 995px;
        padding: 10px;
        margin-left: 13px;
        /*margin-right:25px;*/
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #A1BDBF;
    }

    .left {
        display: flex;
        flex-direction: column;
    }

    .right {
        display: flex;
        flex-direction: column;
    }

    .line1 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .timeSlot {
        font-size: 14px;
        color: #888888;
    }

    .alarm {
        background-color: #3E5568;
        border-radius: 50px;
        height: 19px;
        font-size: 12px;
        color: #F8F8F8;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        margin-left: 10px;
    }

    .scheduleContent {
        font-size: 18px;
        color: #565656;
        margin-top: 5px;
    }

    .line3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
    }

    .plane {
        height: 15px;
        width: 15px;
    }

    .address {
        font-size: 14px;
        color: #979797;
        margin-left: 5px;
    }

    .rline1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 5px;
    }

    .participator {
        height: 16px;
        width: 16px;
    }

    .participators {
        font-size: 14px;
        color: #565656;
        margin-left: 5px;

    }

    .rline2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
    }

    .avatar {
        height: 25px;
        width: 25px;
        background: #D8D8D8;
        border: 0 solid #979797;
        border-radius: 12.5px;
        margin-left: 5px;
    }

    .add {
        height: 28px;
        width: 28px;
        margin-left: 5px;
    }
</style>
