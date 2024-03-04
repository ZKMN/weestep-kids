'use client';

import React, { useEffect, useState } from 'react';
import {
  AddHome,
  Payment,
  ShoppingCartCheckout,
} from '@mui/icons-material';
import { Grid } from '@mui/material';

import { BaseStepper } from '@/shared/components';

import {
  BasketDetailsStep,
  DeliveryDetails,
  PaymentStep,
  SuccessDetails,
} from './components';
import { CARRIERS, DELIVERY_INITIAL_VALUES } from './consts';
import { ICarrier } from './types';

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
  const [carrier, setCarrier] = useState<ICarrier>(CARRIERS[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [deliveryDetails, setDeliveryDetails] = useState(DELIVERY_INITIAL_VALUES);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeStep]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <BaseStepper
          steps={steps}
          activeStep={activeStep}
          stepNodes={{
            0: <BasketDetailsStep
              setActiveStep={setActiveStep}
            />,
            1: <DeliveryDetails
              carrier={carrier}
              setCarrier={setCarrier}
              setActiveStep={setActiveStep}
              deliveryDetails={deliveryDetails}
              setDeliveryDetails={setDeliveryDetails}
            />,
            2: <PaymentStep
              carrier={carrier}
              deliveryDetails={deliveryDetails}
              setActiveStep={setActiveStep}
            />,
          }}
        />

        {activeStep === 3 && <SuccessDetails />}
      </Grid>
    </Grid>
  );
};
