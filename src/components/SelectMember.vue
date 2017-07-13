/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="select-member">
      <part-select :users="users" :owner="owner" @changeOwner="onChange">
        <img :src="isHovered?activeIcon:normalIcon" @mouseenter="isHovered=true" @mouseleave="isHovered=false">
      </part-select>
    </div>
</template>

<script>
  import activeIcon from '@/assets/icons/new_item/part.png'
  import normalIcon from '@/assets/icons/new_item/parta.png'
  import PartSelect from './Modal/TaskBoxBasic/PartSelect.vue'
  export default {
    components: {PartSelect},
    data () {
      return {
        activeIcon,
        normalIcon,
        isHovered: false
      }
    },
    props: ['users', 'owner'],
    methods: {
      onChange () {
        this.$emit('onChange')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width:25px;
  height:25px;
}
</style>
