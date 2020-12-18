import UserActionTypes from "./user.actiontypes";

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };

    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAIL:
    case UserActionTypes.EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        currentUser: null,
        error: payload
      };

    default:
      return state;
  }
};

export default userReducer;
