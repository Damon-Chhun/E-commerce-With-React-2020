import { shopActionTypes } from "./shop.actiontypes";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: payload };

    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
