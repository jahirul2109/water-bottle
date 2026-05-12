const Cart = ({ cart, removeHandle }) => {
    return (
        <div style={{ display: "flex" }}>
            {cart.map(bottle => <div key={bottle.id} > <img style={{ width: "120px" }} src={bottle.img} alt="" />
             <button onClick={() => removeHandle(bottle.id)}>X</button> 
             </div>)}
        </div>
    )
}

export default Cart;
