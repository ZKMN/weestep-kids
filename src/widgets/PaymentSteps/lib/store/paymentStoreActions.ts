import { paymentStore, paymentStoreValues } from './paymentStore';

import { IPaymentStoreActions } from '../../types';

export const setCarrierAction: IPaymentStoreActions['setCarrierAction'] = (carrier) => paymentStore.setState({ carrier });

export const setDeliveryDetailsAction: IPaymentStoreActions['setDeliveryDetailsAction'] = (deliveryDetails) => {
  paymentStore.setState({ deliveryDetails });
};
export const incrStepAction: IPaymentStoreActions['incrStepAction'] = () => {
  paymentStore.setState(({ step }) => ({ step: step + 1 }));
};
export const decrStepAction: IPaymentStoreActions['decrStepAction'] = () => {
  paymentStore.setState(({ step }) => ({ step: step - 1 }));
};
export const setClientSecretAction: IPaymentStoreActions['setClientSecretAction'] = (clientSecret) => {
  paymentStore.setState({ clientSecret });
};
export const resetPaymentStoreAction: IPaymentStoreActions['resetPaymentStoreAction'] = () => {
  paymentStore.setState(paymentStoreValues);
};
