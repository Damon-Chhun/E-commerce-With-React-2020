import { CartActionTypes } from "./cart.actiontypes";
import { addItemToCart, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  TOGGLE_HIDDEN: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActionTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        TOGGLE_HIDDEN: !state.TOGGLE_HIDDEN
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, payload)
      };
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
