import React from 'react';
import './Cart.css';

function cart(props) {
    return (
            <div className='cart'>
                <span>
                    <i class="fa-solid fa-cart-plus"></i>
                </span>
                <span>0</span>
            </div>
    );
}

export default cart;