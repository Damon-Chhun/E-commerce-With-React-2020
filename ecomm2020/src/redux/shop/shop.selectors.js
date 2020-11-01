import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collection => Object.keys(collection).map(key => collection[key])
);

export const selectCollection = categoryID =>
  createSelector(
    [selectShopCollections],
    collections => collections[categoryID]
  );
