/**
* Created by dustar on 2017/7/11.
*/

<template>
  <transition name="fade">
    <img v-if="show" :src="del">
  </transition>
</template>

<script>
  import del from '@/assets/icons/drop_down_menu/delete.png'
  export default {
    name: 'ModalAttachDelete',
    data () {
      return {
        del
      }
    },
    props: ['show']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    height: 20px;
    width: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
</style>
