import React from "react";
import image from "../src/images/cart.png";
import "./Cart.css";

export const Cart = ({ prod }) => {
  return (
    <div className="cart">
    
      <img src={image} className="carix"></img>
      <h1>Carrito</h1>
      <p className="sum">
          Total   {" "}        {prod[0].precio * prod[0].cantidad +
          prod[1].precio * prod[1].cantidad +
          prod[2].precio * prod[2].cantidad +
          prod[3].precio * prod[3].cantidad}
      </p>
    </div>
  );
};

export default Cart;
