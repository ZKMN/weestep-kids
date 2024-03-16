import { paymentStore, paymentStoreValues } from './paymentStore';

import { IPaymentStoreActions } from '../../types';

export const setCarrierAction: IPaymentStoreActions['setCarrierAction'] = (carrier) => {
  paymentStore.setState((state) => ({
    carrier,
    shippingDetails: !carrier ? null : state.shippingDetails,
  }));
};

export const setShippingDetailsAction: IPaymentStoreActions['setShippingDetailsAction'] = (shippingDetails) => {
  paymentStore.setState({ shippingDetails });
};
export const incrStepAction: IPaymentStoreActions['incrStepAction'] = () => {
  paymentStore.setState(({ step }) => ({ step: step + 1 }));
};
export const decrStepAction: IPaymentStoreActions['decrStepAction'] = () => {
  paymentStore.setState(({ step }) => ({ step: step - 1 }));
};
export const resetPaymentStoreAction: IPaymentStoreActions['resetPaymentStoreAction'] = () => {
  paymentStore.setState(paymentStoreValues);
};
