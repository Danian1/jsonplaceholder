import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import Users from '@/components/Users'

Vue.use(Resource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
