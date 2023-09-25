import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {_id, img, name, price, shipping} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4>{name}</h4>
                <h5>Price: <span className='price-color'>{price}</span></h5>
                <h6>Shipping Charge : <span className='price-color'>{shipping}</span></h6>
            </div>

            <div>
                <button onClick={() =>handleRemoveFromCart(_id)}  className='delete-icon'>
                <FontAwesomeIcon className='icon' icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;