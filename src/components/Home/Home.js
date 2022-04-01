import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useTshirts from "../hooks/useTshirts";
import Tshirts from "../Tshirts/Tshirts";
import "./Home.css";

const Home = () => {
  const [tShirt, setTShirt] = useTshirts();
  const [cart, setCart] = useState([]);

  const handeleAddToCart = (setectditms) => {
      const exist = cart.find(tShirt => tShirt._id === setectditms._id);
      if(!exist){
          const newCart = [...cart, setectditms];
          setCart(newCart);
      }else{
          alert('Items ollredi add Ache')
      }
  }

  const handeleRemoveCart = (selectedItems) =>{
      const rest = cart.filter(tShirt => tShirt._id !== selectedItems._id);
      setCart(rest);
  }

  return (
    <div className="home-container">
      <div className="tishirt-container">
        {tShirt.map((tShirt) => (
          <Tshirts key={tShirt.id} tShirt={tShirt} handeleAddToCart={handeleAddToCart}></Tshirts>
        ))}
      </div>
      <div className="cart-container">
        <Cart handeleRemoveCart={handeleRemoveCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
