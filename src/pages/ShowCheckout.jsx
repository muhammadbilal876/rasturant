// ShowCheckout.js
import React from "react";
import OrderSummary from "./OrderSummary";
import BillingForm from "./BillingForm";

const ShowCheckout = ({ state, state1, handleChange, handleCheckout }) => {
  const subtotal = state.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 30.0;
  const totalItems = state.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="container py-5">
      <div className="row my-4">
        <div className="col-md-5 col-lg-4 order-md-last">
          <OrderSummary totalItems={totalItems} subtotal={subtotal} shipping={shipping} />
        </div>
        <div className="col-md-7 col-lg-8">
          <BillingForm state1={state1} handleChange={handleChange} handleCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
};

export default ShowCheckout;
