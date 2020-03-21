<template>
    <div class="courseList">
        <h1 class="pageTitle">Курсы Английского языка в Одессе</h1>
        <ul>
            <CourseCard v-for="course in courseList" :key="course.id" :course="course"></CourseCard>
        </ul>
    </div>
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