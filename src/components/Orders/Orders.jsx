import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
const Orders = () => {
    const savedCaart = useLoaderData();
    const [cart,setCart] = useState(savedCaart);



    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    savedCaart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                   ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={savedCaart}></Cart>
            </div>
        </div>
    );
};

export default Orders;