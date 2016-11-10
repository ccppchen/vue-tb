// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import App from './views/index';
import Class from './views/class';
import Search from './views/search';
import Login from './views/login';
import Reg from './views/reg';
import SearchResult from './views/searchResult';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
export const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  { path: '/class', component: Class },
  { path: '/search', component: Search },
  { path: '/reg', component: Reg },
  { path: '/searchResult', component: SearchResult },
];
