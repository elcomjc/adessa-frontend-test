import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Product = ({data, buttonMessage, onButtonAction}) => (

    <div className="product-container">
        <div className="image">
            <img src={data.imageURL} alt=""/>
        </div>
        <div className="name">{data.name}</div>
        <div className="price">{data.currency} {data.price}</div>
        <Button text={buttonMessage} onButtonClick={onButtonAction}></Button>
    </div>
)

Product.propTypes = {
    onButtonAction: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    buttonMessage: PropTypes.string.isRequired
}

export default Product;