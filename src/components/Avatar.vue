<template>
  <img :src="src">
</template>

<script>
  export default {
    props: ['src']
  }
</script>


<style scoped>
  img {
    border-radius: 50%;
  }
</style>
