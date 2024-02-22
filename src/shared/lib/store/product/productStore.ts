import { create } from 'zustand';

import { IProductStore } from '@/shared/types';

export const productStoreValues: Readonly<IProductStore> = {
  id: '',
  name: '',
  price: 0,
  values: {
    sizeId: 0,
    quantity: 1,
  },
};

export const productStore = create<IProductStore>()(() => productStoreValues);
