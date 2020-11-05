import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectToggleHidden } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from "./header.styled";

const Header = ({ currentUser, TOGGLE_HIDDEN }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="Logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}> SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {TOGGLE_HIDDEN ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  TOGGLE_HIDDEN: selectToggleHidden
});

export default connect(mapStateToProps)(Header);
