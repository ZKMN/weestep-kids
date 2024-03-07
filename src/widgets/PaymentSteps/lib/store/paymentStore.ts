import { create } from 'zustand';

import { CARRIERS, DELIVERY_INITIAL_VALUES } from '../../consts';
import { IPaymentStore } from '../../types';

export const paymentStoreValues: Readonly<IPaymentStore> = {
  step: 0,
  carrier: CARRIERS[0],
  clientSecret: '',
  deliveryDetails: DELIVERY_INITIAL_VALUES,
};

export const paymentStore = create<IPaymentStore>()(() => paymentStoreValues);
