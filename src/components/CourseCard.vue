<template>
    <div class="courseCard">
        <div class="courseCard__title">{{ course.school }}</div>
        <div class="courseCard__subtitle"><a target="_blank" :href="course.schoolUrl">Перейти на сайт школы</a></div>
    </div>
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