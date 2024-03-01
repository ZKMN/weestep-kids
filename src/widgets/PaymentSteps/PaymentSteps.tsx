'use client';

import React, { useState } from 'react';
import { AddHome, Payment, ShoppingCartCheckout } from '@mui/icons-material';
import { Grid } from '@mui/material';

import { BaseStepper } from '@/shared/components';

import { BasketDetailsWrapper, DeliveryDetailsWrapper } from './components';

const steps = [{
  intl: {
    label: 'titles.orderSummary',
  },
  icon: <ShoppingCartCheckout />,
}, {
  intl: {
    label: 'Delivery Information',
  },
  icon: <AddHome />,
}, {
  intl: {
    label: 'Payment',
  },
  icon: <Payment />,
}];

export const PaymentSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Grid container>
      <Grid item xs={12}>
        <BaseStepper
          activeStep={activeStep}
          steps={steps}
          stepNodes={{
            0: <BasketDetailsWrapper setActiveStep={setActiveStep} />,
            1: <DeliveryDetailsWrapper setActiveStep={setActiveStep} />,
          }}
        />

      </Grid>
    </Grid>
  );
};
