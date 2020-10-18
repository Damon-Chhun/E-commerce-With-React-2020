import React from "react";
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from "../../redux/cart/cart-selector";
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

const mapStateToProps = state => ({
  items: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);
