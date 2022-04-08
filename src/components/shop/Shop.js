import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {
    //step-1
    //data load
    const [products,setProducts] = useState([]);
    //step-6
    //state declire for set data to "order summary" and send arry to Selected item and count clicked item.
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    //step-9 part5 get local storage item to my ui.
    /* 
    1.stored cart gulo k nibe
    2.stored cart theke id gulo nite hobe loop kore
    3.lopp kore id onojayi quantity k nibe
    4.pawa product gulo new array te rakhbe
    */
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        //show an boject tai for in use korbo r array hole "for of"
        for(const id in storedCart){
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    } ,[products])//defendency dile ekhon product change hole abar nije nije call dibe useEffect k.

    //step-5
    // set handleAddToCart component and send handleAddToCart as props to Add to Cart button and set onClick with an anonimus function
    // ***react data upore pathate pare na tai event handler ta k product theke shop e niye aschi karon ahop product er upore***

    const handleAddToCart = (selectedProduct) => {
        //console.log('clicked');
        //product array copy to newCart
        //step-9 part7
        /* 
        1.const exists = cart.find(product => product.id === selectedProduct.id);
        2.let newCart = [];
        3.if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        4.else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        */
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selectedProduct]; ekhan theke step9 e bud diye if er vetor dhukiye felte hobe
        setCart(newCart);
        
        //step-9 part1
        // cart add to local storage
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    //step-3
                    // loop through and set data to Product component
                    
                    products.map(product => <Product 
                        key={product.id} product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* step-7
                create cart component. ata alada bhabe bananor karon hocche cart onk jaygay use kora lagte pare. */}
                <Cart
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;