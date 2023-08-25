import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product}) => {
    const {img,name,quantity,id,price} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h5 className='product-title'>{name}</h5>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>
                <FontAwesomeIcon className='dlt-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;