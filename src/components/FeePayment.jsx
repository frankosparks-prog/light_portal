import React from "react";
import "../index.css";

function FeePayment() {
  return (
    <div className="card fee-payment">
      <h3>Fee Payment</h3>
      <div>
        <strong>Fee Balance:</strong> <span className="highlight"></span>
      </div>
      <button className="pay-btn">Make Payment</button>
      <a href="#" className="paid-link">
        Already Paid?
      </a>
    </div>
  );
}

export default FeePayment;
