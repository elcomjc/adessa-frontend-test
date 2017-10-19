import { connect } from 'react-redux';
import { removeFromCart } from '../actions';
import ProductCart from '../components/ProductCart'; 

const getCart = (cart) => {
    return cart;
}

const mapStateToProps = state => {
  return {
    cart: getCart(state.cart)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonActionClick: productId => {
      dispatch(removeFromCart(productId))
    }
  }
}

const VisibleCartList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCart)

export default VisibleCartList;