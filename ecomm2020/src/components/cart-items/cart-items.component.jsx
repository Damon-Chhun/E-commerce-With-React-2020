import React from "react";

import "./cart-items.styles.scss";

const CartItems = ({ items: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} className="img" alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItems;
