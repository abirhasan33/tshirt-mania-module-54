import React from 'react';
import './Tshirts.css'

const Tshirts = ({handeleAddToCart, tShirt}) => {
    const {name, price, picture,} = tShirt;
    return (
        <div className='t-tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={()=>handeleAddToCart(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirts;