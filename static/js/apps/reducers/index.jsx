import { combineReducers } from 'redux'
import products from './products'
import cart from './cart'

const productsApp = combineReducers({
  products,
  cart
})

export default productsApp;