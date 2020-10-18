import React from "react";
import CartItems from "../cart-items/cart-items.component";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    {items.map(items => (
      <CartItems items={items} key={items.id} />
    ))}
    <CustomButton>Go To Checkout!</CustomButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  items: cart.cartItems
});

export default connect(mapStateToProps)(CartDropDown);
