import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const baseUrl = 'http://localhost:3000';

export default {
  getHomeResources: (params) => {
    return Vue.resource(baseUrl + '/vue/vuetb').get(params)
  },
  getProducts: (params) => {
    return Vue.resource(baseUrl + '/vue/product').get(params)
  },

}
