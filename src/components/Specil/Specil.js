import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Specil = () => {
    const [house, setHouse]  = useContext(RingContext)
    return (
        <div>
            <h5>Specil</h5>
            <p><small>Gift: {house}</small></p>
            <button onClick={()=> setHouse(house + 1)}>Add to catt</button>
        </div>
    );
};

export default Specil;