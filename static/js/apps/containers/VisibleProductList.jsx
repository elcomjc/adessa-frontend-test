import { connect } from 'react-redux';
import { addToCart } from '../actions';
import ProductList from '../components/ProductList'; 

const getProducts = (products) => {
    return products;
}

const mapStateToProps = state => {
  return {
    products: getProducts(state.products)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonActionClick: product => {
      dispatch(addToCart(product))
    }
  }
}

const VisibleProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)

export default VisibleProductList;