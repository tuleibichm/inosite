<template>
  <main class="content">
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
    export default {
        name: "AppContent"
    }
</script>

<style scoped>
  .content{
    display: flex;
    flex-grow: 1;
  }
</style>