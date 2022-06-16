import React from "react";
import Header from "../header/Header";
import "./Checkout.scss";
const Checkout = () => {
  return (
    <>
      <Header />
      <h3>PROCEED CHECKOUT</h3>
      <div className="section1">
        <div className="column">
          <h4>PROFILE INFORMATION</h4>
          <input type="text" placeholder="Name" className="formInput" />
          <input type="text" placeholder="Last Name" className="formInput" />
          <input type="email" placeholder="Email" className="formInput" />
          <input type="tel" placeholder="Phone number" className="formInput" />
        </div>
        <div className="column">
          <h4>SHIPPING INFORMATION</h4>
          <input
            type="text"
            placeholder="Address"
            className="formInputAddress"
          />
          <input
            type="text"
            placeholder="Comments"
            className="formInputTextArea"
          />
        </div>
      </div>
      <div className="section2">
        <div className="column">
          <h4>PAYMENT METHODS</h4>
          <div>
            <p>Cardholder name</p>
            <div className="paymentInfo">
              <input type="text" placeholder="Name" className="formInput" />
              <input type="text" className="formInput" />
            </div>
          </div>
          <div>
            <p>Card number</p>
            <div className="paymentInfo">
              <input
                type="number"
                placeholder="XXXXXXXXXXXXXXX"
                className="formInput"
              />
              <input type="text" className="formInput" />
            </div>
          </div>
        </div>
        {/* <div className="column">
          <input type="text" placeholder="Name" className="formInput" />
          <input type="text" placeholder="Last Name" className="formInput" />
        </div> */}
        <div className="column">
          <button type="button">PAY</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
