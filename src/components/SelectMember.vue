/**
* Created by dustar on 2017/7/11.
*/

<template>
    <div class="select-member">
      <owner-select :users="users" :owner="owner" @changeOwner="onChange">
        <img :src="isHovered?activeIcon:normalIcon" @mouseenter="isHovered=true" @mouseleave="isHovered=false">
      </owner-select>
    </div>
</template>

<script>
  import activeIcon from '@/assets/icons/new_item/add-participator.png'
  import normalIcon from '@/assets/icons/new_item/add-subtask.png'
  import OwnerSelect from './Modal/TaskBoxBasic/OwnerSelect.vue'
  export default {
    components: {OwnerSelect},
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
