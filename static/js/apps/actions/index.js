export const addToCart = product => {
  return {
    type: 'ADD_TO_CART',
    product
  }
}

export const initProducts = products => {
    return {
        type: 'INIT_PRODUCTS',
        products
    }
} 

export const removeFromCart = productId => {
    return {
        type: 'REMOVE_FROM_CART',
        productId
    }
}