import React from 'react';
import Brother from '../Brother/Brother';
import MySeif from '../MySeif/MySeif';
import Sister from '../Sister/Sister';

const Father = ({house, ornaments}) => {
    return (
        <div>
            <h2>Father</h2>
            <p>House: {house}</p>
            <div style={{display: 'flex'}}>
            <MySeif house={house} ornaments={ornaments}></MySeif>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;