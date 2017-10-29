import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '@/components/First'
import First01 from '@/components/First01'
import First02 from '@/components/First02'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      // beforeEnter:(to,form,next) => {
      //   console.log(to);
      //   console.log(form);
      //   next();
      //   // next(false);
      //   // next({
      //   //   path:'/'
      //   // });
      // }
    },
    {
      path: '/Hi1',
      component: Hi1,
      alias: '/ngys'
    },
    // {
    //   path: '/',
    //   name: 'Hello',
    //   components: {
    //     default: Hello,
    //     left: Hi1,
    //     right: Hi2
    //   },
      
    // },
    {
      path: '/ngy',
      name: 'Hello',
      components: {
        default: Hello,
        left: Hi2,
        right: Hi1
      },
      
    },
    {
      path: '/First',
      component: First,
      children:[
        { path: '/', name: 'First', component: First},
        { path: 'first01', name: 'First01', component: First01},
        { path: 'first02', name: 'First02', component: First02},
      ]
    },
    {
      path: '*',
      component: Error
    }
  ]
})
