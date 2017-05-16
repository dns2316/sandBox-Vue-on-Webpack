import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TestRouter from '@/components/TestRouter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/abc',
      name: 'TestRouter',
      component: TestRouter
    }
  ]
})
