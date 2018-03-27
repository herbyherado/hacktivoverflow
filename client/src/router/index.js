import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Post from '@/components/Post'
import MyQuestions from '@/components/MyQuestions'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/myquestions',
      name: 'MyQuestions',
      component: MyQuestions,
      beforeEnter: (to, from, next) => {
        const status = localStorage.token
        if (status === undefined) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
