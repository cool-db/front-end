/**
* Created by dustar on 2017/7/11.
*/

<template>
  <transition name="fade">
    <img v-if="index===mouse" :src="hovered?active:del" @mouseenter="hovered=true" @mouseleave="hovered=false" @click="rmFiles(index)">
  </transition>
</template>

<script>
  import del from '@/assets/icons/drop_down_menu/delete.png'
  import active from '@/assets/icons/my_profile/red-delete.png'

  import { REMOVERELATEFILES } from 'MODULE/task'
  import { mapActions, mapState } from 'vuex'

  export default {
    data () {
      return {
        del,
        active,
        hovered: false
      }
    },
    computed: {
      ...mapState({
        'taskid': state => state.task.task.taskId
      })
    },
    props: ['mouse', 'index'],
    methods: {
      ...mapActions({
        rmf: REMOVERELATEFILES
      }),
      rmFiles (index) {
        this.$confirm('确认刪除该文件？')
          .then(_ => {
            console.log({taskId: this.taskid, index: index})
            this.rmf({taskId: this.taskid, index: index}).then().catch(err => { this.$message.error(err.message) })
          })
          .catch(_ => {
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: 0.5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    width: 0;
    margin-left: 0;
  }
</style>
