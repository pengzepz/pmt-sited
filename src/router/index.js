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
import AboutUs from '@/views/about-us'
import ContactUs from '@/views/contact-us'
import PrivacyPolicy from '@/views/privacy-policy'
import CategoryIndex from '@/views/category-index'
import Shipping from '@/views/shipping'
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
          // name: 'first/:id',
          component: First
        }, {
          path: 'b-and-b/:id',
          name: 'first',
          component: First
        }, {
          path: 'garden/:id',
          name: 'second',
          component: Second
        }, {
          path: 'glass-craft-supplies/:id',
          name: 'third',
          component: Third
        }, {
          path: 'giftware/:id',
          name: 'fourth',
          component: Fourth
        }, {
          path: 'home-decor/:id',
          name: 'fifth',
          component: Fifth
        }, {
          path: 'toys-and-games/:id',
          name: 'sixth',
          component: Sixth
        }, {
          path: 'new-arrivals',
          name: 'seventh',
          component: Seventh
        },
        {
          path: 'about-us',
          name: 'aboutUs',
          component: AboutUs
        },
        {
          path: 'contact-us',
          name: 'contactUs',
          component: ContactUs
        },
        {
          path: 'privacy-policy',
          name: 'privacyPolicy',
          component: PrivacyPolicy
        },
        {
          path: 'category-index',
          name: 'categoryIndex',
          component: CategoryIndex
        },
        {
          path: 'shipping',
          name: 'shipping',
          component: Shipping
        }
      ]
    }
  ]
})
