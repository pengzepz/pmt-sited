import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views'
import First from '@/views/bath-and-body'
import Second from '@/views/garden'
import Third from '@/views/glass-craft-supplies'
import Fourth from '@/views/giftware'
import Fifth from '@/views/home-decor'
import Sixth from '@/views/toys-and-games'
import Seventh from '@/views/new-arrivals'
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
          name: 'first',
          component: First
        }, {
          path: 'garden',
          name: 'second',
          component: Second
        }, {
          path: 'glass-craft-supplies',
          name: 'third',
          component: Third
        }, {
          path: 'giftware',
          name: 'fourth',
          component: Fourth
        }, {
          path: 'home-decor',
          name: 'fifth',
          component: Fifth
        }, {
          path: 'toys-and-games',
          name: 'sixth',
          component: Sixth
        }, {
          path: 'new-arrivals',
          name: 'seventh',
          component: Seventh
        }

      ]
    }
  ]
})
