import React from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import CartContext from "./CartContext";
import { useContext } from "react";

const CartModal = ({ onClose }) => {
 const cartCtx= useContext(CartContext);
  let totalAmount = 0;
  if(cartCtx.items.length>0){
     totalAmount = cartCtx.items
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(2);
  }

  return ReactDOM.createPortal(
    <div className="cart-backdrop" onClick={onClose}>
      <div className="cart-modal">
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <li key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <div className="item-details">
                  <span>Amount: {item.amount}</span>
                  <span>Price: ${item.price.toFixed(2)}</span>
                </div>
              </div>
              <div>
                <button onClick={()=>cartCtx.removeItem(item.id)}>−</button>
                <button onClick={()=>cartCtx.addItem(item)} >+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <span>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
        <div className="cart-actions">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="order-btn">Order</button>
        </div>
      </div>
    </div>,
    document.getElementById("cart-portal")
  );
};

export default CartModal;
