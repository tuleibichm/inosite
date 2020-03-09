<template>
    <v-container>
        <h1 class="text-center mb-10 mt-8 display-1">Курсы Английского языка в Одессе</h1>
        <v-flex >
            <CourseCard v-for="course in courseList" :key="course.id" :course="course"></CourseCard>
        </v-flex>
    </v-container>
</template>

<script>
    import CourseCard from "../components/CourseCard";
    import { mapGetters } from 'vuex';

    export default {
        name: "CourseList",
        components: {
            CourseCard,
        },
        computed: {
            ...mapGetters({
                courseList: 'getCourses',
            })
        }
    }
</script>