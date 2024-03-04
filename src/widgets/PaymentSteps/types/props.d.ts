import { Dispatch, SetStateAction } from 'react';

import { DELIVERY_INITIAL_VALUES } from '../consts';

export interface ICarrier {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type TActiveStep = {
  setActiveStep: Dispatch<SetStateAction<number>>;
};

export interface IDeliveryDetailsStepProps {
  carrier: ICarrier;
  deliveryDetails: typeof DELIVERY_INITIAL_VALUES;
  setCarrier: Dispatch<ICarrier>;
  setActiveStep: TActiveStep['setActiveStep'];
  setDeliveryDetails: Dispatch<typeof DELIVERY_INITIAL_VALUES>;
}

export interface IPaymentStepProps {
  carrier: ICarrier;
  deliveryDetails?: typeof DELIVERY_INITIAL_VALUES;
  setActiveStep: TActiveStep['setActiveStep'];
}
