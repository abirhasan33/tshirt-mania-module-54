import React from "react";
import './Cart.css'

const Cart = ({ cart, handeleRemoveCart }) => {
  // Conditional rendering options
  // 1. Element variable
  // 2. ternary operator condition ? true : false
  // 3. && Operator (shorthand)
  // 4. ||
  let command;
  if (cart.length === 0) {
    command = <p>Plased Add some items</p>;
  } else if (cart.length === 1) {
    command = <div>
        <h4> Plrce Add more mone</h4>
        <p>Okita onek</p>
    </div>;
  } else {
    command = <p>Thiank for adding itms</p>;
  }
  return (
    <div>
      <h2>Items Seletor: {cart.length}</h2>

      {cart.map((TShirt) => (
        <p>
          {TShirt.name}{" "}
          <button onClick={() => handeleRemoveCart(TShirt)}>X</button>
        </p>
      ))}

      {cart.length === 0 || <p className="orange">YAY are you Buying</p>}
      {cart.length===3 && <div  className="orange">
          <h3>Trigonal</h3>
          <p>Tin Jon ki gift dibi</p>
          </div>}
      {command}
      {cart.length !==4 ? <p>Keep adding</p> : <button>Remove ALL</button>}
      {cart.length === 4 && <button className="orange">Remove ALL</button>}
    </div>
  );
};

export default Cart;
