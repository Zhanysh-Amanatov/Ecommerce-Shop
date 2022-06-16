import React from "react";
import Header from "../header/Header";
import "./Cart.scss";

const Cart = () => {
  return (
    <section className="cart">
      <Header />
      <header>
        <h2>My Cart</h2>
      </header>
      <div>
        <h3>Total: $ </h3>
      </div>
    </section>
  );
};

export default Cart;
