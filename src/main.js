import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';

import BackLink from './directives/back-link';

import { routes } from './router';

import App from './views/index';
import Class from './views/class';
import store from './store';

// FastClick
FastClick.attach(document.body);

// Directive
Vue.directive('back-link', BackLink);

// Vue-lazyload
Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'static/assets/lazy/error.png',
  loading: 'static/assets/lazy/lazy-default-img.png',
  attempt: 1
});

// Vue-router
Vue.use(VueRouter);
const router = new VueRouter({
  // mode: 'history',
  routes,
});

const app = new Vue({
  router,
  store,
}).$mount('#app');



