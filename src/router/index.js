import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index'
import First from '@/views/bath-and-body'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'index',
      component: Index,
      children: [
        {
          path: '',
          component: First,
          children: [
            {
              path: '',
              component: First
            }
          ]
        }
      ]
    }
  ]
})
