import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import HelloWorld from '@/components/helloWorld'
import vueMobile from '@/components/vueMobile'
import Login from '@/components/login'
import Code from '@/components/code'
import ReaderDome from '@/components/readerDome'
import SinglePage1 from '@/components/singlePage1'
import SinglePage2 from '@/components/singlePage2'
import SinglePage3 from '@/components/singlePage3'
import SinglePage4 from '@/components/singlePage4'
import SinglePage5 from '@/components/singlePage5'
import Bubble from '@/components/bubble'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/code',
          name: 'code',
          component: Code
        }
      ]
    },
    {
      path: '/vueMobile',
      name: 'vueMobile',
      component: vueMobile
      // children:[{
      //   path: '/readerDome',
      //   name: 'readerDome',
      //   component: ReaderDome
      // }]
    },
    {
      path: '/readerDome',
      name: 'readerDome',
      component: ReaderDome
    },
    {
      path: '/singlePage1',
      name: 'singlePage1',
      component: SinglePage1
    },
    {
      path: '/singlePage2',
      name: 'singlePage2',
      component: SinglePage2
    },
    {
      path: '/singlePage3',
      name: 'singlePage3',
      component: SinglePage3
    },
    {
      path: '/singlePage4',
      name: 'singlePage4',
      component: SinglePage4
    },
    {
      path: '/singlePage5',
      name: 'singlePage5',
      component: SinglePage5
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: Bubble
    },
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
