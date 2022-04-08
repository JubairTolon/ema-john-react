const addToDb = id => {
    let shoppingCart; 

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-Cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);//take the item from local storage and convert to js and keep it to shoppingCart
    }
    else{
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];//get id from shoppingCart step-1  

    /* 
    *******for understand*********
    collect the current quantity of a specific item at local storage
    const quantity = localStorage.getItem(id);
    ******************
    */

    //check is it already exaist in shoppingCart step-2??
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;//set item for first time step-3
    }

    //after completing the all the conditions we have to convert the shoppingCart to string and then set to the local storage with the name "shopping-cart"
    localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));
    
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-Cart');//its will give me a string
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)//if condition is not able to check something from a string. for that its need convert to js object
        if (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));
        }
    }
}
//if needed someone can call from cosmatic
const deleteShoppingCart = ()  => {
    localStorage.removeItem('shopping-Cart');
}
export {
    addToDb,
    removeFromDb,
    deleteShoppingCart
    
};