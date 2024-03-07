'use client';

import React, { Suspense, useEffect } from 'react';
import {
  AddHome,
  Payment,
  ShoppingCartCheckout,
} from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useUnmount } from 'ahooks';
import { useQueryState } from 'nuqs';

import { BaseStepper, Loading } from '@/shared/components';

import { paymentStore, resetPaymentStoreAction } from './lib/store';
import {
  BasketDetailsStep,
  DeliveryDetails,
  PaymentStep,
  SuccessDetails,
} from './components';

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

const PaymentComponent = () => {
  const step = paymentStore((state) => state.step);
  const [redirectStep] = useQueryState('redirect_step');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  useUnmount(() => {
    resetPaymentStoreAction();
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <BaseStepper
          steps={steps}
          activeStep={step || Number(redirectStep)}
          stepNodes={{
            0: <BasketDetailsStep />,
            1: <DeliveryDetails />,
            2: <PaymentStep />,
          }}
        />

        <SuccessDetails />
      </Grid>
    </Grid>
  );
};

export const PaymentSteps = () => (
  <Suspense
    fallback={(
      <div style={{ height: 200, width: '100%' }}>
        <Loading loading />
      </div>
    )}
  >
    <PaymentComponent />
  </Suspense>
);
