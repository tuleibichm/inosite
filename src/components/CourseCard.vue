<template>
    <v-card class="mb-3">
        <v-card-title>{{ course.school }}</v-card-title>
        <v-card-subtitle><a target="_blank" :href="course.schoolUrl">Перейти на сайт школы</a></v-card-subtitle>
        <v-card-actions>
            <v-btn
                    text
                    color="deep-purple accent-4"
            >
                Learn More
            </v-btn>
        </v-card-actions>
    </v-card>
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