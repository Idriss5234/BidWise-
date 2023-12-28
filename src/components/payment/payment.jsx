import React from "react";
import "./payment.css";

function Payment() {
  return (
    <div className="containeer0">
      <div className="containeer1">
        <div className="options">
          <button className="btns a">Shop Pay</button>
          <button className="btns b">PayPal</button>
          <button className="btns c">Goggle Pay</button>
        </div>
        <div className="info">
          <hr className="first" />
          <p className="or">or</p>
          <hr className="second" />
          <h3>Contact information</h3>
          <input type="email" placeholder="  Email" />
          <br />
          <input type="checkbox" className="check" />
          <span> Email me with news and offers</span>
          <h3>Shipping adress</h3>
          <input type="text" placeholder="  Country/region" /> <br />
          <input type="text" placeholder="  First Name" />
          <br />
          <input type="text" placeholder="  Adress (ex: 12 Main Street)" />
          <br />
          <input type="text" placeholder="  Appartment, suite.....(optional)" />
          <br />
          <input type="text" placeholder="  Postal code" />
          <br />
          <input type="tel" placeholder="  +212" />
          <br />
          <div className="botonat">
            <button className="cart">Return to cart</button>
            <button className="checkout">Bid</button>
          </div>
        </div>
      </div>
      <div className="containeer2">
        <div className="receipt">
          <h1>Cost Breakup</h1>
          <div className="rec">
            <div className="words">
              <p>Price</p>
              <p>Total Items</p>
              <p>Discount coupon</p>
              <p>Shippment cost</p>
              <hr className="str" />
              <h2>Total</h2>
            </div>
            <div className="nbrs">
              <p>500 MAD</p>
              <p>1</p>
              <p>add coupon here</p>
              <p>49 MAD</p>
              <hr className="str" />

              <h2>549 MAD</h2>
            </div>
          </div>
          <h6>
            By continuing you agree to the terms and conditions of our Service
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Payment;
