const getCart = ()=> {
    const cart = localStorage.getItem('cart');
    if (cart) {
        return JSON.parse(cart)
    }
    return [];
}

const saveCart = (bottleID)=> {
    const cart = getCart();
    console.log(cart)
    cart.push(bottleID);
    setLsCart(cart);
};

const removeCart = (id)=> {
    const shoretdIds = getCart();
    const shored = [];
    const remaning = shoretdIds.filter(bottle => bottle !== id);
    setLsCart(remaning)
    
}

const setLsCart = (cart) => {
    const cartStinified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStinified)
}

export {getCart, setLsCart  , saveCart , removeCart};