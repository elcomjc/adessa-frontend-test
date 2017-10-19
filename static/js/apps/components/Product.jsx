import React from 'react';
import Button from './Button';

const Product = ({data, onButtonAction}) => {

    <div className="product-container">
        <div className="image">{data.imageUrl}</div>
        <div className="name">{data.name}</div>
        <div className="price">{data.currency} {data.price}</div>
        <Button text={'Add to cart'} onButtonClick={onButtonAction}></Button>
    </div>
}

Product.propTypes = {
    onButtonAction: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired
}

export default Product;