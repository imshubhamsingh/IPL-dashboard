import Vue from 'vue';
import Router from 'vue-router';

import HomeLayout from '@/components/Dashboard/Layout/HomeLayout';
import SeasonLayout from '@/components/Dashboard/Layout/SeasonLayout';
import TeamsView from '@/components/Dashboard/Views/TeamsView';
import BowlersView from '@/components/Dashboard/Views/BowlersView';
import BatsmenView from '@/components/Dashboard/Views/BatsmenView';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLayout',
      component: HomeLayout,
      children: [
        { path: '', component: TeamsView },
        { path: '/bowlers', component: BowlersView },
        { path: '/batsmen', component: BatsmenView }
      ]
    },
    {
      path: '/year/:year',
      name: 'SeasonLayout',
      component: SeasonLayout,
      beforeEnter: (to, from, next) => {
        if (['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'].indexOf(to.params.year) >= 0) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
});
