import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectToggleHidden = createSelector(
  [selectCart],
  cart => cart.TOGGLE_HIDDEN
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulator, cartItems) => accumulator + cartItems.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulator, cartItems) =>
      accumulator + cartItems.quantity * cartItems.price,
    0
  )
);
