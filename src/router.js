// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import App from './views/index';
import Class from './views/class';

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
export const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/class', component: Class },
];
