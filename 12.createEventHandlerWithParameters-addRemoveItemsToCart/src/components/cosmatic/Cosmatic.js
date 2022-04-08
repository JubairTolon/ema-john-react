import React from 'react';
import { addToDb, removeFromDb } from '../utlity/fakeDb';
import './cosmatic.css'

const Cosmatic = (props) => {
    const {name, price, id} = props.cosmatic;

    const addToCart = (id) => {
        addToDb(id);//calling add to local storage component

    }

    // const addToCartWithParam = () => addToCart(id);
    //or shortcut () => addToCart(id) ,we can keep it to OnClick{} 

    //remove item
    const removeFromCart = id => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>ID: {id}</small></p>

            {/* if I want to call a function into an event handler we have to wrape it with an empty array function */}
            <button onClick={() => addToCart(id)}>Add to cart</button>

            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmatic;