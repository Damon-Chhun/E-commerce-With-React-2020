import { takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "./user.actiontypes";

export function* signInWithGoogle() {}

export function* googleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
