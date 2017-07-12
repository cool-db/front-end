/**
* Created by dustar on 2017/7/12.
*/

<template>
    <div class="ViewFilter">
      <view-filter-header :icon="icon" :title="title"></view-filter-header>
      <view-filter-item v-for="item in items" :item="item" :key="item.name"></view-filter-item>
    </div>
</template>

<script>
  import ViewFilterHeader from './ViewFilterHeader.vue'
  import ViewFilterItem from './ViewFilterItem.vue'
  export default {
    components: {
      ViewFilterHeader,
      ViewFilterItem
    },
    props: [
      'icon',
      'title',
      'items'
    ],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ViewFilter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

</style>
