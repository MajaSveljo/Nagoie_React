import ShopActionTypes from './shop.types';

export const updatedCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})