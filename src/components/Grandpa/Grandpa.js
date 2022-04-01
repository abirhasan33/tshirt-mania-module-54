import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext('ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornaments = "Diamond Ring";

  const handelBuyCount = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value={[house, setHouse] }>
      <div className="grandpa">
        <h3>Grandpa</h3>
        <h4>
          House: {house}
          <button onClick={handelBuyCount}>Buy A House</button>
        </h4>
        <div style={{ display: "flex" }}>
          <Father house={house} ornaments={ornaments}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
