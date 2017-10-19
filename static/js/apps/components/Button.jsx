import React from 'react';
import PropTypes from 'prop-types'

const Button = ({onButtonClick, text}) => {
    <button
        className="btn btn-falabella">
        onClick={() => onButtonClick()}
    </button>
}

Button.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button;