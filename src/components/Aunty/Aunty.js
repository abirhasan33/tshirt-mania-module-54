import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse]  = useContext(RingContext);
    const addHandele = () =>{
        const neAdHandel = house + 1;
        setHouse(neAdHandel)
    }
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: {house}</p>
            <button onClick={addHandele}>ADD to catr</button>
        </div>
    );
};

export default Aunty;