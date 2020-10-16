import { CartActionTypes } from "./cart.actiontypes";
import { addItemToCart } from "./cart.utils";

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
    default:
      return {
        ...state
      };
  }
};

export default cartReducer;
