import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.xhr = { withCredentials: true };

const baseUrl = 'http://52.207.228.30';

export default {
  getHomeResources: (params) => {
    return Vue.resource(baseUrl + '/vue/vuetb').get(params)
  },
  getProducts: (params) => {
    return Vue.resource(baseUrl + '/vue/product').get(params)
  },
  login: (params) => {
    return Vue.http.post(baseUrl + '/login', params)
  },
  reg: (params) => {
    return Vue.http.post(baseUrl + '/reg', params)
  },
  getSearch: (params) => {
    return Vue.resource(baseUrl + '/vue/sug').get(params)
  },
  getSearchResult: (params) => {
    return Vue.resource('https://s.m.taobao.com/search').get(params)
  },

}
