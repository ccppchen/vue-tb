import api from '../api'
import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

export const checkout = ({ commit, state }, products) => {
  const savedCartItems = [...state.cart.added]
  commit(types.CHECKOUT_REQUEST)
  shop.buyProducts(
    products,
    () => commit(types.CHECKOUT_SUCCESS),
    () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  )
}

export const getAllProducts = ({ commit }) => {
  shop.getProducts(products => {
    commit(types.RECEIVE_PRODUCTS, { products })
  })
}

export const getHomeResources = ({ commit }) => {
  api.getHomeResources(res => {
    commit(types.HOME_RESOURCES, { res })
  })
}
