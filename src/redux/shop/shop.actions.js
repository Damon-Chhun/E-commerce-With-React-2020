import { shopActionTypes } from "./shop.actiontypes";

export const UpdateShopData = collectionData => {
  return {
    type: shopActionTypes.UPDATE_SHOP_DATA,
    payload: collectionData
  };
};
