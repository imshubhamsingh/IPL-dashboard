import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '@/components/Dashboard/Layout/HomeLayout';
import TeamView from '@/components/Dashboard/Views/TeamView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLayout',
      component: HomeLayout,
      children: [
        { path: '/', component: TeamView }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
});
