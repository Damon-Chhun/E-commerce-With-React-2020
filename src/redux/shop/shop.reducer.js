import { shopActionTypes } from "./shop.actiontypes";

const INITIAL_STATE = {
  collections: {}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopActionTypes.UPDATE_SHOP_DATA:
      return { ...state, collections: payload };

    default:
      return state;
  }
};

export default shopReducer;
