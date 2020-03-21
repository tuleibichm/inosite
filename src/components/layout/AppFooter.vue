<template>
  <footer class="footer">
      <span>&copy; {{ newDate }}</span>
  </footer>
</template>

<script>
    export default {
        name: "AppFooter",
        data() {
            return {
                newDate: new Date().getFullYear(),
            }
        }
    }
</script>