import { IUserInfoStoreActions } from '@/shared/types';

import { appManagementStore } from '.';

import { handleOverrideStorage } from '../../handlers';

export const setUnAuthProductsAction: IUserInfoStoreActions['setUnAuthProductsAction'] = (products) => {
  appManagementStore.setState((state) => {
    let unAuthProducts = products;

    if (products) {
      unAuthProducts = products.reduce((acc, item) => {
        const productIndex = acc.findIndex(({ productId }) => productId === item.productId);

        if (productIndex > -1) {
          acc.splice(productIndex, 1, item);

          return acc;
        }

        acc.push(item);

        return acc;
      }, [...(state.unAuthProducts || [])]);
    }

    handleOverrideStorage({ unAuthProducts });

    return { unAuthProducts };
  });
};
