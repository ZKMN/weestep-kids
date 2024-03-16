import { create } from 'zustand';

import { CARRIERS } from '../../consts';
import { IPaymentStore } from '../../types';

export const paymentStoreValues: Readonly<IPaymentStore> = {
  step: 0,
  carrier: CARRIERS[0],
  shippingDetails: null,
};

export const paymentStore = create<IPaymentStore>()(() => paymentStoreValues);
