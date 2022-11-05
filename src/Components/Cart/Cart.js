import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ amount: 2, name: "sushi", id: "asd", price: 23 }].map((item) => (
        <li key="sdsa">{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.2</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHide}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
