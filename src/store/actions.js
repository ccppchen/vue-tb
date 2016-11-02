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

    })
  })

}

export const getProducts = ({ commit }) => {
  return new Promise((resolve, reject) => {

    api.getProducts().then(response => {
      // suucess calback
      commit(types.RECEIVE_PRODUCTS, { response })
      resolve()

    }, (response) => {
      // fail callback
    })
  })
}
