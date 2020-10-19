import React from "react";
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-buttom.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map(items => <CartItems items={items} key={items.id} />)
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton>Go To Checkout!</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  items: selectCartItems
});

export default connect(mapStateToProps)(CartDropDown);
