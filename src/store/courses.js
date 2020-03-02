export default {
    state: {
        courses: [
            {
                courseId: 'daadadakrjmn',
                title: 'Курс английского языка для начинающих',
                description: 'Some text...',
                school: 'Greenforest',
                schoolUrl: 'https://greenforest.com.ua/',
                iconUrl: 'green-icon.png',
            },
            {
                courseId: 'daadadd23dasakrjmn',
                title: 'Курс английского языка для продвинутых',
                description: 'Some text...',
                school: 'Oratorica',
                schoolUrl: 'https://www.oratorica.ua/',
                iconUrl: 'oratorica-icon.png',
            },
            {
                courseId: 'daadadd23dasakrjmn',
                title: 'Курс английского языка для продвинутых',
                description: 'Some text...',
                school: 'Numberone',
                schoolUrl: 'https://numberone.od.ua/',
                iconUrl: 'numberone-icon.png',
            }
        ]
    },
    mutations: {
        SET_COURSES(state, payload){
            state.courses = payload;
        }
    },
    getters: {
        getCourses: (state) => state.courses,
    }
}