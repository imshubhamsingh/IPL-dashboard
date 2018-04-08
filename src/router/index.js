import Vue from 'vue';
import Router from 'vue-router';

import HomeLayout from '@/components/Dashboard/Layout/HomeLayout';
import DetailsLayout from '@/components/Dashboard/Layout/DetailsLayout';
import TeamsView from '@/components/Dashboard/Views/TeamsView';

const BowlersView = (resolve) => {
  require.ensure(['@/components/Dashboard/Views/BowlersView'], () => {
    // eslint-disable-next-line global-require
    resolve(require('@/components/Dashboard/Views/BowlersView'));
  });
};

const BatsmenView = (resolve) => {
  require.ensure(['@/components/Dashboard/Views/BatsmenView'], () => {
    // eslint-disable-next-line global-require
    resolve(require('@/components/Dashboard/Views/BatsmenView'));
  });
};

const SeasonLayout = (resolve) => {
  require.ensure(['@/components/Dashboard/Layout/SeasonLayout'], () => {
    // eslint-disable-next-line global-require
    resolve(require('@/components/Dashboard/Layout/SeasonLayout'));
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLayout',
      component: HomeLayout,
      children: [
        { path: '',
          component: DetailsLayout,
          children: [
            { path: '', component: TeamsView },
            { path: '/bowlers', component: BowlersView },
            { path: '/batsmen', component: BatsmenView },
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
        { path: '*', redirect: '/' }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
});
