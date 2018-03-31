import Vue from 'vue';
import Router from 'vue-router';
import HomeLayout from '@/components/Dashboard/Layout/HomeLayout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLayout',
      component: HomeLayout
    }
  ],
  mode: 'history'
});
