// OrderSummary.js
import React from "react";

const OrderSummary = ({ totalItems, subtotal, shipping }) => {
  return (
    <div className="card mb-4 border-0 shadow">
      <div className="card-header py-3" style={{ backgroundColor: '#004658' }}>
        <h5 className="mb-0 text-white">Order Summary</h5>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Products ({totalItems}) <span>${Math.round(subtotal)}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping <span>${shipping}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div><strong>Total amount</strong></div>
            <span><strong>${Math.round(subtotal + shipping)}</strong></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
