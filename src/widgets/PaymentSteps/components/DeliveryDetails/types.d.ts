import { Dispatch } from 'react';

import { CUSTOMER_INITIAL_VALUES } from './consts';

export interface IDeliveryDetails {
  setActiveStep: Dispatch<number>;
  setDeliveryDetails: Dispatch<typeof CUSTOMER_INITIAL_VALUES>;
}
