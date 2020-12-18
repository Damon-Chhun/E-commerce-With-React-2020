import UserActionTypes from "./user.actiontypes";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START
  };
};

export const googleSignInSuccess = user => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
  };
};

export const googleSignInFail = error => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_FAIL,
    data: error
  };
};

export const emailSignInStart = emailPassword => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailPassword
  };
};
export const emailSignInSuccess = user => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user
  };
};
export const emailSignInFail = error => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_FAIL,
    payload: error
  };
};
