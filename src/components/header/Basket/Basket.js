import React from "react";
import "./Basket.scss";
import { RiShoppingBasketLine } from "react-icons/ri";

const Basket = () => {
  return (
    <div className="basket">
      <RiShoppingBasketLine />
      <p>Cart</p>
      <p className="counter">0</p>
    </div>
  );
};

export default Basket;
