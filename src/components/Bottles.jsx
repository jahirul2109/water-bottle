import React, { Suspense, use, useEffect, useState } from 'react'
import Bottle from './Bottle';
import { getCart, saveCart } from '../localstorge/localstorge';

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
        saveCart(bottle.id)
    }
    // console.log(bottlesData)
    return (
        <>
            <Suspense fallback={<p> Data is Loading.........</p>}>
                <div>
                    <h1>All Bottles buying link here</h1>
                    <h3>Card : {card.length}</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }} >
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