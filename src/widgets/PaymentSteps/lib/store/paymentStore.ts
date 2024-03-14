import { create } from 'zustand';

import { CARRIERS } from '../../consts';
import { IPaymentStore } from '../../types';

export const paymentStoreValues: Readonly<IPaymentStore> = {
  step: 0,
  carrier: CARRIERS[0],
  clientSecret: '',
  shippingDetails: null,
};

export const paymentStore = create<IPaymentStore>()(() => paymentStoreValues);
