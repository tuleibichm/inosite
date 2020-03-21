<template>
    <div id="app">
<!--        <app-header></app-header>-->
        <app-content></app-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppFooter from "./components/layout/AppFooter";
    import AppContent from "./components/layout/AppContent";
    // import AppHeader from "./components/layout/AppHeader";

    export default {
        name: "App",
        components: {
            // AppHeader,
            AppFooter,
            AppContent,
        },
    }
</script>

<style lang="scss">
    @import "assets/styles/main.css";
</style>