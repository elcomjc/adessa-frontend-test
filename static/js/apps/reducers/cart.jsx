const cart = (state = {products:[], totalAmount: 0}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          return {products: [
                    ...state.products,
                    {
                        id: action.product.id,
                        imageURL: action.product.imageURL,
                        name: action.product.name,
                        type: action.product.type,
                        price: action.product.price,
                        currency: action.product.currency
                    }
                ],
                totalAmount: state.totalAmount + action.product.price
            }
        case 'REMOVE_FROM_CART':
            return {
                products: state.products.filter(product => product.id !== action.productId),
                totalAmount: state.totalAmount - state.products.find(product => product.id === action.productId).price
            }
        default: 
            return state
      }
    }
    
    export default cart;