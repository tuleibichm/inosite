import Vue from 'vue'
import Vuex from 'vuex'
import generalModule from './general'
import courseModule from './courses'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    generalModule,
    courseModule,
  }
})
