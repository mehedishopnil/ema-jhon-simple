import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: {price}</p>

                <div className='product-ratings'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} stars</p>
                </div>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;