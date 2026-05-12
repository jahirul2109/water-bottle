import React, { Suspense, use, useEffect, useState } from 'react'
import Bottle from './Bottle';
import { getCart, removeCart, saveCart } from '../localstorge/localstorge';
import Cart from './Cart';

function Bottles({ promisData }) {
    const bottlesData = use(promisData);
    const [card, setCart] = useState([]);
    const changeEeffect = useEffect(() => {
        const shortedIds = getCart();
        const shorted = [];
        for (const id of shortedIds) {
            const remaining = bottlesData.find(bottle => bottle.id === id);
            shorted.push(remaining);
        }
        setCart(shorted);
    }, [bottlesData]);

    const handeleCard = (bottle) => {
        const newCard = [...card, bottle];
        setCart(newCard);
        saveCart(bottle.id);
    }

    const removeHandle = (id) => {
        const remaning = card.filter(bottle => bottle.id !== id);
        setCart(remaning);
        removeCart(id);
    }
    return (
        <>
            <Suspense fallback={<p> Data is Loading.........</p>}>
                <div
                    style={{ width: "80%", margin: "auto auto" }}>
                    <h1>Total Stock Bottle : {bottlesData.length}</h1>
                    <h3>Card : {card.length}</h3>
                    <Cart
                        cart={card}
                        removeHandle={removeHandle}
                    ></Cart>
                    <div
                        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }} >
                        {bottlesData.map((bottle => <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handeleCard={handeleCard}
                        ></Bottle>))}
                    </div>
                </div>
            </Suspense>
        </>

    )
}

export default Bottles