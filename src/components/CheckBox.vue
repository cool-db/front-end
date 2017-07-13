<template>
    <img :src="imgUrl" alt="..." @click="handleClick">
</template>

<script>
  import state from '@/assets/icons/index/state.png'
  import stateComplete from '@/assets/icons/index/state-complete.png'

  import { mapActions } from 'vuex'
  import { CHANGETASKSTATE } from 'MODULE/process'

  export default {
    props: {
      checked: Boolean,
      id: Number,
      pIndex: Number,
      tIndex: Number
    },
    computed: {
      imgUrl () {
        return this.checked ? stateComplete : state
      }
    },
    methods: {
      handleClick () {
        this.changeTaskState({
          taskId: this.id,
          userId: Number(localStorage.token),
          checked: !this.checked,
          tIndex: this.tIndex,
          pIndex: this.pIndex
        }).catch(err => this.$message.error(err.message))
      },
      ...mapActions({
        changeTaskState: CHANGETASKSTATE
      })
    }
  }
</script>
