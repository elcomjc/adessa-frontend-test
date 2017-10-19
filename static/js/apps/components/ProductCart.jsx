import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductCart = ({cart, onButtonActionClick}) => (
    <div>
        <div className="total-amount">
            TOTAL: {cart.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </div>
        <div className="product-cart">
            {cart.products.map(product => (
                <Product key={product.id} data={product} buttonMessage="Remove from cart" onButtonAction={() => onButtonActionClick(product.id)} />
            ))}
        </div>
    </div>
)

ProductCart.propTypes = {
    cart: PropTypes.shape({
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                imageURL: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                currency: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
        totalAmount: PropTypes.number.isRequired
    }),
  onButtonActionClick: PropTypes.func.isRequired
}

export default ProductCart;
