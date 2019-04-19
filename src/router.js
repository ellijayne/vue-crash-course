import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'skills',
            component: Skills
        },
        {
            path: '/about',
            name: About,
            component: About
        }
    ]
})

// path for about before was '/about/:person' if you want to look at the url params part of tutorial 