<template>
    <v-hover v-slot:default="{ hover }">
        <v-card class="mb-3" :elevation="hover ? 16 : 2">
            <v-card-title>{{ course.school }}</v-card-title>
            <v-card-subtitle><a target="_blank" :href="course.schoolUrl">Перейти на сайт школы</a></v-card-subtitle>
            <v-card-text>

            </v-card-text>
            <v-card-actions>

            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: "CourseCard",
        props: {
            course: {
                type: Object,
                require: true,
            },
        }
    }
</script>

<style scoped>

</style>