import { takeEvery } from "redux-saga/effects";
import { shopActionTypes } from "./shop.actiontypes";
import { fetchingCollectionStartAsync } from "./shop.actions";

export function* fetchCollectionStartAsync() {
  yield console.log("fire sage lol");
}

export function* fetchCollectionStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionStartAsync
  );
}
