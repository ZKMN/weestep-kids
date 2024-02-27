import { ILocalBasketStoreActions } from '@/shared/types';

import { localBasketStore } from '.';

import { handleOverrideStorage } from '../../handlers';

export const addProductToLocalBasketAction: ILocalBasketStoreActions['addProductToLocalBasketAction'] = (product) => {
  localBasketStore.setState((state) => {
    const products = [...(state.products || []), product];

    handleOverrideStorage({ products });

    return { products };
  });
};

export const removeProductFromLocalBasketAction: ILocalBasketStoreActions['removeProductFromLocalBasketAction'] = (id) => {
  localBasketStore.setState((state) => {
    let products = [...(state.products || [])];

    products = products.filter(({ productId }) => productId !== id);

    handleOverrideStorage({ products });

    return { products };
  });
};

export const editProductInLocalBasketAction: ILocalBasketStoreActions['editProductInLocalBasketAction'] = (product) => {
  localBasketStore.setState((state) => {
    let products = [...(state.products || [])];

    products = products.reduce((acc, item) => {
      const productIndex = acc.findIndex(({ productId }) => productId === product.productId);

      if (productIndex > -1) {
        acc.splice(productIndex, 1, item);

        return acc;
      }

      return acc;
    }, [...(state.products || [])]);

    handleOverrideStorage({ products });

    return { products };
  });
};
