import React from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import CartContext from "./CartContext";
import { useContext } from "react";

const CartModal = ({ onClose }) => {
 const cartCtx= useContext(CartContext);
 let cartItems = [
    { id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99, amount: 2 },
    { id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5, amount: 1 },
    { id: 'm3', name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99, amount: 3 },
    { id: 'm4', name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99, amount: 1 },
  ];
  let totalAmount = 0;
  if(cartCtx.items.length>0){
     totalAmount = cartCtx.items
    .reduce((acc, item) => acc + item.price * item.amount, 0)
    .toFixed(2);
  }

  return ReactDOM.createPortal(
    <div className="cart-backdrop">
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
