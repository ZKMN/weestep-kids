import { IProductStoreActions } from '@/shared/types';

import { productStore } from './productStore';

export const initProductSuccessAction: IProductStoreActions['initProductSuccessAction'] = (product) => {
  productStore.setState({
    id: product.id,
    name: product.name,
    price: product.price,
    values: {
      sizeId: product.sizeId,
      quantity: 1,
    },
  });
};

export const setProductQuantityAction: IProductStoreActions['setProductQuantityAction'] = (quantity) => {
  productStore.setState((state) => ({
    values: {
      ...state.values,
      quantity,
    },
  }));
};
