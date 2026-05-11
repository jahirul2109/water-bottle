import React, { Suspense, use, useState } from 'react'
import Bottle from './Bottle';
import { getCart, saveCart } from '../localstorge/localstorge';

function Bottles({ promisData }) {
    const [card , setCart] = useState([]);
    const handeleCard = (bottle)=> {
        const newCard = [...card , bottle];
        setCart(newCard);
        saveCart(bottle.id)
    }
    const bottlesData = use(promisData);
    // console.log(bottlesData)
    return (
        <>
            <Suspense fallback={<p> Data is Loading.........</p>}>
                <div>
                    <h1>All Bottles buying link here</h1>
                    <h3>Card : {getCart().length}</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }} >
                        {bottlesData.map((bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handeleCard = {handeleCard}
                        ></Bottle>))}
                    </div>
                </div>
            </Suspense>
        </>

    )
}

export default Bottles