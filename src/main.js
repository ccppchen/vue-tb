import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
// import vuedropload from 'vue-dropload'

import App from './app/index'
import Class from './app/class'
import BackLink from './directives/back-link'

FastClick.attach(document.body)
Vue.directive('back-link', BackLink)

Vue.use(VueRouter)

Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'static/assets/lazy/error.png',
  loading: 'static/assets/lazy/lazy-default-img.png',
  attempt: 1
})

// Vue.use(vuedropload)

// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/class', component: Class },
];
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数，不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes, // （缩写）相当于 routes: routes,
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
}).$mount('#app')
// 现在，应用已经启动了！


