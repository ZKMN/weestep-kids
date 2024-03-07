import { DELIVERY_INITIAL_VALUES } from '../consts';

interface ICarrier {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IPaymentStore {
  step: number;
  carrier?: ICarrier;
  clientSecret: string;
  deliveryDetails: typeof DELIVERY_INITIAL_VALUES;
}

export interface IPaymentStoreActions {
  incrStepAction: () => void;
  decrStepAction: () => void;
  setCarrierAction: (carrier: ICarrier) => void;
  setClientSecretAction: (clientSecret: string) => void;
  resetPaymentStoreAction: () => void;
  setDeliveryDetailsAction: (details: typeof DELIVERY_INITIAL_VALUES) => void;
}
