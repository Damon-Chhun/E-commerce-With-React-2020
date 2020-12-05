import { takeEvery, call, put } from "redux-saga/effects";
import { shopActionTypes } from "./shop.actiontypes";
import {
  firestore,
  convertCollectionsToMap
} from "../../firebase/firebase.utils";
import {
  fetchingCollectionFailure,
  fetchingCollectionSuccess
} from "./shop.actions";

export function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShop = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsToMap, snapShop);
    yield put(fetchingCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchingCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionStartAsync
  );
}
