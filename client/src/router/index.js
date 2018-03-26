import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Post from '@/components/Post'
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
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
