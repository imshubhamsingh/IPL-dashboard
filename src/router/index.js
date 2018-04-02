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
      component: SeasonLayout
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
});
