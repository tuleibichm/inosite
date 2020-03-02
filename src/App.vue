<template>
    <v-app id="app">
        <app-content></app-content>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppFooter from "./components/layout/AppFooter";
    import AppContent from "./components/layout/AppContent";

    export default {
        name: "App",
        components: {
            AppFooter,
            AppContent,
        },
    }
</script>
