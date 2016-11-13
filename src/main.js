import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import dom from 'wind-dom';

import BackLink from './directives/back-link';
import Focus from './directives/focus';

import { routes } from './router';

import App from './views/index';
import Class from './views/class';
import store from './store';
import db from './db';

// FastClick
FastClick.attach(document.body);

// Directive
Vue.directive('back-link', BackLink);
Vue.directive('focus', Focus);

// Vue-lazyload
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'static/assets/lazy/error.png',
  loading: '',
  attempt: 1
});

// Vue-router
Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes,
});
router.beforeEach((to, from, next) => {

  const toPath = to.path;
  const fromPath = from.path;
  next();
})

const app = new Vue({
  router,
  store,
}).$mount('#app');



