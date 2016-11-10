import api from '../api'
import * as types from './mutation-types'

// export const checkout = ({ commit, state }, products) => {
//   const savedCartItems = [...state.cart.added]
//   commit(types.CHECKOUT_REQUEST)
//   api.buyProducts(
//     products,
//     () => commit(types.CHECKOUT_SUCCESS),
//     () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
//   )
// }
export const getAllClass = ({ commit }) => {

  return new Promise((resolve, reject) => {

    api.getHomeResources().then(response => {
      commit(types.RECEIVE_HOMES, { response })
      resolve()
    }, (response) => {
      console.log('fail');
    })
  })

}

export const getProducts = ({ commit, state }, parms) => {
  return new Promise((resolve, reject) => {

    api.getProducts(parms).then(response => {
      // suucess calback
      commit(types.RECEIVE_PRODUCTS, { response })
      commit(types.CURRENT_PRODUCTS, { response })
      resolve()
    }, (response) => {
      // fail callback
      console.log('fail');
    })
    // api.getProducts({
    //   limit: 10,
    //   page: 1
    // }).then(response => {
    //   // suucess calback
    //   commit(types.RECEIVE_PRODUCTS, { response })
    //   resolve()
    // }, (response) => {
    //   // fail callback
    //   console.log('fail');
    // })
  })
}
