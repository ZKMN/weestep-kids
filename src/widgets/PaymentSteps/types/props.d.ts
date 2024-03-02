import { Dispatch, SetStateAction } from 'react';

import { CUSTOMER_INITIAL_VALUES } from '../consts';

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
  setCarrier: Dispatch<ICarrier>;
  setActiveStep: TActiveStep['setActiveStep'];
  setDeliveryDetails: Dispatch<typeof CUSTOMER_INITIAL_VALUES>;
}

export interface IPaymentStepProps {
  carrier: ICarrier;
  deliveryDetails?: typeof CUSTOMER_INITIAL_VALUES;
  setActiveStep: TActiveStep['setActiveStep'];
}
