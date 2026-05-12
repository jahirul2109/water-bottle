import React from 'react'

function Bottle({bottle , handeleCard}) {
    const {img , id , name , price , stock , seller} = bottle ;

    // css 
    const style = {
        border : " 1px solid black",
        borderRadius : "10px",
        padding : '10px'
    }
  return (
    <div style={style}>
        <img  src= {bottle.img} style={{width : "100%"}} alt= {img} />
        <h3>Name : {name} </h3> 
        <h4> Price : ${price}</h4>
        <p>Vandor : {seller}</p>
        <p>Remaining only{stock} pice</p>
        <button onClick={()=> handeleCard(bottle)} >Buy Now</button>
    </div>
  )
}

export default Bottle