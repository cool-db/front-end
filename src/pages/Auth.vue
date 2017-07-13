<template>
    <router-view></router-view>
</template>

<script>

  export default {
    created () {
      const token = localStorage.getItem('token')
      this.$router.replace(token ? '/home' : '/auth')
    }
  }
</script>

<style scoped>
</style>
