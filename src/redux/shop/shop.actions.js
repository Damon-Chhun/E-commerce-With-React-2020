import { shopActionTypes } from "./shop.actiontypes";
import {
  firestore,
  convertCollectionsToMap
} from "../../firebase/firebase.utils";

export const fetchingCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START
  };
};

export const fetchingCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchingCollectionStart());

    collectionRef
      .get()
      .then(async snapshop => {
        const collectionMap = convertCollectionsToMap(snapshop);
        dispatch(fetchingCollectionSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchingCollectionFailure(error.message)));
  };
};

export const fetchingCollectionSuccess = collectionsMap => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchingCollectionFailure = errorMessage => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
