interface ICarrier {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additional?: string;
  postalCode?: string;
  city?: string;
  street?: string;
  streetNumber?: string;
}

export interface IPaymentStore {
  step: number;
  carrier: ICarrier | null;
  shippingDetails: IShippingDetails | null;
}

export interface IPaymentStoreActions {
  incrStepAction: () => void;
  decrStepAction: () => void;
  setCarrierAction: (carrier: ICarrier | null) => void;
  resetPaymentStoreAction: () => void;
  setShippingDetailsAction: (details: IShippingDetails) => void;
}
