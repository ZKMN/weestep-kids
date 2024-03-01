'use client';

import React, { useEffect, useState } from 'react';
import {
  AddHome,
  Payment,
  ShoppingCartCheckout,
} from '@mui/icons-material';
import { Grid } from '@mui/material';

import { BaseStepper } from '@/shared/components';

import { CUSTOMER_INITIAL_VALUES } from './components/DeliveryDetails/consts';
import { BasketDetails, CreditCard, DeliveryDetails } from './components';

const steps = [{
  icon: <ShoppingCartCheckout />,
  intl: { label: 'titles.orderSummary' },
}, {
  icon: <AddHome />,
  intl: { label: 'titles.deliveryInformation' },
}, {
  icon: <Payment />,
  intl: { label: 'titles.payment' },
}];

export const PaymentSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [price, setPrice] = useState(0);
  const [carrier, setCarrier] = useState();
  const [deliveryDetails, setDeliveryDetails] = useState<typeof CUSTOMER_INITIAL_VALUES>();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeStep]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <BaseStepper
          activeStep={activeStep}
          steps={steps}
          stepNodes={{
            0: <BasketDetails setPrice={setPrice} setActiveStep={setActiveStep} />,
            1: <DeliveryDetails setActiveStep={setActiveStep} setDeliveryDetails={setDeliveryDetails} />,
            2: <CreditCard price={price} carrier={carrier} deliveryDetails={deliveryDetails} />,
          }}
        />

      </Grid>
    </Grid>
  );
};
