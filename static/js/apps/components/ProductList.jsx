import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const ProductList = ({products, onButtonActionClick}) => {
    <div className="product-list">
        {products.map(product => (
            <Product id={product.id} data={product} onButtonAction={() => onButtonActionClick(product.id)} />
        ))}
    </div>
}

ProductList.propTypes = {
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
  onButtonActionClick: PropTypes.func.isRequired
}

export default ProductList;
