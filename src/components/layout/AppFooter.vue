<template>
  <v-footer class="justify-center">
      <span>&copy; {{ newDate }}</span></v-footer>
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