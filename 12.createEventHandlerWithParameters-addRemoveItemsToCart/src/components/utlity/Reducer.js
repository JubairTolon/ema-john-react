
//array reducer-example
const numbers = [12,34,465,7,784,45];
const sumReducer = (previous, current) => {
    return previous + current;
}
const total = numbers.reduce(sumReducer, 0);


//object reducer-example
const items = [
    {id: 3, name: 'aaaa'},
    {id: 1, name: 'aaaa'},
    {id: 2, name: 'aaaa'},
    {id: 4, name: 'aaaa'}
]
const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {getTotalPrice as getTotal}//export with changing the name